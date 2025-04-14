package io.zenigo.api.flags.service;

import io.zenigo.api.flags.domain.FeatureFlagDocument;
import reactor.core.publisher.Flux;

public interface FeatureFlagService {

    Flux<FeatureFlagDocument> findAllByEnvironmentId(String environmentId);

}
