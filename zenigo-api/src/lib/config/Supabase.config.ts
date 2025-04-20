import {Configuration, Value} from '@jdevel/configify';

@Configuration()
export class SupabaseConfig {
  @Value('SUPABASE_URL')
  url: string;

  @Value('SUPABASE_PUBLIC_KEY')
  publicKey: string;

  @Value('SUPABASE_SECRET_KEY')
  secretKey: string;

  @Value('SUPABASE_JWT_SECRET')
  jwtSecret: string;
}
