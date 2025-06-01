package io.zenigo.api_gateway.config;

import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.jwk.OctetSequenceKey;
import jakarta.validation.constraints.NotNull;
import java.nio.charset.StandardCharsets;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

@Getter
@Setter
@Validated
@ConfigurationProperties(prefix = "zenigo.auth.jwt")
public class AuthProperties {

  @NotNull
  private SecretKey secret;

  @NotNull
  private JWSAlgorithm algorithm;

  public void setAlgorithm(String algorithm) {
    this.algorithm = JWSAlgorithm.parse(algorithm);
  }

  public void setSecret(String secret) {
    byte[] secretBytes = secret.getBytes(StandardCharsets.UTF_8);
    var jwk = new OctetSequenceKey.Builder(new SecretKeySpec(secretBytes, this.algorithm.getName()))
        .algorithm(this.algorithm)
        .build();

    this.secret = jwk.toSecretKey();
  }

}
