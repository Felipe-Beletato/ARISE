# 🏗️ Arquitetura Geral

> Este documento define a visão arquitetural do ARISE e estabelece os princípios que orientam todo o desenvolvimento do backend.

---

# 🎯 Objetivo

O ARISE foi projetado para ser um sistema modular, escalável e de fácil manutenção.

A arquitetura prioriza:

- Separação clara de responsabilidades;
- Baixo acoplamento entre módulos;
- Alta coesão;
- Facilidade de testes;
- Independência da infraestrutura;
- Evolução incremental.

Toda decisão técnica deve respeitar estes princípios.

---

# 🧠 Filosofia da Arquitetura

O framework não é o centro da aplicação.

Tecnologias como FastAPI, PostgreSQL ou Redis são ferramentas utilizadas para entregar o sistema, mas não definem sua arquitetura.

O domínio do ARISE representa as regras do jogo e deve permanecer independente de qualquer tecnologia externa.

A arquitetura é orientada pelo domínio, e não pela infraestrutura.

---

# 📖 Visão Geral

```text
                         HTTP Request
                              │
                              ▼
                    ┌─────────────────┐
                    │  Presentation   │
                    │ Router + DTOs   │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │     Parser      │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   Dispatcher    │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │     Handler     │
                    └─────────────────┘
                              │
                              ▼
              ┌────────────────────────────┐
              │ Application Services       │
              │ (quando necessário)        │
              └────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │     Domain      │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   Repository    │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ Infrastructure  │
                    │ Database/Cache  │
                    └─────────────────┘
                              │
                              ▼
                    Domain Events
                              │
                              ▼
                         Subscribers
```

---

# 🧩 Fluxo de uma Requisição

Toda requisição seguirá o mesmo fluxo:

1. A camada Presentation recebe a requisição HTTP.
2. O Parser transforma os dados externos em um Command ou Query.
3. O Dispatcher identifica o Handler responsável.
4. O Handler executa o caso de uso.
5. Application Services coordenam processos maiores quando necessário.
6. O Domain aplica as regras do jogo.
7. O Repository realiza a persistência.
8. Domain Events notificam acontecimentos importantes.
9. Subscribers executam ações relacionadas.
10. A resposta retorna ao cliente.

---

# 🧱 Camadas da Aplicação

## Presentation

Responsável pela comunicação externa.

Não contém regras de negócio.

Responsabilidades:

- Rotas;
- Recepção HTTP;
- Conversão de entrada e saída;
- Validação inicial;
- Autenticação.

---

## Parser

Converte dados externos em objetos internos da aplicação.

Exemplo:

```text
JSON

↓

CompleteQuestCommand
```

Nenhuma regra de negócio deve existir aqui.

---

## Dispatcher

Responsável por localizar o Handler correto.

Recebe:

- Commands;
- Queries.

Sua única responsabilidade é encaminhar a execução.

---

## Handlers

Cada Handler representa um único caso de uso.

Exemplos:

- CreateQuestHandler;
- CompleteQuestHandler;
- GainXPHandler;
- AcceptContractHandler;
- CreatePlayerHandler.

Handlers não concentram regras de negócio.

---

## Application Services

Responsáveis por coordenar processos da aplicação.

São utilizados quando um fluxo envolve múltiplos componentes.

Exemplos:

- geração de Quests diárias;
- distribuição de recompensas;
- sincronizações;
- processos automáticos.

Application Services não possuem regras do jogo.

---

## Domain

É o coração do ARISE.

Contém todas as regras permanentes do sistema.

Exemplos:

- Player;
- Quest;
- XP;
- Momentum;
- Buff;
- Contract;
- Inventory;
- Achievement.

O Domain não conhece:

- FastAPI;
- PostgreSQL;
- HTTP;
- JSON;
- qualquer detalhe de infraestrutura.

---

## Domain Events

Representam acontecimentos importantes dentro do sistema.

Exemplos:

- QuestCompletedEvent;
- LevelUpEvent;
- RewardGrantedEvent.

Eles permitem que diferentes módulos reajam a acontecimentos sem criar dependências diretas.

---

## Subscribers

Responsáveis por reagir aos Domain Events.

Exemplos:

- RewardDistributor;
- StatisticsAggregator;
- AchievementSynchronizer.

Cada Subscriber possui uma responsabilidade específica.

---

## Repository

Responsável pela persistência.

Responsabilidades:

- Buscar dados;
- Salvar entidades;
- Atualizar registros.

Nunca contém regras de negócio.

---

## Infrastructure

Responsável pelos detalhes técnicos.

Exemplos:

- Banco de dados;
- Cache;
- APIs externas;
- Serviços externos.

---

# 📦 Organização do Backend

```text
backend/
│
├── app/
│   │
│   ├── presentation/
│   │   ├── routes/
│   │   └── dependencies/
│   │
│   ├── application/
│   │   ├── parser/
│   │   ├── dispatcher/
│   │   ├── handlers/
│   │   ├── commands/
│   │   ├── queries/
│   │   ├── services/
│   │   ├── events/
│   │   └── dto/
│   │
│   ├── domain/
│   │   ├── player/
│   │   ├── quest/
│   │   ├── progression/
│   │   ├── category/
│   │   ├── reward/
│   │   ├── statistics/
│   │   └── shared/
│   │
│   ├── infrastructure/
│   │   ├── database/
│   │   ├── repositories/
│   │   ├── auth/
│   │   └── cache/
│   │
│   ├── config/
│   │
│   └── shared/
│
├── tests/
├── migrations/
└── main.py
```

---

# 🛠️ Stack Tecnológica

| Área | Tecnologia |
|------|------------|
| Linguagem | Python 3.13+ |
| API | FastAPI |
| Validação | Pydantic |
| ORM | SQLAlchemy |
| Migrações | Alembic |
| Banco de Dados | PostgreSQL |
| Autenticação | JWT |
| Testes | Pytest |
| Containerização | Docker |
| Cache (futuro) | Redis |

---

# 📌 Princípios Arquiteturais

Todo novo código deve respeitar:

- Responsabilidade única;
- Dependências sempre apontam para dentro da aplicação;
- O domínio não depende da infraestrutura;
- Frameworks são ferramentas, não arquitetura;
- Todo caso de uso possui seu próprio Handler;
- Commands alteram estado;
- Queries apenas consultam dados;
- Regras de negócio permanecem no Domain;
- Componentes devem ser facilmente testáveis.

---

# 📚 Documentação Relacionada

- [[Roadmap Técnico]]
- [[Backend]]
- [[Estrutura de Pastas]]
- [[Padrões de Código]]
- [[Git Workflow]]
- [[Planejamento Alpha]]
- [[Princípios da Engenharia]]
- [[Request Flow]]
- [[Domain Events]]

---

# 🚧 Evolução da Arquitetura

A arquitetura será construída de forma incremental.

## Alpha

- Base da aplicação;
- Sistema de usuários;
- Quests;
- XP;
- Categorias;
- Progressão.

## Beta

- Inventário;
- Buffs;
- Debuffs;
- Contratos;
- Eventos.

## Release

- Performance;
- Escalabilidade;
- Integrações;
- Recursos avançados.

---

# ✅ Considerações Finais

Toda nova funcionalidade deve ser implementada respeitando esta arquitetura.

Caso seja necessário quebrar algum princípio estabelecido neste documento, a decisão deve ser documentada e justificada antes da implementação.

A arquitetura do ARISE deve evoluir junto com o projeto, mantendo sempre clareza, organização e responsabilidade bem definida entre suas camadas.