# ⚙️ Application Services

> Este documento define o padrão de **Application Services** utilizado pela camada **Application** do ARISE.

---

# 🎯 Objetivo

Os Application Services são responsáveis por coordenar **processos da aplicação** que não pertencem diretamente ao Domínio nem representam um caso de uso isolado.

Eles organizam fluxos maiores, orquestram operações e integram diferentes componentes da aplicação.

---

# 🧠 Conceito

Um Application Service responde apenas uma pergunta:

> **"Quando ou como um processo da aplicação deve acontecer?"**

Ele nunca responde:

> **"Como funciona a regra do jogo?"**

Essa responsabilidade pertence ao Domínio.

---

# 🏛️ Filosofia

Os Application Services existem para coordenar processos.

Eles não representam regras permanentes do universo do ARISE.

Eles apenas organizam sua execução.

---

# 📌 Responsabilidades

Um Application Service pode:

- coordenar múltiplos Handlers;
- iniciar processos automáticos;
- executar tarefas agendadas;
- organizar fluxos de longa duração;
- integrar diferentes módulos da aplicação;
- publicar Eventos de Domínio quando necessário.

---

# ❌ Não é responsabilidade

Um Application Service nunca deve:

- conter regras de negócio;
- alterar diretamente entidades;
- acessar banco de dados sem utilizar Repositories;
- conhecer HTTP;
- conhecer FastAPI;
- conhecer SQL diretamente.

---

# 🏗️ Fluxo Geral

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

Eventos
```

Ou:

```text
Endpoint

↓

Handler

↓

Application Service

↓

Domain Events
```

Dependendo do processo.

---

# 📚 Quando utilizar

Um Application Service deve existir quando:

- um processo envolve vários módulos;
- uma ação depende de múltiplos casos de uso;
- existe uma tarefa recorrente;
- o comportamento não pertence naturalmente a uma entidade do domínio.

---

# ❌ Quando NÃO utilizar

Não criar um Service para:

- calcular XP;
- concluir Quest;
- subir de nível;
- validar regras;
- atualizar atributos de entidades.

Essas responsabilidades pertencem ao Domínio.

---

# 📂 Organização

Os Services permanecem organizados por feature.

```text
application/

    player/

        services/

    quest/

        services/

    progression/

        services/

    reward/

        services/
```

---

# 📈 Exemplos do ARISE

## DailyQuestGenerator

Responsável por gerar automaticamente as Quests do dia.

---

## RewardDistributor

Coordena a distribuição de recompensas após eventos.

---

## SeasonResetService

Executa o processo de reinicialização de uma temporada.

---

## AchievementSynchronizer

Sincroniza conquistas após alterações importantes.

---

## StatisticsAggregator

Atualiza estatísticas consolidadas quando necessário.

---

# 🧩 Relação com o Domínio

O Domínio responde:

> Como uma Quest funciona?

O Application Service responde:

> Quando gerar uma Quest?

---

Outro exemplo.

Domínio:

```text
Player.gain_xp()
```

Service:

```text
RewardDistributor.distribute()
```

O Domínio define as regras.

O Service organiza o processo.

---

# 🔄 Relação com Handlers

Os Handlers executam casos de uso específicos.

Os Services podem coordenar múltiplos Handlers quando necessário.

Exemplo:

```text
SeasonResetService

↓

ResetStatisticsHandler

↓

ArchiveQuestHandler

↓

GenerateSeasonRewardsHandler
```

Cada Handler continua responsável por apenas um caso de uso.

---

# 📢 Relação com Eventos de Domínio

Os Application Services podem publicar ou consumir Eventos de Domínio para iniciar processos desacoplados.

Exemplo:

```text
QuestCompletedEvent

↓

RewardDistributor

↓

StatisticsAggregator

↓

AchievementSynchronizer
```

---

# 📏 Princípios

Todo Application Service deve seguir:

- responsabilidade única;
- baixo acoplamento;
- alta coesão;
- foco em processos;
- ausência de regras de negócio.

---

# 🧪 Testes Esperados

Os testes devem validar:

- coordenação correta dos processos;
- integração entre módulos;
- publicação de eventos;
- execução na ordem esperada.

As regras de negócio continuam sendo testadas no Domínio.

---

# 🗂️ Estrutura de Código

```text
application/

    quest/

        services/

            daily_quest_generator.py

    reward/

        services/

            reward_distributor.py

    season/

        services/

            season_reset_service.py

    achievements/

        services/

            achievement_synchronizer.py
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Handlers]]
- [[Repositories]]
- [[Domain Events]]
- [[Request Flow]]
- [[Princípios da Engenharia]]

---

# 📚 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Modelo de Domínio]]

---

# ✅ Considerações Finais

Os Application Services representam processos da aplicação, e não regras do negócio.

Sua responsabilidade é coordenar fluxos que envolvem múltiplos componentes, mantendo o Domínio focado apenas nas regras permanentes do universo do ARISE.

Sempre que surgir a dúvida sobre onde implementar uma funcionalidade, faça as seguintes perguntas:

- Isso é uma regra do jogo? → **Domínio**
- Isso é um caso de uso? → **Handler**
- Isso é um processo? → **Application Service**
- Isso é um detalhe técnico? → **Infrastructure**