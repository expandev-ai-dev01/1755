import { useMutation } from '@tanstack/react-query';
import { contactService } from '../../services/contactService';
import type { UseContactSubmitReturn } from './types';

/**
 * @hook useContactSubmit
 * @summary Manages contact form submission
 * @domain contact
 * @type domain-hook
 * @category form
 */
export const useContactSubmit = (): UseContactSubmitReturn => {
  const mutation = useMutation({
    mutationFn: contactService.submit,
  });

  return {
    submit: mutation.mutateAsync,
    isSubmitting: mutation.isPending,
    error: mutation.error as Error | null,
    isSuccess: mutation.isSuccess,
  };
};
