/**
 * @module contact
 * @summary Contact domain module for managing contact form submissions
 * @domain functional
 * @dependencies React Hook Form, Zod, TanStack Query, Axios
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2024-01-15
 */

export * from './components/ContactForm';
export * from './hooks/useContactSubmit';
export * from './services/contactService';
export * from './types';

export const moduleMetadata = {
  name: 'contact',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['ContactForm'],
  publicHooks: ['useContactSubmit'],
  publicServices: ['contactService'],
  dependencies: {
    internal: ['@/core/components', '@/core/lib', '@/core/utils'],
    external: ['react', 'react-hook-form', 'zod', '@tanstack/react-query', 'axios'],
    domains: [],
  },
  exports: {
    components: ['ContactForm'],
    hooks: ['useContactSubmit'],
    services: ['contactService'],
    types: ['ContactFormData', 'ContactSubmitDto'],
  },
} as const;
