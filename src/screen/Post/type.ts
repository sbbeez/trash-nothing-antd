export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Photo {
  images: Image[];
  url: string;
  photo_id: string;
  thumbnail: string;
  blurhash: string;
}

export interface Post {
  outcome?: any;
  user_id: number;
  post_id: number;
  footer?: any;
  title: string;
  longitude: number;
  content: string;
  photos: Photo[];
  source: string;
  date: Date;
  latitude: number;
  group_id?: any;
  type: string;
}

export interface PostResponse {
  group_ids?: any;
  num_pages: number;
  num_posts: number;
  per_page: number;
  last_listings_view?: any;
  posts: Post[];
  page: number;
  start_index: number;
  end_index: number;
}
