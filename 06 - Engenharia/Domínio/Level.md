# 🏆 Level

> Este documento define o sistema de níveis do ARISE, responsável por representar a evolução geral do jogador.

---

# 🎯 Objetivo

O Level representa o estágio atual de evolução do Player.

Ele funciona como um indicador visual da jornada do jogador e é calculado exclusivamente com base no XP Geral.

O Level nunca é alterado manualmente.

Sua evolução ocorre automaticamente através do sistema de Progression.

---

# 🧠 Conceito

No ARISE, o Level não representa poder.

Ele representa consistência.

Um jogador de nível elevado não é necessariamente mais forte.

Ele simplesmente acumulou mais progresso ao longo do tempo.

---

# 📌 Responsabilidades

Level é responsável por:

- representar o nível atual;
- indicar progresso para o próximo nível;
- informar requisitos da próxima evolução;
- servir como referência para desbloqueios futuros.

---

# ❌ Não é responsabilidade

Level não deve:

- armazenar XP;
- calcular recompensas;
- modificar Progression;
- criar eventos;
- controlar categorias.

---

# 🏗️ Estrutura Conceitual

```text
Level

│

├── Current Level

├── Current XP

├── Required XP

└── Progress
```

---

# 📊 Relação com XP

```text
XP Geral

↓

Progression

↓

Level
```

O Level depende exclusivamente do XP Geral.

---

# 📈 Curva de Evolução

A progressão seguirá uma curva exponencial.

Objetivos:

- evolução rápida nos primeiros níveis;
- desaceleração gradual;
- sensação constante de progresso.

Exemplo:

```text
Level 1

0 XP

↓

Level 2

100 XP

↓

Level 3

250 XP

↓

Level 4

450 XP

↓

...
```

Os valores finais serão definidos durante o balanceamento.

---

# 🔄 Fluxo

```text
Quest

↓

Reward

↓

XP

↓

Progression

↓

Check Level

↓

Level Up
```

---

# 🎉 Level Up

Quando o XP necessário é atingido:

```text
XP >= XP Necessário
```

A Progression promove automaticamente o jogador.

---

# 🔓 Desbloqueios Futuros

No Beta, o Level poderá liberar:

- novos contratos;
- conquistas;
- títulos;
- eventos;
- cosméticos;
- funcionalidades.

O Alpha utilizará o Level apenas como indicador de evolução.

---

# ⚙️ Possíveis Commands

```text
CheckLevelCommand

LevelUpCommand
```

---

# 🔎 Possíveis Queries

```text
GetLevelQuery

GetLevelProgressQuery

GetNextLevelRequirementQuery
```

---

# 🧪 Testes esperados

O domínio deve validar:

- cálculo correto do nível;
- evolução automática;
- bloqueio de regressão;
- progresso correto para o próximo nível.

---

# 🗂️ Possível Estrutura

```text
domain/

└── level/

    ├── entity.py

    ├── formulas.py

    ├── exceptions.py

    └── value_objects.py
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Player]]
- [[Progression]]
- [[XP]]

---

# 📚 Documentos Relacionados

- [[Modelo de Domínio]]
- [[Progression]]
- [[XP]]

---

# ✅ Considerações Finais

O Level representa apenas um reflexo da evolução do jogador.

Toda lógica permanece concentrada na Progression.

Isso mantém a responsabilidade de cada componente bem definida e facilita futuras alterações na curva de evolução sem impactar o restante do domínio.