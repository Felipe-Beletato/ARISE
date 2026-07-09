# 🧩 Application Layer

> Este documento define a responsabilidade da camada **Application** dentro da arquitetura do ARISE.

---

# 🎯 Objetivo

A camada Application representa a coordenação dos casos de uso do sistema.

Ela funciona como intermediária entre a Presentation, o Domain e a Infrastructure.

Seu objetivo é organizar a execução das ações do usuário e dos processos internos da aplicação sem conter regras permanentes do jogo.

---

# 🧠 Conceito

A Application responde:

> **"Como uma intenção do usuário ou processo do sistema será coordenada?"**

Ela não responde:

> **"Como funciona a regra do jogo?"**

Essa responsabilidade pertence ao Domain.

---

# 🏛️ Filosofia

A Application é responsável por organizar o fluxo.

Ela conecta:

- Commands;
- Queries;
- Handlers;
- Repositories;
- Application Services;
- Domain Events.

Porém, ela nunca deve substituir o Domain.

---

# 📦 Responsabilidades

A camada Application é responsável por:

- interpretar intenções através de Commands e Queries;
- localizar os Handlers responsáveis;
- coordenar casos de uso;
- controlar fluxos de aplicação;
- executar processos automáticos;
- reagir a Domain Events;
- comunicar-se com Repositories através de contratos.

---

# ❌ Não é responsabilidade

A Application nunca deve:

- conter regras de negócio;
- calcular XP;
- definir progressão;
- validar regras de Quest;
- controlar atributos do Player;
- conhecer detalhes do banco;
- conhecer HTTP;
- depender de frameworks externos.

---

# 🏗️ Estrutura

```text
application/

├── player/

│   ├── commands/

│   ├── queries/

│   ├── handlers/

│   └── services/

│

├── quest/

│   ├── commands/

│   ├── queries/

│   ├── handlers/

│   └── services/

│

├── progression/

│   ├── commands/

│   ├── queries/

│   ├── handlers/

│   └── services/

│

├── events/

│   └── handlers/

│

├── dispatcher/

└── dto/
```

# 📨 Commands

Commands representam intenções de alteração de estado.

Exemplo:

```
CompleteQuestCommand

↓

CompleteQuestHandler
```

Eles iniciam operações de escrita.

---

# 🔍 Queries

Queries representam intenções de consulta.

Exemplo:

```
GetPlayerQuery

↓

GetPlayerHandler
```

Elas nunca alteram estado.

---

# ⚙️ Handlers

Handlers executam casos de uso individuais.

Cada Handler possui:

- um único objetivo;
- um único ponto de entrada;
- uma relação 1:1 com Command ou Query.

Exemplo:

```
CreatePlayerCommand

↓

CreatePlayerHandler
```

---

# 🚦 Dispatcher

O Dispatcher encaminha Commands e Queries para seus respectivos Handlers.

Ele não conhece regras de negócio.

Sua única responsabilidade é localizar o executor correto.

---

# 🔄 Application Services

Application Services representam processos maiores da aplicação.

Exemplos:

- geração diária de Quests;
- sincronização de estatísticas;
- processos de temporada;
- distribuição de recompensas.

Eles não representam regras do jogo.

---

# 📡 Domain Event Handlers

A Application pode reagir a acontecimentos do Domain.

Exemplo:

```
QuestCompletedEvent

↓

RewardDistributor

↓

StatisticsUpdater
```

O evento informa o que aconteceu.

A Application decide como reagir.

---

# 🔗 Relação com outras camadas

```
Presentation

↓

Application

↓

Domain

↓

Infrastructure
```

A comunicação sempre deve respeitar essa direção.

---

# 🚫 Dependências proibidas

A Application não deve depender diretamente de:

- FastAPI;
- PostgreSQL;
- SQLAlchemy;
- Redis;
- arquivos;
- APIs externas.

Esses detalhes pertencem à Infrastructure.

---

# 🧪 Testes

Os testes da Application devem validar:

- execução correta dos casos de uso;
- comunicação entre componentes;
- chamadas aos Repositories;
- publicação e consumo de eventos;
- tratamento de erros.

As regras do jogo continuam sendo testadas no Domain.

---

# 📚 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Modelo de Domínio]]
- [[Commands]]
- [[Queries]]
- [[Handlers]]
- [[Dispatcher]]
- [[Application Services]]
- [[Domain Events]]
- [[Request Flow]]

---

# ✅ Considerações Finais

A Application Layer existe para organizar o fluxo da aplicação.

Ela conecta intenções, processos e regras, mantendo cada responsabilidade em seu devido lugar.

O Domain continua sendo o dono das regras do ARISE.

A Application apenas garante que essas regras sejam executadas no momento correto e pelo caminho correto.