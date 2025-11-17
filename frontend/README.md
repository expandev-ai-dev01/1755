# Catálogo de Carros

Listagem de carros, onde ao clicar no card consigo ver detalhes e preencher um formulário de contato.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- Tailwind CSS 4.1.17
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- React Hook Form 7.63.0
- Zod 4.1.11

## Estrutura do Projeto

```
src/
├── assets/          # Estilos globais
├── core/            # Componentes e utilitários compartilhados
│   ├── components/  # Componentes UI genéricos
│   ├── lib/         # Configurações de bibliotecas
│   ├── types/       # Tipos TypeScript globais
│   └── utils/       # Funções utilitárias
├── domain/          # Domínios de negócio (features)
├── layouts/         # Layouts da aplicação
├── pages/           # Páginas da aplicação
└── router/          # Configuração de rotas
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`
2. Configure as variáveis de ambiente conforme necessário

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Features

- **Listagem de carros**: Exibição de todos os veículos disponíveis no catálogo
- **Visualização de detalhes**: Página com informações detalhadas do veículo
- **Formulário de contato**: Formulário para manifestar interesse no veículo

## Padrões de Código

- Componentes funcionais com TypeScript
- Hooks personalizados para lógica reutilizável
- TanStack Query para gerenciamento de estado do servidor
- React Hook Form + Zod para validação de formulários
- Tailwind CSS para estilização
- Estrutura modular baseada em domínios