package brennanmcfarland.AboutMeDB;

import java.sql.*;

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

@SpringBootApplication
@RestController
public class AboutMeDbApplication implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(AboutMeDbApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AboutMeDbApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/aboutmedb","backend","");
			Statement queryStatement = connection.createStatement();
			ResultSet resultSet = queryStatement.executeQuery("select * from Keyword");
			while(resultSet.next()) {
				System.out.println(resultSet.getString(1));
			}
			connection.close();
		} catch(Exception e) {
			System.out.println(e);
		}
	}

	@GetMapping("/sources")
	public String getSources() {
		return "sources test passed";
	}

	@GetMapping("/keyword")
	public String getKeywordAppearances(@RequestParam(value = "keyword") String keyword) {
		return "keyword test passed";
	}

}
