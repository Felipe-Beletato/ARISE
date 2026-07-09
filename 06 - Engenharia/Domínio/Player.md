# 👤 Player

> Este documento define a entidade central do domínio do ARISE: o Player.

---

# 🎯 Objetivo

O Player representa o usuário dentro do sistema ARISE.

Ele é a entidade principal do domínio e funciona como a raiz de acesso ao estado do jogador.

O Player não concentra todas as regras do sistema.

Sua responsabilidade é representar:

- identidade do jogador;
- estado atual;
- componentes relacionados à evolução;
- acesso aos sistemas vinculados.

---

# 🧠 Conceito

O ARISE é construído em torno da evolução do jogador.

Por isso, o Player é o ponto de conexão entre:

- Quests;
- Progressão;
- XP;
- Categorias;
- Estatísticas;
- Sistemas futuros de evolução.

Porém, cada sistema possui sua própria responsabilidade.

O Player não deve se tornar um objeto responsável por toda a lógica do jogo.

---

# 🏗️ Responsabilidades

O Player é responsável por:

- Representar um usuário válido dentro do domínio;
- Manter sua identificação;
- Possuir seus componentes de evolução;
- Controlar acesso ao seu estado;
- Garantir consistência básica dos seus dados.

---

# ❌ Não é responsabilidade do Player

O Player não deve:

- calcular XP;
- criar Quests;
- validar conclusão de Quest;
- aplicar Buffs;
- controlar Inventário;
- calcular Momentum;
- gerenciar autenticação;
- acessar banco de dados.

Essas responsabilidades pertencem aos seus respectivos módulos.

---

# 🧩 Estrutura Conceitual

```text
Player

│
├── Identity
│
├── Profile
│
├── Progression
│
├── QuestLog
│
├── Statistics
│
└── Future Systems
    │
    ├── Inventory
    ├── Momentum
    ├── Buffs
    ├── Debuffs
    ├── Contracts
    └── Titles
```

---

# 📦 Componentes

## Identity

Representa a identificação única do jogador.

Responsável por:

- ID;
- referência interna;
- identificação dentro do sistema.

Exemplo conceitual:

```text
Player ID

UUID
```

---

# 👤 Profile

Representa informações básicas do jogador.

Exemplos:

- Nome;
- Avatar;
- Preferências;
- Configurações.

Não possui regras de progressão.

---

# 📈 Progression

Responsável pelo desenvolvimento do jogador.

Controla:

- XP Geral;
- XP por Categoria;
- Level;
- Evolução.

Documento relacionado:

[[Progression]]

---

# 📚 QuestLog

Responsável pelo relacionamento do jogador com suas Quests.

Controla:

- Quests ativas;
- Quests concluídas;
- Histórico.

Documento relacionado:

[[Quest]]

---

# 📊 Statistics

Responsável por informações de acompanhamento.

Exemplos:

- Quantidade de quests concluídas;
- XP acumulado;
- Sequências;
- Tempo de atividade.

As estatísticas não alteram regras do jogo.

---

# 🏷️ Estado do Player

O estado do Player é definido pela combinação dos seus componentes.

Exemplo:

```text
Player

Level 5

XP Geral: 1200

Categoria:

Vanguard Lv.3

Quest Streak:

7 dias
```

---

# 🔄 Ciclo de Vida

## Criação

Quando um usuário inicia no ARISE:

```text
Create Account

↓

Create Player

↓

Initialize Components

↓

Ready
```

O Player inicia com:

- Progression inicial;
- Categorias padrão;
- Estatísticas vazias;
- QuestLog vazio.

---

# 🔥 Evolução

Durante sua jornada:

```text
Complete Quest

↓

Receive Reward

↓

Update Progression

↓

Increase XP

↓

Check Level

↓

Update Statistics
```

---

# 📌 Regras do Domínio

## Regra 1

Todo Player deve possuir uma identidade única.

---

## Regra 2

Todo Player deve possuir um sistema de Progression.

---

## Regra 3

O estado do Player deve ser alterado apenas através de casos de uso válidos.

Exemplo:

Correto:

```text
CompleteQuestHandler

↓

Progression.add_xp()
```

Incorreto:

```text
API

↓

Player.xp = 500
```

---

## Regra 4

O Player não conhece detalhes externos.

Ele não sabe:

- onde seus dados estão salvos;
- como uma requisição chegou;
- qual banco está sendo usado.

---

# ⚙️ Possíveis Commands

Operações que podem modificar o Player:

```text
CreatePlayerCommand

UpdateProfileCommand

CompleteQuestCommand

GainXPCommand

ChangeCategoryProgressCommand
```

---

# 🔎 Possíveis Queries

Operações de leitura:

```text
GetPlayerQuery

GetProfileQuery

GetProgressionQuery

GetStatisticsQuery
```

---

# 🧪 Testes esperados

O domínio do Player deve validar:

- criação correta;
- identidade única;
- inicialização dos componentes;
- alterações válidas de estado;
- bloqueio de estados inválidos.

---

# 🗂️ Possível Estrutura de Código

Futuramente:

```text
domain/

└── player/

    ├── entity.py

    ├── profile.py

    ├── identity.py

    ├── exceptions.py

    └── value_objects.py
```

---

# 🔗 Relacionamentos

O Player se relaciona com:

- [[Progression]]
- [[Quest]]
- [[Category]]
- [[XP]]
- [[Reward]]
- [[Level]]

Sistemas futuros:

- [[Momentum]]
- [[Buffs]]
- [[Debuffs]]
- [[Contracts]]
- [[Titles]]
- [[Inventory]]

---

# 📚 Documentos Relacionados

- [[Modelo de Domínio]]
- [[Arquitetura Geral]]
- [[Planejamento Alpha]]
- [[Roadmap Técnico]]

---

# ✅ Considerações Finais

O Player é a raiz do domínio, mas não deve se tornar o centro de todas as responsabilidades.

A evolução saudável do ARISE depende de manter o Player simples, enquanto seus sistemas especializados evoluem ao redor dele.

O objetivo é que o jogador seja complexo como experiência, mas simples como implementação.