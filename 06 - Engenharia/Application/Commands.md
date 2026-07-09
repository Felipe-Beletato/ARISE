# 📨 Commands

> Toda alteração de estado iniciada por um caso de uso externo deve começar através de um Command.

---

# 🎯 Objetivo

Um Command representa uma **intenção de alterar o estado do sistema**.

Ele descreve **o que o usuário deseja fazer**, mas não contém a lógica necessária para executar essa ação.

Toda alteração de estado dentro do ARISE deve começar através de um Command.

---

# 🧠 Conceito

O Command responde apenas uma pergunta:

> **"O que precisa acontecer?"**

Ele nunca responde:

> **"Como isso será feito?"**

Essa responsabilidade pertence aos Handlers.

---

# 🏛️ Filosofia

Commands são objetos simples.

Eles possuem apenas os dados necessários para executar um caso de uso.

Eles não:

- acessam banco de dados;
- executam regras de negócio;
- chamam APIs;
- calculam valores;
- validam infraestrutura.

Seu único objetivo é transportar informações.

---

# 📌 Responsabilidades

Um Command deve:

- representar uma intenção;
- transportar dados;
- ser imutável sempre que possível;
- possuir apenas informações necessárias para o caso de uso.

---

# ❌ Não é responsabilidade

Um Command nunca deve:

- alterar entidades;
- executar lógica;
- acessar repositories;
- conhecer FastAPI;
- conhecer SQLAlchemy;
- conhecer PostgreSQL;
- emitir respostas HTTP.

---

# 🏗️ Fluxo Geral

```text
HTTP Request

↓

Parser

↓

Command

↓

Dispatcher

↓

Handler

↓

Domain

↓

Repository

↓

Response
```

O Command existe apenas entre o Parser e o Dispatcher.

---

# 📦 Estrutura

Todo Command deverá seguir um padrão semelhante:

```python
from dataclasses import dataclass
from uuid import UUID

@dataclass(frozen=True)
class CompleteQuestCommand:
    player_id: UUID
    quest_id: UUID
```

Características:

- `dataclass`
- `frozen=True`
- sem métodos
- sem lógica
- apenas atributos

---

# 📝 Convenção de Nome

Todos os Commands terminam com:

```text
Command
```

Exemplos:

```text
CreatePlayerCommand

UpdateProfileCommand

CompleteQuestCommand

GainXPCommand

CreateQuestCommand

ArchiveQuestCommand

ResetStatisticsCommand
```

---

# 📂 Organização

Cada agregado possuirá seus próprios Commands.

Estrutura sugerida:

```text
application/

└── commands/

    ├── player/
    │
    ├── progression/
    │
    ├── quest/
    │
    ├── reward/
    │
    └── statistics/
```

Exemplo:

```text
commands/

└── player/

    ├── create_player.py

    ├── update_profile.py

    └── delete_player.py
```

---

# 📨 Ciclo de Vida

Um Command percorre o seguinte caminho:

```text
Cliente

↓

FastAPI Endpoint

↓

Parser

↓

Command

↓

Dispatcher

↓

Handler

↓

Domain

↓

Repository

↓

Resposta
```

Após sua execução, o Command é descartado.

Ele não mantém estado.

---

# 🧪 Validação

Os Commands devem possuir apenas validações básicas.

Exemplos:

- campos obrigatórios;
- tipos válidos;
- estruturas corretas.

Validações de negócio pertencem ao domínio.

Exemplo:

Correto:

```text
player_id obrigatório
```

Incorreto:

```text
O jogador pode concluir essa Quest?
```

Essa pergunta pertence ao domínio.

---

# 📊 Relação com Handlers

Cada Command possui exatamente um Handler responsável.

```text
CompleteQuestCommand

↓

CompleteQuestHandler
```

Essa relação é sempre 1:1.

---

# 🔄 Relação com Queries

Commands alteram estado.

Queries apenas consultam.

```text
Commands

↓

WRITE
```

```text
Queries

↓

READ
```

Essa separação torna a arquitetura mais previsível.

---

# 📚 Exemplos do ARISE

## Criar jogador

```text
CreatePlayerCommand
```

---

## Completar Quest

```text
CompleteQuestCommand
```

---

## Atualizar Perfil

```text
UpdateProfileCommand
```

---

## Adicionar XP

```text
GainXPCommand
```

---

## Criar Quest

```text
CreateQuestCommand
```

---

# 🧪 Testes Esperados

Os testes devem verificar:

- criação correta;
- imutabilidade;
- tipos válidos;
- transporte correto dos dados.

Commands não possuem testes de regra de negócio.

---

# 🗂️ Estrutura de Código

```text
application/

└── commands/

    ├── player/

    ├── progression/

    ├── quest/

    ├── reward/

    ├── statistics/

    └── shared/
```

---

# 🔗 Relacionamentos

Este documento se relaciona com:

- [[Handlers]]
- [[Dispatcher]]
- [[Queries]]
- [[Request Flow]]
- [[Application Layer]]

---

# 📚 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Modelo de Domínio]]
- [[Planejamento Alpha]]

---

# ✅ Considerações Finais

Commands representam a porta de entrada para qualquer alteração de estado dentro do ARISE.

Eles devem permanecer pequenos, imutáveis e livres de regras de negócio.

Toda lógica pertence ao domínio e aos respectivos Handlers, mantendo a arquitetura organizada, testável e de fácil manutenção.