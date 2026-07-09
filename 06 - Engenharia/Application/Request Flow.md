# 🌊 Request Flow

> Este documento descreve o fluxo completo de uma requisição dentro da arquitetura do backend do ARISE.

---

# 🎯 Objetivo

O Request Flow demonstra como uma requisição percorre todas as camadas da aplicação, desde o recebimento via HTTP até a resposta enviada ao cliente.

Seu objetivo é documentar a responsabilidade de cada componente e o caminho esperado para execução de um caso de uso.

---

# 🏛️ Visão Geral

Todo fluxo da aplicação deve seguir o mesmo padrão arquitetural.

```text
HTTP Request

↓

Presentation

↓

Application

↓

Domain

↓

Infrastructure

↓

HTTP Response
```

Cada camada possui responsabilidades específicas e independentes.

---

# 📦 Fluxo Completo

```text
HTTP Request

↓

Router

↓

Request DTO

↓

Parser

↓

Command / Query

↓

Dispatcher

↓

Handler

↓

Application Service (quando necessário)

↓

Domain

↓

Repository

↓

Infrastructure

↓

Persistência

↓

Domain Events

↓

Subscribers

↓

Response DTO

↓

HTTP Response
```

---

# 🧩 Etapa 1 — Presentation

Responsável por receber a requisição.

Componentes:

- Router;
- DTO;
- Parser.

Responsabilidades:

- interpretar HTTP;
- validar entrada;
- transformar dados em objetos da aplicação.

---

# 🧩 Etapa 2 — Application

Recebe Commands ou Queries.

Coordena toda a execução do caso de uso.

Componentes:

- Dispatcher;
- Handler;
- Services;
- Domain Events;
- Subscribers.

---

# 🧩 Etapa 3 — Domain

Executa as regras permanentes do jogo.

Exemplos:

- cálculo de XP;
- conclusão de Quests;
- evolução de nível;
- Momentum;
- Rewards.

O Domínio nunca conhece HTTP, banco ou infraestrutura.

---

# 🧩 Etapa 4 — Infrastructure

Executa detalhes técnicos.

Exemplos:

- PostgreSQL;
- SQLAlchemy;
- Redis;
- Cache;
- APIs externas.

---

# 🔄 Fluxo de Escrita (Command)

```text
HTTP

↓

Router

↓

DTO

↓

Parser

↓

CompleteQuestCommand

↓

Dispatcher

↓

CompleteQuestHandler

↓

Quest.complete()

↓

Player.gain_xp()

↓

Repository.save()

↓

Publish QuestCompletedEvent

↓

Subscribers

↓

Response DTO

↓

HTTP Response
```

---

# 🔍 Fluxo de Leitura (Query)

```text
HTTP

↓

Router

↓

DTO

↓

Parser

↓

GetPlayerQuery

↓

Dispatcher

↓

GetPlayerHandler

↓

Repository

↓

Response DTO

↓

HTTP Response
```

Queries não alteram estado.

---

# 📡 Fluxo de Eventos

Após alterações importantes:

```text
QuestCompletedEvent

↓

Event Dispatcher

↓

RewardDistributor

↓

StatisticsAggregator

↓

AchievementSynchronizer

↓

NotificationService
```

Todos os consumidores permanecem desacoplados.

---

# 🧠 Fluxo de um Processo

Quando necessário:

```text
Scheduler

↓

Application Service

↓

Handlers

↓

Domain

↓

Repositories

↓

Domain Events
```

Esse fluxo representa processos automáticos da aplicação.

---

# 📂 Estrutura Arquitetural

```text
Presentation

↓

Application

↓

Domain

↓

Infrastructure
```

A comunicação sempre ocorre nessa direção.

---

# 🚫 Fluxos Proibidos

Não são permitidos acessos diretos como:

```text
Presentation

↓

Infrastructure
```

ou

```text
Infrastructure

↓

Domain
```

Toda comunicação deve respeitar a arquitetura.

---

# 📈 Benefícios

Este fluxo proporciona:

- baixo acoplamento;
- alta coesão;
- previsibilidade;
- facilidade para testes;
- facilidade para manutenção;
- escalabilidade.

---

# 🔗 Relação com outros documentos

Relaciona-se com:

- [[Commands]]
- [[Queries]]
- [[Dispatcher]]
- [[Handlers]]
- [[Repositories]]
- [[Application Services]]
- [[Domain Events]]
- [[Princípios da Engenharia]]

---

# 📚 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Modelo de Domínio]]

---

# ✅ Considerações Finais

Todo novo fluxo implementado no backend do ARISE deve respeitar esta sequência de responsabilidades.

Essa padronização garante consistência, reduz o acoplamento entre módulos e facilita a evolução contínua do sistema.

Sempre que surgir uma dúvida sobre onde implementar uma funcionalidade, este documento deve ser utilizado como referência para identificar o caminho correto dentro da arquitetura.