interface TMeta {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
}

export type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: TMeta;
  data: T;
};

export interface TERRORSOURCES {
  path: string;
  message: string;
}
