# Desafio Técnico

# 🛍️ Lista de Produtos - Interface com Favoritos

## 🎯 Objetivo

Criar uma interface simples para exibição e manipulação de uma lista de produtos, utilizando dados mockados e simulação de requisição assíncrona.

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) ou [Create React App](https://create-react-app.dev/)
- [React Router](https://reactrouter.com/)
- [Context API](https://reactjs.org/docs/context.html) ou [Redux](https://redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/) ou [Material UI](https://mui.com/) (opcional)

---

## 📦 Funcionalidades

### 1. Exibição de Produtos

- Simulação de requisição com `Promise` e `setTimeout`
- Tratamento de dados incompletos:
  - Nome ausente → "Nome desconhecido"
  - Preço ausente → "Preço não disponível"

### 2. Favoritar/Desfavoritar Produtos

- Botão para adicionar/remover dos favoritos
- Página exclusiva para produtos favoritados
- Limite de 2 favoritos por categoria
  - Ao favoritar o terceiro, o mais antigo é removido
  - Produtos com múltiplas categorias contam em todas

### 3. Modal de Detalhes

- Exibição completa das informações do produto
- Favoritar/desfavoritar diretamente no modal
- Exibição de variantes (cor, tamanho, etc.)

### 4. Filtros

- Busca por nome e/ou categoria
- Filtros adicionais opcionais (preço, estoque, variantes)

### 5. Compartilhamento de Estado

- Favoritos disponíveis entre componentes
- Header fixo com contador de favoritos atualizado em tempo real

### 6. TypeScript

- Uso obrigatório de interfaces para tipagem dos dados

---

## ✨ Extras (Opcional)

- Paginação ou carregamento infinito
- Filtros avançados
- Uso de bibliotecas externas
- Estrutura de projeto organizada e componentes reutilizáveis


---

## 📦 Instalação

```bash
# Instale as dependências
npm install

# Rode o projeto
npm run dev
