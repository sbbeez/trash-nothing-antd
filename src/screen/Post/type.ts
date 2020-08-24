export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Photo {
  images: Image[] | null;
  url: string;
  photo_id: string;
  thumbnail: string;
  blurhash: string;
}

export interface Post {
  outcome?: null;
  user_id: number;
  post_id: number;
  footer?: any;
  title: string;
  longitude: number;
  content: string;
  photos: Photo[] | null;
  source: string;
  date: string;
  latitude: number;
  group_id?: any;
  type: string;
}

export interface PostResponse {
  group_ids: null;
  num_pages: number;
  num_posts: number;
  per_page: number;
  last_listings_view: null;
  posts: Post[];
  page: number;
  start_index: number;
  end_index: number;
}
