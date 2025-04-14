package io.zenigo.api.flags.controller;

import io.zenigo.api.flags.domain.FeatureFlagDocument;
import io.zenigo.api.flags.service.FeatureFlagService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequiredArgsConstructor
@RequestMapping("/flags")
public class FeatureFlagController {

    private final FeatureFlagService featureFlagService;

    @GetMapping(value = "/for-environment/{environmentId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Flux<FeatureFlagDocument> findAllByEnvironmentId(@PathVariable String environmentId) {
        return this.featureFlagService.findAllByEnvironmentId(environmentId);
    }

}
