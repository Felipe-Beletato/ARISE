# 📡 Domain Events

> Este documento define o padrão de **Domain Events** utilizado pelo ARISE.

---

# 🎯 Objetivo

Domain Events representam acontecimentos importantes que ocorreram dentro do Domain.

Eles permitem que diferentes partes do sistema reajam a mudanças sem criar dependências diretas entre módulos.

Seu objetivo é reduzir acoplamento e permitir evolução independente das funcionalidades.

---

# 🧠 Conceito

Um Domain Event responde:

> **"O que aconteceu?"**

Ele nunca responde:

> **"O que deve ser feito?"**

A reação ao evento pertence à Application.

---

# 🏛️ Filosofia

O Domain apenas informa fatos relevantes.

Ele não conhece:

- quem escuta o evento;
- qual processo será iniciado;
- quais recompensas serão geradas;
- quais estatísticas serão atualizadas.

O Domain apenas registra que algo aconteceu.

---

# 📌 Responsabilidades

Um Domain Event deve:

- representar um fato ocorrido;
- possuir significado de negócio;
- ser imutável;
- transportar informações relevantes;
- existir independente de consumidores.

---

# ❌ Não é responsabilidade

Um Domain Event nunca deve:

- executar lógica;
- acessar banco;
- chamar APIs;
- alterar entidades;
- conhecer Application;
- conhecer Infrastructure.

---

# 🏗️ Fluxo Geral

```text
Domain

↓

Domain Event

↓

Application Event Handler

↓

Application Service

↓

Infrastructure
````

---

# 📦 Estrutura

Os eventos pertencem ao Domain.

Exemplo:

```
domain/

└── events/

    ├── quest_completed.py

    ├── player_created.py

    └── level_up.py
```

---

# 📝 Exemplo

```
from dataclasses import dataclass
from datetime import datetime
from uuid import UUID


@dataclass(frozen=True)
class QuestCompletedEvent:

    player_id: UUID

    quest_id: UUID

    completed_at: datetime
```

Características:

- imutável;
- sem lógica;
- apenas dados;
- representa um fato ocorrido.

---

# 📝 Convenção de Nome

Todos os eventos devem terminar com:

```
Event
```

Exemplos:

```
QuestCompletedEvent

PlayerCreatedEvent

LevelUpEvent

RewardGrantedEvent

AchievementUnlockedEvent
```

---

# 🔄 Publicação

Exemplo:

```
Quest.complete()

↓

QuestCompletedEvent

↓

Event Publisher

↓

Application Subscribers
```

O Domain gera o evento.

A Application decide quem reage.

---

# 📢 Consumidores

Os consumidores ficam na Application.

Exemplo:

```
QuestCompletedEvent

↓

RewardDistributor

↓

StatisticsAggregator

↓

AchievementSynchronizer
```

Cada consumidor possui sua própria responsabilidade.

---

# 📚 Exemplos do ARISE

## QuestCompletedEvent

Representa:

> Uma Quest foi concluída.

Possíveis reações:

- conceder recompensa;
- atualizar estatísticas;
- avaliar conquistas.

---

## LevelUpEvent

Representa:

> O jogador alcançou um novo nível.

Possíveis reações:

- liberar recompensas;
- atualizar títulos;
- registrar histórico.

---

## PlayerCreatedEvent

Representa:

> Um novo jogador foi criado.

Possíveis reações:

- criar estatísticas iniciais;
- conceder recompensa inicial.

---

# ⚠️ Regras

Eventos representam fatos concluídos.

Correto:

```
QuestCompletedEvent
```

Incorreto:

```
CompleteQuestEvent
```

O primeiro informa algo que aconteceu.

O segundo representa uma intenção, que pertence a um Command.

---

# 🧪 Testes

Os testes devem validar:

- criação correta do evento;
- dados transportados;
- publicação;
- reação dos consumidores.

Eventos não possuem regras de negócio.

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Domain]]
- [[Handlers]]
- [[Application Services]]
- [[Application Layer]]
- [[Request Flow]]

---

# 📚 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Modelo de Domínio]]
- [[Princípios da Engenharia]]

---

# ✅ Considerações Finais

Domain Events permitem que o ARISE cresça sem transformar cada nova funcionalidade em uma alteração espalhada pelo sistema.

O Domain declara os acontecimentos.

A Application reage a eles.

Essa separação mantém as regras do jogo protegidas e permite que novos sistemas sejam adicionados sem quebrar a arquitetura existente.