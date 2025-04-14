package io.zenigo.gateway;

import io.zenigo.utilities.StringUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GatewayApplication {

	public static void main(String[] args) {
		System.out.println(StringUtils.join(StringUtils.split("Hello World")));
		SpringApplication.run(GatewayApplication.class, args);
	}

}
