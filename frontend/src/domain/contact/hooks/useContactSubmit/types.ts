import type { ContactSubmitDto } from '../../types';

export interface UseContactSubmitReturn {
  submit: (data: ContactSubmitDto) => Promise<void>;
  isSubmitting: boolean;
  error: Error | null;
  isSuccess: boolean;
}
