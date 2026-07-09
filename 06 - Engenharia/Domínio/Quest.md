# ⚔️ Quest

> Este documento define a entidade Quest dentro do domínio do ARISE, descrevendo sua função, responsabilidades e comportamento dentro do sistema.

---

# 🎯 Objetivo

A Quest representa uma atividade ou missão que pode ser realizada pelo jogador para gerar progresso.

Ela é o principal mecanismo de transformação de ações em evolução dentro do ARISE.

---

# 🧠 Conceito

O ARISE utiliza Quests para representar ações importantes da vida do jogador.

Uma Quest pode representar:

- hábitos;
- tarefas;
- objetivos;
- desafios;
- missões especiais.

Exemplos:

```text
Treinar musculação

Ler 10 páginas

Estudar programação

Organizar ambiente

Criar projeto pessoal
```

---

# 📌 Responsabilidades

A Quest é responsável por:

- Representar uma missão;
- Definir suas características;
- Controlar seu estado;
- Definir sua dificuldade;
- Informar suas recompensas;
- Manter seus critérios de conclusão.

---

# ❌ Não é responsabilidade

A Quest não deve:

- calcular XP recebido;
- alterar Progression;
- atualizar Level;
- modificar Player diretamente;
- salvar dados no banco;
- enviar notificações.

Essas responsabilidades pertencem a outros módulos.

---

# 🏗️ Estrutura Conceitual

```text
Quest

│
├── Identity
│
├── Information
│
├── Category
│
├── Difficulty
│
├── Reward
│
├── Status
│
└── Completion Rules
```

---

# 🆔 Identity

Representa a identificação da Quest.

Exemplo:

```text
Quest ID

UUID
```

Cada Quest possui uma identidade única.

---

# 📝 Information

Informações básicas da missão.

Possui:

- Nome;
- Descrição;
- Tipo;
- Data de criação.

Exemplo:

```text
Nome:

Treino de peito


Descrição:

Realizar treino completo de peito e tríceps.
```

---

# 🏷️ Quest Type

Define o comportamento da Quest.

Tipos planejados:

## Daily Fixed

Missões diárias obrigatórias.

Exemplos:

- Arrumar cama;
- Ler;
- Exercício.

---

## Daily Variable

Missões opcionais geradas ou escolhidas diariamente.

---

## Weekly

Objetivos semanais.

---

## Monthly

Objetivos de longo prazo.

---

## Interlúdio

Missões especiais relacionadas a eventos ou momentos específicos.

---

## Knowledge Quest

Missões focadas em aprendizado.

---

# 🎯 Difficulty

Define o esforço esperado.

Categorias:

```text
Muito Fácil

Até 5 minutos


Fácil

5-15 minutos


Média

15-40 minutos


Difícil

40-90 minutos


Épica

90+ minutos
```

A dificuldade influencia:

- Recompensa;
- XP;
- Balanceamento.

---

# 🏷️ Category

Toda Quest pode estar associada a uma categoria.

Categorias do Alpha:

```text
Vanguard

Codex

Soul

Treasury

Creation
```

Exemplo:

```text
Treinar musculação

Categoria:

Vanguard
```

---

# 🎁 Reward

Representa o resultado da conclusão.

No Alpha:

- XP Geral;
- XP Categoria.

No futuro:

- Itens;
- Ouro;
- Baús;
- Títulos.

Relacionamento:

```text
Quest

↓

Reward
```

---

# 🔄 Status

Uma Quest possui estados possíveis:

```text
Created

↓

Available

↓

Completed

↓

Archived
```

---

# ✅ Completion Rules

Define as condições necessárias para concluir uma Quest.

Exemplos:

```text
Completar treino

↓

Validado manualmente
```

ou:

```text
Ler 10 páginas

↓

Confirmar conclusão
```

---

# 🔄 Ciclo de Vida

```text
Create Quest

↓

Available

↓

Player Accepts

↓

Player Completes

↓

Validate

↓

Generate Reward

↓

Update Progression
```

---

# ⚙️ Possíveis Commands

Operações que alteram Quest:

```text
CreateQuestCommand

UpdateQuestCommand

DeleteQuestCommand

AcceptQuestCommand

CompleteQuestCommand

ArchiveQuestCommand
```

---

# 🔎 Possíveis Queries

Consultas:

```text
GetQuestQuery

GetActiveQuestsQuery

GetQuestHistoryQuery

GetCompletedQuestsQuery
```

---

# 🧪 Testes esperados

O domínio deve validar:

- Criação de Quest válida;
- Dificuldade existente;
- Categoria válida;
- Transição correta de estados;
- Bloqueio de conclusão inválida;
- Regras de conclusão.

---

# 🗂️ Possível Estrutura de Código

```text
domain/

└── quest/

    ├── entity.py

    ├── quest_type.py

    ├── difficulty.py

    ├── status.py

    ├── completion_rules.py

    ├── exceptions.py

    └── value_objects.py
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Player]]
- [[Statistics]]
- [[Category]]
- [[Reward]]
- [[Progression]]

---

# 📚 Documentos Relacionados

- [[Modelo de Domínio]]
- [[Player]]
- [[Progression]]
- [[Category]]
- [[Reward]]

---

# ✅ Considerações Finais

A Quest é o ponto de ligação entre ação e evolução.

Ela deve permanecer simples e focada em representar uma missão.

A responsabilidade da Quest é responder:

> "O que precisa ser feito e quais são suas regras?"

Ela não deve responder:

> "Como o jogador evolui depois disso?"

Essa separação mantém o domínio limpo e permite que novos sistemas sejam adicionados no futuro sem modificar a estrutura principal.