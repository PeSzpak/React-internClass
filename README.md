# React-internClass

Projeto de estudo de React com TypeScript, seguindo um roteiro de estagiário do básico ao avançado. Cada passo vira um componente pequeno: JSX, props, `useState`, `useEffect`, renderização condicional e styled-components.

![Contador com botões de aumentar e diminuir](docs/media/contador.webp)

## O que já foi praticado

| Conceito | Onde |
|---|---|
| Componentes e composição | `App` → `HelloWd` → `SouBotao` → `HideOrShow` + `CounterBtn` |
| Props tipadas (interface) | `CounterBtn` recebe `textup` e `textdown` |
| `useState` | Contador (`contador.tsx`), visibilidade (`button.tsx`), input e checkbox controlados (`hideOrShow.tsx`) |
| Atualização funcional de estado | `setCounter(prev => Math.max(0, prev - 1))` impede valores negativos |
| Renderização condicional | O botão "diminuir" só aparece com contador > 0; "Hide Or Show button" monta/desmonta o bloco |
| `useEffect` com cleanup | `HideOrShow` loga "builded" ao montar e "Destroyed" ao desmontar (veja o console) |
| styled-components | `style.tsx` define o `Button` com borda rosa |

Ao clicar em "Hide Or Show button", o input, o checkbox e o contador são desmontados (e o estado deles se perde):

![Componentes ocultos](docs/media/oculto.webp)

## Stack

React 19, TypeScript 5.9, Vite 7, styled-components 6, ESLint 9.

## Como rodar

Pré-requisito: Node.js 20.19+ (exigido pelo Vite 7).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # tsc -b && vite build
npm run lint
npm run preview   # serve o build
```

## Estrutura

```
src/
├── main.tsx              # createRoot + StrictMode
├── App.tsx               # renderiza HelloWd
├── hello.tsx             # HelloWd: título + SouBotao
├── button.tsx            # SouBotao: alterna visibilidade
├── style.tsx             # Button (styled-components)
├── index.css             # estilos globais do template Vite
└── components/
    ├── contador.tsx      # CounterBtn
    └── hideOrShow.tsx    # input + checkbox controlados, useEffect
```

## Observações

- Em modo dev, o `StrictMode` monta os componentes duas vezes, então "builded"/"Destroyed" aparecem duplicados no console. É esperado.
- Não há testes automatizados.
