/**
 * @type ContactFormData
 * @summary Contact form data structure
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  vehicleId?: number;
}

/**
 * @type ContactSubmitDto
 * @summary Contact submission DTO
 */
export interface ContactSubmitDto {
  name: string;
  email: string;
  phone: string;
  message: string;
  vehicleId?: number;
}

/**
 * @type ContactSubmitResponse
 * @summary Contact submission response
 */
export interface ContactSubmitResponse {
  success: boolean;
  message: string;
}
