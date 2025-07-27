export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
  pagination: Pagination;
}

interface Pagination {
  total: number;
  page: number;
  totalPages: number;
  limit: number;
}
