export interface IBooks {
  id?: string;
  title: string;
  author: string;
  published_year: string;
  total_copies: number;
  copies_available: number;
  genre: string;
  isbn: string;
  updatedBy?: string;
  createdBy?: string;
}
