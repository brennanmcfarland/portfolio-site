package brennanmcfarland.AboutMeDBBuilder.aboutmedbbuilder;

import java.util.Optional;
import java.sql.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AboutmedbbuilderApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(AboutmedbbuilderApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		if (strings.length == 0) {
			throw new IllegalArgumentException("ERROR: Must specify the password to the root db user with --args='password'");
		}
		String password = strings[0];
		System.out.println("Connecting to db server...");
		Class.forName("com.mysql.jdbc.Driver");
		Optional<Connection> maybeConnection = Optional.empty();
		try {
			maybeConnection = Optional.of(DriverManager.getConnection("jdbc:mysql://localhost:3306/aboutmedb","root", password));
			if (!maybeConnection.isPresent()) {
				throw new SQLException("Connection not present!");
			}
			Connection connection = maybeConnection.get();

			System.out.println("Executing queries to create and populate db...");
			Statement buildDBStatement = connection.createStatement();
			
			buildDBStatement.addBatch("create database aboutmedb;");

			buildDBStatement.executeBatch();
			System.out.println("Closing connection...");
			connection.close();
			System.out.println("done!");
		} catch(Exception e) {
			System.out.println("CONNECTION ERROR");
			System.out.println(e);
		} finally {
			if (maybeConnection.isPresent()) {
				maybeConnection.get().close();
			}
		}
	}
}
