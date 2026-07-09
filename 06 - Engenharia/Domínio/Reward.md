# 🎁 Reward

> Este documento define a entidade Reward dentro do domínio do ARISE, representando os resultados obtidos pelo jogador ao concluir uma ação válida.

---

# 🎯 Objetivo

Reward representa qualquer benefício recebido pelo jogador após concluir uma Quest ou realizar uma ação válida dentro do sistema.

Ela funciona como uma camada intermediária entre:

```text
Ação realizada

↓

Recompensa recebida

↓

Evolução do jogador
```

---

# 🧠 Conceito

No ARISE, completar uma Quest não altera diretamente o jogador.

O fluxo correto é:

```text
Quest

↓

Reward

↓

Progression

↓

Player Evolution
```

Essa separação permite que novos tipos de recompensa sejam adicionados no futuro sem modificar o funcionamento das Quests.

---

# 📌 Responsabilidades

Reward é responsável por:

- Representar uma recompensa;
- Definir seu tipo;
- Definir seu valor;
- Indicar sua origem;
- Permitir processamento pelo sistema adequado.

---

# ❌ Não é responsabilidade

Reward não deve:

- Alterar XP diretamente;
- Atualizar Player;
- Completar Quest;
- Gerenciar Inventário;
- Aplicar Buffs;
- Controlar regras de progressão.

A Reward apenas representa o resultado.

---

# 🏗️ Estrutura Conceitual

```text
Reward

│
├── Identity
│
├── Type
│
├── Value
│
├── Source
│
└── Metadata
```

---

# 🆔 Identity

Identificação única da recompensa.

Exemplo:

```text
Reward ID

UUID
```

---

# 🏷️ Reward Type

Define o tipo de recompensa.

---

# ⭐ XP

Recompensa principal do Alpha.

Exemplo:

```text
50 XP
```

Pode gerar:

- XP Geral;
- XP Categoria.

---

# 💰 Currency (Beta)

Representa recursos financeiros do jogo.

Exemplo:

```text
100 moedas
```

---

# 🎒 Item (Beta)

Representa objetos obtidos.

Exemplo:

```text
Baú Comum

Poção

Equipamento
```

---

# 👑 Title (Beta)

Representa títulos conquistados.

Exemplo:

```text
Disciplina Inabalável
```

---

# 🎲 Chest (Beta)

Representa recompensas aleatórias.

Exemplo:

```text
Baú Misterioso

↓

Possíveis recompensas
```

---

# 📊 Value

Representa a quantidade ou intensidade da recompensa.

Exemplo:

```text
XP

Valor:

50
```

---

# 🔗 Source

Representa a origem da recompensa.

Exemplos:

```text
Quest Completion

Achievement

Contract

Event
```

No Alpha:

```text
Quest Completion
```

---

# 🔄 Fluxo de Recompensa

```text
Player Completa Quest

↓

Quest Validation

↓

Generate Reward

↓

Process Reward

↓

Update Player State
```

---

# ⚖️ Exemplo Alpha

Quest:

```text
Nome:

Estudar programação


Dificuldade:

Média
```

Reward:

```text
Tipo:

XP


Valor:

45
```

Processamento:

```text
XP Geral:

30


Codex XP:

15
```

---

# 📈 Relação com Progression

Reward não altera Progression diretamente.

O fluxo correto:

```text
Reward

↓

Reward Handler

↓

XP System

↓

Progression
```

---

# ⚙️ Possíveis Commands

```text
CreateRewardCommand

GenerateQuestRewardCommand

ApplyRewardCommand
```

---

# 🔎 Possíveis Queries

```text
GetRewardQuery

GetRewardHistoryQuery
```

---

# 🧪 Testes esperados

O domínio deve validar:

- Criação de recompensa válida;
- Tipo existente;
- Valor permitido;
- Origem registrada;
- Processamento correto.

---

# 🗂️ Possível Estrutura de Código

```text
domain/

└── reward/

    ├── entity.py

    ├── reward_type.py

    ├── reward_value.py

    ├── reward_source.py

    ├── exceptions.py

    └── value_objects.py
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Quest]]
- [[XP]]
- [[Progression]]
- [[Player]]
- [[Inventory]]

---

# 📚 Documentos Relacionados

- [[Modelo de Domínio]]
- [[Quest]]
- [[XP]]
- [[Progression]]
- [[Level]]

---

# ✅ Considerações Finais

Reward representa a consequência positiva de uma ação concluída.

Sua função é manter separado:

```text
O que foi feito

↓

O que foi recebido

↓

Como o jogador evoluiu
```

Essa separação permite que o ARISE evolua de um simples sistema de XP para um sistema completo de progressão RPG.