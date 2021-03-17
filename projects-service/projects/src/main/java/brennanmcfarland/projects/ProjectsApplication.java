package brennanmcfarland.projects;

import java.util.Optional;
import java.util.List;
import java.util.LinkedList;
import java.sql.*;

import org.springframework.boot.CommandLineRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

interface ResultParser<T> {
        T parse(ResultSet resultSet);
}

// TODO: separate responsibilities
@SpringBootApplication
@RestController
public class ProjectsApplication implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(ProjectsApplication.class);
	private Connection connection;

	public static void main(String[] args) {
		SpringApplication.run(ProjectsApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		if (strings.length != 1) {
			log.error("Must provide one and only one positional argument for the password");
			throw new IllegalArgumentException("Incorrect number of parameters");
		}
		// the password needs to be the same one the database was created with
		String password = strings[0];
		log.info("establishing db connection...");
		try {
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/projects", "backend", password);
		} catch(Exception e) {
			log.error("DATABASE CONNECTION ERROR");
			log.error(e.toString());
		}
	}

	@CrossOrigin
	@GetMapping("/healthcheck")
	public String getHealthCheck() {
		return "Healthcheck passed.  This means an API endpoint was hit successfully.";
	}

	// TODO: remove "throws" and actually catch the errors
	@CrossOrigin
	@GetMapping("/projects")
	public List<String> getProjects() throws SQLException {
		ResultParser<String> parser = r -> {
			try {
				return r.getString(1);
			} catch(SQLException e) {
				log.error("Error parsing query result");
				return "";
			}
		};
		// TODO: make this part robust
		ResultSet queryResult = connection.createStatement().executeQuery("select * from Project");
		List<String> result = new LinkedList<String>();
		while(queryResult.next()) {
			result.add(parser.parse(queryResult));
		}
		queryResult.close();
		return result;
	}
}
