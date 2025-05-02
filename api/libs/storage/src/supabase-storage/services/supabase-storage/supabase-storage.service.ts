import {StorageService} from '@app/storage/storage-service.interface';
import {Injectable, OnModuleInit} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {createClient, SupabaseClient} from '@supabase/supabase-js';
import {decode} from 'base64-arraybuffer';

@Injectable()
export class SupabaseStorageService implements StorageService, OnModuleInit {
  private supabase: SupabaseClient;

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    this.supabase = createClient(
      this.configService.getOrThrow('SUPABASE_URL'),
      this.configService.getOrThrow('SUPABASE_SECRET_KEY'),
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
