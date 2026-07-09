# 🏷️ Category

> Este documento define a entidade Category dentro do domínio do ARISE, representando as áreas de desenvolvimento do jogador.

---

# 🎯 Objetivo

Category representa uma área específica de evolução dentro do ARISE.

Ela permite que o progresso do jogador seja dividido em diferentes aspectos da vida, evitando que toda evolução seja representada apenas por um valor global.

---

# 🧠 Conceito

O ARISE entende que um jogador possui diferentes áreas de desenvolvimento.

Por isso, o progresso é separado em categorias.

Exemplo:

Um jogador pode estar:

```text
Vanguard

Nível 5
```

mas:

```text
Codex

Nível 2
```

Isso representa um perfil de evolução mais realista.

---

# 📌 Responsabilidades

Category é responsável por:

- Representar uma área de evolução;
- Identificar seu propósito;
- Organizar o progresso relacionado;
- Definir afinidades com determinadas Quests.

---

# ❌ Não é responsabilidade

Category não deve:

- Armazenar XP diretamente;
- Calcular Level;
- Criar Quests;
- Alterar Progression;
- Controlar recompensas.

Essas responsabilidades pertencem a outros módulos.

---

# 🏗️ Estrutura Conceitual

```text
Category

│
├── Identity
│
├── Name
│
├── Description
│
└── Affinity Rules
```

---

# 🆔 Identity

Cada categoria possui uma identificação única.

Exemplo:

```text
Category ID

VANGUARD
```

---

# 📚 Categorias do Alpha

O Alpha possui cinco categorias principais.

---

# ⚔️ Vanguard

Representa disciplina física e saúde.

Relacionada a:

- Exercícios;
- Alimentação;
- Sono;
- Condicionamento.

Exemplos de Quests:

```text
Treino de musculação

Correr 5km

Preparar refeição saudável
```

---

# 📖 Codex

Representa conhecimento e aprendizado.

Relacionada a:

- Estudos;
- Leitura;
- Programação;
- Pesquisa.

Exemplos:

```text
Estudar Python

Ler documentação

Aprender novo conceito
```

---

# 🌙 Soul

Representa desenvolvimento mental e equilíbrio pessoal.

Relacionada a:

- Reflexão;
- Criatividade;
- Autoconhecimento;
- Saúde emocional.

Exemplos:

```text
Meditação

Escrever diário

Praticar hobby
```

---

# 💰 Treasury

Representa administração financeira.

Relacionada a:

- Organização financeira;
- Economia;
- Planejamento.

Exemplos:

```text
Controlar gastos

Estudar investimento

Organizar orçamento
```

---

# 🎨 Creation

Representa criação e produção.

Relacionada a:

- Projetos;
- Arte;
- Construção;
- Desenvolvimento.

Exemplos:

```text
Criar projeto

Escrever conteúdo

Desenvolver aplicação
```

---

# 🔄 Relação com Quest

Uma Quest pode possuir uma categoria principal.

Exemplo:

```text
Quest:

Treinar musculação


Category:

Vanguard
```

Fluxo:

```text
Quest

↓

Reward

↓

Category Progress

↓

Category Evolution
```

---

# 📈 Category Progress

O progresso da categoria pertence ao jogador, não à categoria.

Exemplo:

```text
Category:

Vanguard


Player A:

500 XP


Player B:

100 XP
```

Por isso:

```text
Category

≠

Category Progress
```

---

# ⚙️ Possíveis Commands

Operações relacionadas:

```text
AddCategoryXPCommand

UpdateCategoryProgressCommand

GetCategoryProgressCommand
```

---

# 🔎 Possíveis Queries

Consultas:

```text
GetCategoriesQuery

GetPlayerCategoriesQuery

GetCategoryRankingQuery
```

---

# 🧪 Testes esperados

O domínio deve validar:

- Categoria existente;
- Associação correta com Quest;
- Distribuição correta de XP;
- Separação entre Categoria e Progresso.

---

# 🗂️ Possível Estrutura de Código

```text
domain/

└── category/

    ├── entity.py

    ├── category_type.py

    ├── affinity.py

    ├── exceptions.py

    └── value_objects.py
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Player]]
- [[Quest]]
- [[XP]]
- [[Progression]]
- [[Reward]]

---

# 📚 Documentos Relacionados

- [[Modelo de Domínio]]
- [[Player]]
- [[Progression]]
- [[Quest]]
- [[XP]]

---

# ✅ Considerações Finais

Category representa os diferentes caminhos de evolução dentro do ARISE.

Ela existe para transformar o progresso do jogador em uma jornada mais significativa, permitindo que diferentes áreas cresçam de forma independente.

A Category define:

> "Em qual área o jogador está evoluindo?"

Ela não define:

> "Quanto o jogador evoluiu?"

Essa responsabilidade pertence ao Category Progress e ao sistema de Progression.