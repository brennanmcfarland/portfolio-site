package brennanmcfarland.projects;

import java.util.Optional;
import java.util.List;
import java.util.LinkedList;
import java.sql.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.io.IOException;
import java.io.File;
import java.nio.file.Path;
import java.nio.file.Files;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

import org.springframework.boot.CommandLineRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// TODO: cleanup/split out this file

interface ResultParser<T> {
        T parse(ResultSet resultSet);
}

class Project {
	public final String name;
	public final String displayName;
	public final String description;
	public final String sourceUrl;
	public final boolean isSchoolProject;
	public final short precedence;
	
	public Project(String name, String displayName, String description, String sourceUrl, boolean isSchoolProject, short precedence) {
		this.name = name;
		this.displayName = displayName;
		this.description = description;
		this.sourceUrl = sourceUrl;
		this.isSchoolProject = isSchoolProject;
		this.precedence = precedence;
	}
}

// TODO: separate responsibilities
@SpringBootApplication
@RestController
public class ProjectsApplication implements CommandLineRunner {

	private static final Logger log = LoggerFactory.getLogger(ProjectsApplication.class);
	// TODO: move to class and enforce it's always truthy
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

	// TODO: clean up or remove
	@CrossOrigin
	@GetMapping("/projects")
	public List<Project> getProjects() {
		ResultParser<Project> parser = r -> {
			try {
				// TODO: make an actual fileserver? or does it not matter since this is a microservice anyway?
				Path descriptionPath = Path.of("src/main/resources/static/descriptions", r.getString(3));
				String description = Files.readString(descriptionPath, StandardCharsets.UTF_8);
				return new Project(r.getString(1), r.getString(2), description, r.getString(4), r.getBoolean(5), r.getShort(6));
			} catch(IOException|SQLException e) {
				log.error("Error parsing query result");
				log.error(e.toString());
				return null;
			}
		};
		List<Project> result = new LinkedList<Project>();
		try {
			Statement queryStatement = connection.createStatement();
			if (queryStatement == null) {
				throw new SQLException("SQL statement is falsy");
			}
			ResultSet queryResult = queryStatement.executeQuery("select * from Project");
			while(queryResult.next()) {
				result.add(parser.parse(queryResult));
			}
			queryResult.close();
		} catch (SQLException e) {
			log.error("SQL exception");
			log.error(e.toString());
		}
		
		return result;
	}

	@CrossOrigin
	@GetMapping("/project")
	public Project getProject(@RequestParam(value = "name") String projectName) {
		ResultParser<Project> parser = r -> {
			try {
				// TODO: make an actual fileserver? or does it not matter since this is a microservice anyway?
				Path descriptionPath = Path.of("src/main/resources/static/descriptions", r.getString(3));
				String description = Files.readString(descriptionPath, StandardCharsets.UTF_8);
				return new Project(r.getString(1), r.getString(2), description, r.getString(4), r.getBoolean(5), r.getShort(6));
			} catch(IOException|SQLException e) {
				log.error("Error parsing query result");
				log.error(e.toString());
				return null;
			}
		};
		Project result = new Project("", "", "", "", false, (short)32767);
		try {
			Statement queryStatement = connection.createStatement();
			if (queryStatement == null) {
				throw new SQLException("SQL statement is falsy");
			}
			ResultSet queryResult = queryStatement.executeQuery("select * from Project where name='" + projectName + "'");
			queryResult.next();
			result = parser.parse(queryResult);
			queryResult.close();
		} catch (SQLException e) {
			log.error("SQL exception");
			log.error(e.toString());
		}
		
		return result;
	}
}
