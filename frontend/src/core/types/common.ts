/**
 * @type ApiResponse
 * @summary Standard API response structure
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/**
 * @type PaginationParams
 * @summary Pagination parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
}

/**
 * @type PaginatedResponse
 * @summary Paginated API response
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
