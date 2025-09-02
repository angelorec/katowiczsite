export type Comment = {
  user: string;
  text: string;
};

export type Post = {
  id: string;
  author: string;
  avatarUrl: string;
  type: 'image' | 'video';
  mediaUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
};
