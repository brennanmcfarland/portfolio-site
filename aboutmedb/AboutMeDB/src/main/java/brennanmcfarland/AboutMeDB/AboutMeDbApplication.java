package brennanmcfarland.AboutMeDB;

import java.sql.*;
import java.util.Optional;
import java.util.List;
import java.util.LinkedList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
// import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

interface ResultParser<T> {
	T parse(ResultSet resultSet);
}

// TODO: separate responsibilities
@SpringBootApplication
@RestController
public class AboutMeDbApplication implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(AboutMeDbApplication.class);
	private Connection connection;

	public static void main(String[] args) {
		SpringApplication.run(AboutMeDbApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		Class.forName("com.mysql.jdbc.Driver");
		try {
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/aboutmedb","backend","");
		} catch(Exception e) {
			System.out.println("CONNECTION ERROR");
			System.out.println(e);
		}
	}

	private Optional<ResultSet> executeSQLQuery(String queryString) throws SQLException {
		Optional<Statement> queryStatement = Optional.empty();
		Optional<ResultSet> resultSet = Optional.empty();
		try {
			queryStatement = Optional.of(connection.createStatement());
			resultSet = Optional.of(queryStatement.get().executeQuery(queryString));
		} catch(Exception e) {
			System.out.println("QUERY ERROR");
			System.out.println(e);
		}
		// TODO: close or reuse the queryStatement (but not the result set)
		return resultSet;		
	}

	private <T> List<T> queryToList(String queryString, ResultParser<T> parser) {
		List<T> resultList = new LinkedList<T>();
		Optional<ResultSet> maybeQueryResult = Optional.empty();
		try {
			maybeQueryResult = executeSQLQuery(queryString);
			if (maybeQueryResult.isPresent()) {
				ResultSet queryResult = maybeQueryResult.get();
				while(queryResult.next()) {
					resultList.add(parser.parse(queryResult));
				}
				queryResult.close();
			}
		} catch(SQLException e) {
			System.out.println("SQL exception");
			System.out.println(e);
		}

		return resultList;
	}

	@GetMapping("/healthcheck")
	public String getHealthCheck() {
		return "Healthcheck passed.  This means an API endpoint was hit successfully.";
	}

	@GetMapping("/sources")
	public List<String> getSources() {
		ResultParser parser = r -> {
			try {
				return r.getString(1);
			} catch(SQLException e) {
				System.out.println("Error parsing query result");
				return "";
			}};
			List<String> result = queryToList("select name from Source", parser);
		return result;
	}

	@GetMapping("/keyword")
	public List<KeywordAppearance> getKeywordAppearances(@RequestParam(value = "keyword") String keyword) {
		ResultParser parser = r -> {
			try {
				return new KeywordAppearance(r.getString(1), r.getString(2));
			} catch(SQLException e) {
				System.out.println("Error parsing query result");
				return new KeywordAppearance("", "");
			}};
			List<KeywordAppearance> result = queryToList("select Keyword.name, Source.name \n"
				+ "from KeywordAppearance inner join Keyword \n"
				+ "on Keyword.id = KeywordAppearance.keyword = Keyword.id \n"
				+ "inner join Source \n"
				+ "on Source.id = KeywordAppearance.source \n"
				+ "where Keyword.name = '" + keyword + "'",
				parser);
		return result;
	}

	// TODO: close db connection on quit

}
