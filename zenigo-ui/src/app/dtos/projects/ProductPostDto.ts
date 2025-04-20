export type ProductPostType = 'update' | 'issue';

export interface ProductPostDto {
  id: string;
  summary: string;
  title: string;
  upVotes: number;
  comments: number;
  type: ProductPostType;
}
