package io.zenigo.api.flags.repository;

import io.zenigo.api.flags.domain.FeatureFlagDocument;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface FeatureFlagRepository extends ReactiveCrudRepository<FeatureFlagDocument, String> {

    Flux<FeatureFlagDocument> findAllByEnvironment_Id(String environmentId);

}
