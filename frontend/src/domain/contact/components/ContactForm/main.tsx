import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContactSubmit } from '../../hooks/useContactSubmit';
import { Loader2 } from 'lucide-react';
import type { ContactFormProps } from './types';
import type { ContactFormData } from '../../types';

const contactFormSchema = z.object({
  name: z
    .string({ message: 'Nome é obrigatório' })
    .min(1, { message: 'Nome não pode estar vazio' })
    .max(100, { message: 'Nome muito longo (máximo 100 caracteres)' }),
  email: z.string({ message: 'Email é obrigatório' }).email({ message: 'Email inválido' }),
  phone: z
    .string({ message: 'Telefone é obrigatório' })
    .min(10, { message: 'Telefone inválido (mínimo 10 dígitos)' })
    .max(15, { message: 'Telefone inválido (máximo 15 dígitos)' }),
  message: z
    .string({ message: 'Mensagem é obrigatória' })
    .min(10, { message: 'Mensagem muito curta (mínimo 10 caracteres)' })
    .max(500, { message: 'Mensagem muito longa (máximo 500 caracteres)' }),
});

/**
 * @component ContactForm
 * @summary Contact form component with validation
 * @domain contact
 * @type domain-component
 * @category form
 */
export const ContactForm = ({ vehicleId, onSuccess }: ContactFormProps) => {
  const { submit, isSubmitting, isSuccess } = useContactSubmit();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submit({ ...data, vehicleId });
      reset();
      onSuccess?.();
    } catch (error: unknown) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Mensagem enviada com sucesso!</h3>
        <p className="text-green-700">Entraremos em contato em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefone
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        />
        {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        />
        {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </form>
  );
};
