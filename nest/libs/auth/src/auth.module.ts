import {ApiKeyGuard} from '@app/auth/guards/api-key/api-key.guard';
import {JwtStrategy} from '@app/auth/strategies';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [JwtStrategy, ApiKeyGuard],
  exports: [ApiKeyGuard],
})
export class AuthModule {}
