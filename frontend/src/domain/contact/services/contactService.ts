import { publicClient } from '@/core/lib/api';
import type { ContactSubmitDto, ContactSubmitResponse } from '../types';

/**
 * @service contactService
 * @summary Contact form submission service
 * @domain contact
 * @type rest-service
 * @apiContext external
 *
 * @description
 * All methods in this service use publicClient which targets:
 * /api/v1/external/contact/...
 */
export const contactService = {
  /**
   * @endpoint POST /api/v1/external/contact
   * @summary Submits contact form data
   */
  async submit(data: ContactSubmitDto): Promise<ContactSubmitResponse> {
    const response = await publicClient.post('/contact', data);
    return response.data;
  },
};
