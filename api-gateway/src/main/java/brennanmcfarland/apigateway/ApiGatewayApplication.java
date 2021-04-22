package brennanmcfarland.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

/**
 * This Gateway app isn't really used right now because I'm tired of trying to configure SSL certs and stuff
 * so I just used AWS API Gateway instead.  It works locally though.
 */
@SpringBootApplication
@RestController
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}

	@Bean
	public RouteLocator myRoutes(RouteLocatorBuilder builder) {
		return builder.routes()
			.route(p -> p
				.path("/projects")
				.uri("http://localhost:9100"))
			.route(p -> p
				.path("/project")
				.uri("http://localhost:9100"))
			.build();
	}

}
