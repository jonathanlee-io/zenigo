package io.zenigo.api.flags.domain;

import io.zenigo.api.domain.AbstractDocument;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "feature_flags")
public class FeatureFlagDocument extends AbstractDocument {

    @Id
    private String id;

    private boolean active;

    @DBRef
    private FeatureFlagEnvironmentDocument environment;

}
