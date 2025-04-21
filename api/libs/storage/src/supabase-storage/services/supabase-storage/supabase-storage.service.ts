import {SupabaseConfig} from '@app/config/Supabase.config';
import {Injectable, OnModuleInit} from '@nestjs/common';
import {createClient, SupabaseClient} from '@supabase/supabase-js';

@Injectable()
export class SupabaseStorageService implements OnModuleInit {
  private supabase: SupabaseClient;

  constructor(private readonly supabaseConfig: SupabaseConfig) {}

  onModuleInit() {
    this.supabase = createClient(
      this.supabaseConfig.url,
      this.supabaseConfig.secretKey,
    );
  }

  async generateUrlForImage(bucketName: string, imagePath: string) {
    return this.supabase.storage
      .from(bucketName)
      .createSignedUrl(imagePath, 1800);
  }
}
