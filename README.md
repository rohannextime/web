# Rohan - O Amigo do Motorista

![Logo do Rohan](url-da-imagem-do-logo-aqui)

## Sobre

"Rohan" é o seu novo companheiro nas estradas. Inspirado na vasta e mágica terra de Rohan do universo de Tolkien, este aplicativo foi projetado para ser o guardião e amigo fiel de todos os motoristas. Projetado para o motorista moderno, ele oferece recursos avançados que ajudam a garantir uma condução segura, eficiente e agradável.

## Características

- **Navegação Inteligente:** Seja guiado pelo melhor caminho com atualizações em tempo real.
- **Suporte ao Motorista:** Dicas, lembretes e informações úteis para a sua jornada.
- **Segurança em Primeiro Lugar:** Alertas e notificações para garantir que sua viagem seja tão segura quanto possível.

## Por que "Rohan"?

Rohan, no universo de Tolkien, é uma terra de bravos cavaleiros, vastas planícies e um povo leal e determinado. Assim como os Rohirrim, os cavaleiros de Rohan, estão sempre prontos para defender e apoiar, nosso aplicativo busca oferecer suporte contínuo ao motorista. Embarque nesta aventura e sinta-se em boa companhia!

## Começando

1. Baixe o aplicativo na [App Store](url-da-app-store-aqui) ou no [Google Play](url-do-google-play-aqui).
2. Siga as instruções de instalação.
3. Inicie o aplicativo e configure o seu perfil.
4. Comece a sua jornada com Rohan ao seu lado!

## Tests e2e

`pnpm exec playwright test`
Runs the end-to-end tests.

`pnpm exec playwright test --ui`
Starts the interactive UI mode.

`pnpm exec playwright test --project=chromium`
Runs the tests only on Desktop Chrome.

`pnpm exec playwright test example`
Runs the tests in a specific file.

`pnpm exec playwright test --debug`
Runs the tests in debug mode.

`pnpm exec playwright codegen`
Auto generate tests with Codegen.

## Suporte

Se você tiver problemas ou perguntas, visite nossa [seção de suporte](url-da-seção-de-suporte-aqui) ou entre em contato pelo email [support@rohanapp.com](mailto:support@rohanapp.com).

## Contribuições

Este projeto é de código fechado. No entanto, feedbacks e sugestões são sempre bem-vindos!

## Licença

Este software é licenciado sob [INSIRA A LICENÇA AQUI].

---

Desenvolvido com ❤️ por [NeXTIME](url-do-seu-site-aqui).

## FAQ

## Client-Side Rendering em Páginas Estáticas com `useSearchParams`

### Problema

Durante a renderização estática, toda a página pode ser convertida para renderização no lado do cliente devido ao uso de `useSearchParams`, caso não exista um limite de `Suspense` que o intercepte.

Isso ocorre porque, ao utilizar `useSearchParams` em uma rota estática, a árvore de componentes até o limite de `Suspense` mais próximo será renderizada no lado do cliente. Esse comportamento permite que parte da página seja renderizada estaticamente, enquanto a parte dinâmica que utiliza `searchParams` pode ser renderizada no lado do cliente.

### Solução

Para reduzir a porção da rota que é renderizada no lado do cliente, você pode encapsular o componente que utiliza `useSearchParams` dentro de um limite de `Suspense`.

#### Exemplo

**app/dashboard/search-bar.tsx**

```tsx
'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  // Este log não será exibido no servidor durante a renderização estática
  console.log(search)

  return <>Search: {search}</>
}
```

```tsx
import { Suspense } from 'react'
import SearchBar from './search-bar'

// Este componente será renderizado como um placeholder para a barra de pesquisa no HTML inicial.
// Quando o valor estiver disponível durante a hidratação do React, o fallback
// será substituído pelo componente `<SearchBar>`.
function SearchBarFallback() {
  return <>placeholder</>
}

export default function Page() {
  return (
    <>
      <nav>
        <Suspense fallback={<SearchBarFallback />}>
          <SearchBar />
        </Suspense>
      </nav>
      <h1>Dashboard</h1>
    </>
  )
}
```

Adotando essa abordagem, você consegue manter parte da sua página sendo renderizada estaticamente, enquanto manipula os parâmetros de pesquisa de maneira eficaz no lado do cliente.
