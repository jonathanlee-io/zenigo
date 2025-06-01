package io.zenigo.feature_flags_service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.Import;

@Import(TestcontainersConfiguration.class)
class FeatureFlagsServiceApplicationTests {

	@Test
	void assertTrue() {
		Assertions.assertTrue(true);
	}

}
