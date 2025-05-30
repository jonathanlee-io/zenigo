package io.zenigo.feature_flags_service;

import org.springframework.boot.SpringApplication;

public class TestFeatureFlagsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.from(FeatureFlagsServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
