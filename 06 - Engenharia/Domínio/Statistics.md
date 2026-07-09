# 📊 Statistics

> Este documento define o sistema de estatísticas do ARISE, responsável por registrar informações sobre a jornada do jogador sem interferir nas regras de negócio.

---

# 🎯 Objetivo

Statistics armazena dados históricos e métricas sobre o comportamento do jogador.

Seu propósito é fornecer informações para:

- dashboards;
- histórico;
- acompanhamento da evolução;
- análises futuras.

Statistics nunca altera a Progression.

Ela apenas observa.

---

# 🧠 Conceito

Enquanto a Progression representa o estado atual do jogador, Statistics representa sua história.

Exemplo:

```text
Progression

↓

Nível 12
```

```text
Statistics

↓

327 Quests concluídas

↓

183 horas jogadas

↓

24 dias consecutivos

↓

18.250 XP obtido
```

---

# 📌 Responsabilidades

Statistics é responsável por registrar:

- Quests concluídas;
- XP obtido;
- dias consecutivos;
- tempo de atividade;
- categorias mais utilizadas;
- quantidade de missões;
- histórico geral.

---

# ❌ Não é responsabilidade

Statistics não deve:

- calcular XP;
- alterar níveis;
- completar Quests;
- modificar Player;
- conceder recompensas.

---

# 🏗️ Estrutura Conceitual

```text
Statistics

│

├── Quest Statistics

├── XP Statistics

├── Streak Statistics

├── Time Statistics

└── Category Statistics
```

---

# 📚 Quest Statistics

Exemplos:

```text
Total de Quests

↓

Quests concluídas

↓

Quests canceladas

↓

Taxa de conclusão
```

---

# ⭐ XP Statistics

Exemplos:

```text
XP Total

↓

XP Médio por Quest

↓

Maior recompensa

↓

XP por Categoria
```

---

# 🔥 Streak Statistics

Registra consistência.

Exemplo:

```text
Maior sequência

↓

Sequência atual

↓

Dias ativos
```

No Alpha essas informações serão apenas estatísticas.

No Beta alimentarão o sistema de Momentum.

---

# ⏱️ Time Statistics

Exemplos:

```text
Dias utilizando o ARISE

↓

Tempo total registrado

↓

Última atividade
```

---

# 🏷️ Category Statistics

Exemplos:

```text
Categoria favorita

↓

XP por categoria

↓

Quantidade de Quests

↓

Tempo dedicado
```

---

# 🔄 Fluxo

```text
Quest Completa

↓

Reward

↓

Progression

↓

Statistics Update
```

Statistics sempre é atualizada por último.

---

# 📈 Eventos Monitorados

Statistics poderá registrar:

- criação de Quest;
- conclusão;
- ganho de XP;
- Level Up;
- criação de conta;
- login;
- contratos;
- conquistas.

---

# ⚙️ Possíveis Commands

```text
UpdateStatisticsCommand

ResetStatisticsCommand
```

---

# 🔎 Possíveis Queries

```text
GetStatisticsQuery

GetQuestStatisticsQuery

GetXPStatisticsQuery

GetStreakQuery
```

---

# 🧪 Testes esperados

O domínio deve validar:

- atualização correta;
- histórico consistente;
- cálculo de métricas;
- bloqueio de valores inválidos.

---

# 🗂️ Possível Estrutura

```text
domain/

└── statistics/

    ├── entity.py

    ├── quest_statistics.py

    ├── xp_statistics.py

    ├── streak_statistics.py

    ├── time_statistics.py

    └── exceptions.py
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Player]]
- [[Quest]]
- [[Progression]]
- [[XP]]
- [[Level]]

---

# 📚 Documentos Relacionados

- [[Modelo de Domínio]]
- [[Player]]
- [[Quest]]
- [[Progression]]

---

# ✅ Considerações Finais

Statistics existe para contar a história do jogador.

Ela nunca interfere nas regras do jogo.

Seu papel é transformar dados em informação, permitindo que o ARISE apresente uma visão rica da evolução do jogador sem aumentar o acoplamento entre os demais componentes do domínio.