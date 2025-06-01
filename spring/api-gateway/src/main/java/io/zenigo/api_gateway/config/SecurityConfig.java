package io.zenigo.api_gateway.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity.CsrfSpec;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.NimbusReactiveJwtDecoder;
import org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebFluxSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final AuthProperties authProperties;

  @Value("${zenigo.cors.url}")
  private String frontEndUrl;

  @Bean
  public SecurityWebFilterChain securityFilterChain(ServerHttpSecurity http) throws Exception {
    return http
        .csrf(CsrfSpec::disable)
        .cors(corsSpec -> corsSpec.configurationSource(corsConfigurationSource()))
        .oauth2ResourceServer(httpSecurityOAuth2ResourceServerConfigurer ->
            httpSecurityOAuth2ResourceServerConfigurer.jwt(Customizer.withDefaults())
        )
        .authorizeExchange(authorizeExchangeSpec -> authorizeExchangeSpec.anyExchange().authenticated())
        .build();
  }

  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration corsConfig = new CorsConfiguration();
    corsConfig.addAllowedOrigin(frontEndUrl);
    corsConfig.addAllowedMethod("*");
    corsConfig.addAllowedHeader("Authorization");
    corsConfig.addAllowedHeader("Content-Type");
    corsConfig.setAllowCredentials(true);
    corsConfig.setMaxAge(3600L);

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", corsConfig);

    return source;
  }

  @Bean
  public ReactiveJwtDecoder reactiveJwtDecoder() {
    return NimbusReactiveJwtDecoder
        .withSecretKey(this.authProperties.getSecret())
        .macAlgorithm(MacAlgorithm.valueOf(this.authProperties.getAlgorithm().getName()))
        .build();
  }
}