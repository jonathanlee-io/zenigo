import {SupabaseConfig} from '@app/config/Supabase.config';
import {StorageService} from '@app/storage/storage-service';
import {Injectable, OnModuleInit} from '@nestjs/common';
import {createClient, SupabaseClient} from '@supabase/supabase-js';
import {decode} from 'base64-arraybuffer';

@Injectable()
export class SupabaseStorageService implements StorageService, OnModuleInit {
  private supabase: SupabaseClient;

  constructor(private readonly supabaseConfig: SupabaseConfig) {}

  onModuleInit() {
    this.supabase = createClient(
      this.supabaseConfig.url,
      this.supabaseConfig.secretKey,
    );
  }

  async generateUploadedResourceUrl(
    bucketName: string,
    filePath: string,
    expiresIn = 1800,
  ): Promise<string> {
    const {data, error} = await this.supabase.storage
      .from(bucketName)
      .createSignedUrl(filePath, expiresIn);
    if (error) {
      throw new Error(error.message);
    }
    return data.signedUrl;
  }

  async uploadFile(
    bucketName: string,
    filePath: string,
    fileDataBase64Encoded: string,
    contentType: string,
  ): Promise<void> {
    const {error} = await this.supabase.storage
      .from(bucketName)
      .upload(filePath, decode(fileDataBase64Encoded), {contentType});
    if (error) {
      throw new Error(error.message);
    }
  }
}
