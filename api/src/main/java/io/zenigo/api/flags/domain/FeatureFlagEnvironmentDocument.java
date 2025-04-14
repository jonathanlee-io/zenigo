package io.zenigo.api.flags.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "feature_flag_environments")
public class FeatureFlagEnvironmentDocument {

    @Id
    private String id;

    private String name;

    private Instant createdAt;

    private Instant updatedAt;

}
