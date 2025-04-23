export interface StorageService {
  generateUploadedResourceUrl(
    bucketName: string,
    filePath: string,
    expiresIn?: number,
  ): Promise<string>;

  uploadFile(
    bucketName: string,
    filePath: string,
    fileDataBase64Encoded: string,
    contentType: string,
  ): Promise<void>;
}
