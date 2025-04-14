package io.zenigo.api.flags.service.impl;

import io.zenigo.api.flags.domain.FeatureFlagDocument;
import io.zenigo.api.flags.repository.FeatureFlagRepository;
import io.zenigo.api.flags.service.FeatureFlagService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

@Service
@RequiredArgsConstructor
public class FeatureFlagServiceImpl implements FeatureFlagService {

    private final FeatureFlagRepository featureFlagRepository;

    @Override
    public Flux<FeatureFlagDocument> findAllByEnvironmentId(String environmentId) {
        return this.featureFlagRepository.findAllByEnvironment_Id(environmentId);
    }

}
