# ⭐ XP

> Este documento define o conceito de XP dentro do domínio do ARISE, representando a experiência adquirida pelo jogador através das suas ações.

---

# 🎯 Objetivo

XP representa o progresso acumulado pelo jogador.

Ele é a principal unidade de evolução do ARISE, sendo utilizado para:

- Evolução geral do jogador;
- Desenvolvimento por categoria;
- Cálculo de nível;
- Acompanhamento de progresso.

---

# 🧠 Conceito

No ARISE existem dois tipos principais de experiência:

```text
XP Geral

+

XP por Categoria
```

Cada um possui uma função diferente.

---

# 🌎 XP Geral

Representa a evolução total do jogador.

Características:

- Nunca diminui;
- Afeta o Level geral;
- Representa progresso acumulado.

Exemplo:

```text
Player

XP Geral:

1500 XP
```

---

# 🏷️ XP por Categoria

Representa experiência adquirida em uma área específica.

Exemplo:

```text
Vanguard

500 XP


Codex

300 XP
```

O XP por Categoria permite que o jogador tenha diferentes níveis de desenvolvimento.

---

# 📊 Distribuição de XP

Toda Quest gera uma recompensa de XP.

Essa recompensa é dividida em:

```text
Reward XP

        │

        ├── XP Geral

        │
        └── XP Categoria
```

---

# ⚖️ Regra de Distribuição Alpha

A distribuição padrão será:

```text
2/3

XP Geral


1/3

XP Categoria
```

Exemplo:

Quest:

```text
45 XP
```

Resultado:

```text
XP Geral:

30 XP


XP Vanguard:

15 XP
```

---

# 🔄 Fluxo de Ganho de XP

```text
Quest Completa

↓

Reward Gerada

↓

XP Calculado

↓

XP Geral Atualizado

↓

XP Categoria Atualizado

↓

Progression Atualizada

↓

Verificar Level
```

---

# 📌 Responsabilidades

XP é responsável por:

- Representar quantidade de experiência;
- Validar valores;
- Controlar operações matemáticas relacionadas ao XP;
- Garantir consistência dos valores.

---

# ❌ Não é responsabilidade

XP não deve:

- Criar recompensas;
- Completar Quests;
- Alterar Level diretamente;
- Atualizar Player;
- Controlar banco de dados.

---

# 🏗️ Estrutura Conceitual

```text
XP

│
├── Amount
│
├── Type
│
└── Source
```

---

# Amount

Representa o valor numérico.

Exemplo:

```text
50 XP
```

---

# Type

Define o tipo de experiência.

Valores:

```text
GENERAL

CATEGORY
```

---

# Source

Representa a origem do XP.

Exemplos:

```text
Quest Completion

Achievement

Contract
```

No Alpha:

```text
Quest Completion
```

---

# 📈 Validação de XP

Regras:

- XP não pode ser negativo;
- Ganho deve possuir origem válida;
- Valores devem respeitar limites definidos;
- Alterações devem ocorrer através de casos de uso.

---

# 🚫 Perda de XP

Regra Alpha:

```text
XP Geral

Nunca diminui.
```

Debuffs futuros poderão afetar:

- multiplicadores;
- ganho de XP;
- recompensas.

Mas não removerão XP histórico.

---

# 🧩 Relação com Progression

```text
XP

↓

Progression

↓

Level
```

Progression utiliza XP para calcular evolução.

---

# ⚙️ Possíveis Commands

```text
AddXPCommand

SplitXPRewardCommand

ApplyXPRewardCommand
```

---

# 🔎 Possíveis Queries

```text
GetTotalXPQuery

GetCategoryXPQuery

GetXPHistoryQuery
```

---

# 🧪 Testes esperados

O domínio deve validar:

- Criação de XP válido;
- Bloqueio de valores negativos;
- Distribuição correta;
- Separação entre XP Geral e Categoria;
- Registro correto da origem.

---

# 🗂️ Possível Estrutura de Código

```text
domain/

└── xp/

    ├── entity.py

    ├── xp_type.py

    ├── xp_amount.py

    ├── xp_source.py

    ├── formulas.py

    └── exceptions.py
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Quest]]
- [[Reward]]
- [[Progression]]
- [[Category]]
- [[Level]]
- [[Player]]

---

# 📚 Documentos Relacionados

- [[Modelo de Domínio]]
- [[Player]]
- [[Progression]]
- [[Quest]]
- [[Category]]
- [[Reward]]

---

# ✅ Considerações Finais

XP é a unidade de medida da evolução do ARISE.

Ele deve permanecer simples e previsível.

A responsabilidade do XP é responder:

> "Quanto progresso foi obtido?"

Ele não deve responder:

> "O que esse progresso significa?"

Essa interpretação pertence ao sistema de Progression.