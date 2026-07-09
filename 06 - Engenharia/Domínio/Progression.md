# 📈 Progression

> Este documento define o sistema de progressão do jogador dentro do domínio do ARISE.

---

# 🎯 Objetivo

O sistema de Progression é responsável por controlar a evolução do Player.

Ele representa o crescimento do jogador através de:

- Experiência acumulada;
- Evolução de nível;
- Desenvolvimento por categorias;
- Marcos de progresso.

---

# 🧠 Conceito

Progression representa a jornada do jogador.

Ela responde perguntas como:

- Quanto o jogador evoluiu?
- Qual seu nível atual?
- Quanto falta para o próximo nível?
- Quais áreas estão mais desenvolvidas?

---

# 📌 Responsabilidades

Progression é responsável por:

- Armazenar o progresso do jogador;
- Controlar o Level atual;
- Gerenciar XP Geral;
- Gerenciar progresso por Categoria;
- Verificar evolução de nível;
- Aplicar regras de progressão.

---

# ❌ Não é responsabilidade

Progression não deve:

- Criar Quests;
- Validar conclusão de atividades;
- Salvar dados no banco;
- Conhecer APIs;
- Gerenciar autenticação;
- Controlar recompensas.

---

# 🏗️ Estrutura Conceitual

```text
Progression

│
├── General XP
│
├── Category Progress
│
└── Level
```

---

# ⭐ General XP

Representa a experiência total do jogador.

Características:

- Nunca diminui;
- Define o Level geral;
- Representa evolução global.

Exemplo:

```text
XP Geral

1250 XP
```

---

# 🏷️ Category Progress

Representa o desenvolvimento individual de cada área.

Categorias:

```text
Vanguard

Codex

Soul

Treasury

Creation
```

Cada categoria possui seu próprio progresso.

Exemplo:

```text
Vanguard

XP: 350

Level: 3
```

---

# 🏆 Level

Representa a posição atual do jogador na progressão geral.

O Level depende exclusivamente do XP Geral.

Exemplo:

```text
Level 5

1200 / 1500 XP
```

---

# 🔄 Fluxo de Progressão

O ciclo principal:

```text
Complete Quest

↓

Receive Reward

↓

Add XP

↓

Update Progression

↓

Calculate Level

↓

Update Category

↓

Check Events
```

---

# 📊 Distribuição de XP

Cada Quest concede dois tipos de experiência:

```text
Reward XP

       │

       ├── General XP

       │

       └── Category XP
```

Exemplo:

Quest:

```text
Treino de musculação

Reward:

45 XP
```

Distribuição:

```text
General XP

30 XP


Vanguard XP

15 XP
```

---

# 📈 Curva de Nível

A progressão seguirá uma curva exponencial.

Objetivo:

- Níveis iniciais mais rápidos;
- Níveis altos mais difíceis;
- Sensação de crescimento contínuo.

Conceito:

```text
XP necessário

Level 1 → 2

Baixo


Level 50 → 51

Alto
```

A fórmula final será definida durante o balanceamento.

---

# 🧩 Relação com Player

```text
Player

↓

Progression

↓

Level

↓

Category Progress
```

O Player possui uma Progression.

A Progression controla sua evolução.

---

# ⚙️ Possíveis Commands

Operações que alteram Progression:

```text
AddXPCommand

UpdateCategoryProgressCommand

LevelUpCommand

ResetProgressionCommand
```

---

# 🔎 Possíveis Queries

Consultas:

```text
GetProgressionQuery

GetLevelQuery

GetCategoryProgressQuery

GetXPHistoryQuery
```

---

# 🧪 Testes esperados

O domínio deve validar:

- Adição correta de XP;
- Distribuição entre XP Geral e Categoria;
- Evolução de Level;
- Bloqueio de XP inválido;
- Cálculo correto de progresso.

---

# 🗂️ Possível Estrutura de Código

```text
domain/

└── progression/

    ├── entity.py

    ├── xp.py

    ├── level.py

    ├── category_progress.py

    ├── exceptions.py

    └── formulas.py
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Player]]
- [[XP]]
- [[Level]]
- [[Category]]
- [[Quest]]
- [[Reward]]

---

# 📚 Documentos Relacionados

- [[Modelo de Domínio]]
- [[Player]]
- [[Quest]]
- [[XP]]
- [[Category]]

---

# ✅ Considerações Finais

Progression é o sistema responsável por transformar ações do jogador em evolução.

Ela deve permanecer independente de qualquer interface ou infraestrutura.

O objetivo é que toda a lógica de crescimento do ARISE exista em um único lugar, permitindo balanceamento e evolução futura sem alterar outras partes do sistema.