# Projeto React — Componentes, Props e Children

Projeto simples criado com React e Vite para praticar:

- Criação e reutilização de componentes;
- Exportação nomeada de múltiplos componentes em um arquivo;
- Importação dos componentes em `App.jsx`;
- Passagem de dados por `props`;
- Renderização de conteúdo aninhado com `props.children`;
- Estilização com arquivos CSS.

## Requisitos

- Node.js instalado (versão LTS recomendada);
- npm (instalado junto com o Node.js).

## Como executar

1. Extraia o arquivo ZIP.
2. Abra a pasta do projeto no VS Code.
3. Abra o terminal na pasta do projeto.
4. Instale as dependências:

   ```bash
   npm install
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Onde estão os conceitos?

- `src/components/Components.jsx`: declara e exporta `MainContent` e `Card`.
- `src/App.jsx`: importa os componentes e passa `title`, `description` e `author` como props.
- `children`: o conteúdo colocado entre `<MainContent>...</MainContent>` e `<Card>...</Card>` é exibido dentro desses componentes.
- `src/App.css` e `src/components/Components.css`: estilos da página e dos cards.

## Exemplo de children

```jsx
<Card title="Exemplo" description="Um card de demonstração.">
  <p>Este parágrafo é recebido pela prop children.</p>
</Card>
```
# JS-e-React
