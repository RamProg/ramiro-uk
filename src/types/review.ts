type Author = {
  name: string;
  role: string;
  picture: string;
  linkedin?: string;
  email?: string;
};

export type Review = {
  author: Author;
  review: string;
};
