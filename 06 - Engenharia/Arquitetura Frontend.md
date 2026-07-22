# 🖥️ Arquitetura Frontend

> Este documento define a arquitetura do frontend do ARISE e estabelece os princípios que orientam todo o desenvolvimento da interface.

---

# 🎯 Objetivo

O frontend do ARISE foi projetado para ser organizado, escalável e alinhado à arquitetura do backend.

A interface deve ser apenas uma forma de interação com o domínio da aplicação.

Toda regra de negócio pertence ao domínio e ao backend.

O frontend é responsável por:

- apresentar informações;
    
- receber interações do usuário;
    
- coordenar comunicação com a API;
    
- manter estados temporários da interface.
    

---

# 🧠 Filosofia

O frontend segue a mesma filosofia arquitetural do backend.

O React não define a arquitetura.

React, React Router, TanStack Query e Zustand são apenas ferramentas.

A arquitetura é orientada pelo domínio da aplicação.

---

# 📖 Visão Geral

```text
Usuário
    │
    ▼
Presentation
(Pages / Components / Layouts)
    │
    ▼
Application
(Commands / Queries / Services)
    │
    ▼
Infrastructure
(API / Storage / Auth)
    │
    ▼
Backend
```

O frontend nunca acessa diretamente o banco de dados.

Toda comunicação ocorre através da API.

---

# 🧩 Camadas

## App

Responsável pela inicialização da aplicação.

Contém:

- Router;
    
- Providers;
    
- Tema;
    
- Configurações globais.
    

---

## Presentation

Responsável pela interface.

Contém:

- Pages;
    
- Layouts;
    
- Components.
    

Não contém regras de negócio.

Seu objetivo é apenas apresentar dados e capturar ações do usuário.

---

## Application

Responsável por coordenar a comunicação entre a interface e a API.

Contém:

- Commands;
    
- Queries;
    
- DTOs;
    
- Services.
    

Esta camada prepara os dados para envio e recebimento.

Não implementa regras do jogo.

---

## Domain

Representa os modelos de domínio utilizados pelo frontend.

Exemplos futuros:

- Player;
    
- Quest;
    
- Reward;
    
- Category;
    
- Progression.
    

O domínio deve representar o estado da aplicação, nunca detalhes da API.

---

## Infrastructure

Responsável pelos detalhes técnicos.

Contém:

- clientes HTTP;
    
- autenticação;
    
- armazenamento local;
    
- integração com serviços externos.
    

---

## Shared

Componentes reutilizáveis por toda a aplicação.

Exemplos:

- Hooks;
    
- Utilitários;
    
- Tipos compartilhados;
    
- Constantes.
    

Nenhum elemento desta camada deve depender de funcionalidades específicas.

---

## Assets

Recursos estáticos.

Exemplos:

- imagens;
    
- ícones;
    
- fontes.
    

---

# 📦 Organização

```text
frontend/
└── src/
    │
    ├── app/
    │   ├── providers/
    │   ├── router/
    │   └── styles/
    │
    ├── presentation/
    │   ├── pages/
    │   ├── layouts/
    │   └── components/
    │
    ├── application/
    │   ├── commands/
    │   ├── queries/
    │   ├── dto/
    │   └── services/
    │
    ├── domain/
    │
    ├── infrastructure/
    │   ├── api/
    │   ├── auth/
    │   └── storage/
    │
    ├── shared/
    │   ├── hooks/
    │   ├── utils/
    │   ├── types/
    │   └── constants/
    │
    ├── assets/
    │   ├── fonts/
    │   ├── icons/
    │   └── images/
    │
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

---

# 🔄 Fluxo da Interface

Toda interação do usuário seguirá o fluxo abaixo.

```text
Usuário

↓

Página

↓

Componente

↓

Application Service

↓

API

↓

Backend

↓

Resposta

↓

Atualização da Interface
```

O fluxo deve ser sempre unidirecional.

---

# 📡 Comunicação com o Backend

Toda comunicação será realizada através da camada Infrastructure.

A interface nunca fará chamadas HTTP diretamente.

Exemplo:

```text
Presentation

↓

Application Service

↓

ApiClient

↓

FastAPI
```

---

# 🧠 Gerenciamento de Estado

O projeto utiliza dois tipos de estado.

## Estado da Interface

Responsável por elementos visuais.

Exemplos:

- Modal aberto;
    
- Tema;
    
- Sidebar.
    

Utiliza Zustand.

---

## Estado Remoto

Responsável pelos dados provenientes da API.

Exemplos:

- Player;
    
- Quests;
    
- Estatísticas.
    

Utiliza TanStack Query.

---

# 📌 Convenções

## Componentes

Utilizar PascalCase.

Exemplo:

```text
QuestCard.tsx
```

---

## Hooks

Sempre iniciar com "use".

Exemplo:

```text
usePlayer.ts
```

---

## Services

Sempre terminar com Service.

Exemplo:

```text
PlayerService.ts
```

---

## DTOs

Sempre terminar com DTO.

Exemplo:

```text
PlayerDTO.ts
```

---

## Commands

Sempre terminar com Command.

Exemplo:

```text
CompleteQuestCommand.ts
```

---

## Queries

Sempre terminar com Query.

Exemplo:

```text
GetPlayerQuery.ts
```

---

# 🛠️ Stack Tecnológica

|Área|Tecnologia|
|---|---|
|Framework|React|
|Linguagem|TypeScript|
|Build Tool|Vite|
|Navegação|React Router|
|Requisições|Axios|
|Estado Remoto|TanStack Query|
|Estado Global|Zustand|

---

# 📌 Princípios Arquiteturais

Todo novo código deve respeitar:

- Separação de responsabilidades;
    
- Componentes pequenos e reutilizáveis;
    
- Interface sem regras de negócio;
    
- Comunicação exclusivamente através da API;
    
- Dependências apontando para dentro da aplicação;
    
- Componentes facilmente testáveis;
    
- Organização baseada em camadas;
    
- Consistência com a arquitetura do backend.
    

---

# 📚 Documentação Relacionada

- [[Arquitetura Geral]]
    
- [[Estrutura de Pastas]]
    
- [[Modelo de Domínio]]
    
- [[Fluxo de dados]]
    
- [[RoadMap Técnico]]
    
- [[Planejamento Alpha]]
    
- [[Princípios da Engenharia]]
    

---

# 🚧 Evolução

A arquitetura do frontend deverá evoluir junto com o backend, mantendo sempre a simetria entre os dois lados da aplicação.

Novas tecnologias poderão ser adicionadas desde que respeitem os princípios definidos neste documento.

---

# ✅ Considerações Finais

O frontend não é responsável pelas regras do jogo.

Sua responsabilidade é representar o estado da aplicação de forma clara, consistente e desacoplada da infraestrutura.

Toda funcionalidade implementada deverá respeitar os princípios definidos neste documento para garantir a evolução saudável do ARISE.