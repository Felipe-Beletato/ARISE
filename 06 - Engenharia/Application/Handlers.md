# ⚙️ Handlers

> Este documento define o padrão de Handlers utilizado pela camada **Application** do ARISE.

---

# 🎯 Objetivo

Um Handler é responsável por executar um único caso de uso da aplicação.

Ele recebe um Command ou uma Query, coordena a execução da operação e devolve o resultado esperado.

Toda lógica de orquestração da aplicação acontece dentro dos Handlers.

---

# 🧠 Conceito

O Handler responde apenas uma pergunta:

> **"Como esta intenção será executada?"**

Ele nunca responde:

> **"Quais são as regras do jogo?"**

Essa responsabilidade pertence ao Domínio.

---

# 🏛️ Filosofia

Os Handlers coordenam a execução.

Eles não são o domínio.

Eles também não pertencem à infraestrutura.

Sua função é conectar as camadas.

---

# 📌 Responsabilidades

Um Handler deve:

- receber Commands ou Queries;
- validar pré-condições da aplicação;
- carregar entidades através de Repositories;
- executar regras do Domínio;
- persistir alterações;
- Publicar eventos gerados pelo Domínio quando necessário;
- retornar o resultado da operação.

---

# ❌ Não é responsabilidade

Um Handler nunca deve:

- conter regras de negócio complexas;
- acessar SQL diretamente;
- conhecer FastAPI;
- montar respostas HTTP;
- calcular Progression;
- calcular XP;
- manipular JSON.

---

# 🏗️ Fluxo Geral

```text
Command / Query

↓

Handler

↓

Repository

↓

Domain

↓

Repository

↓

Domain Events

↓

Response
```

---

# 🔄 Fluxo de um Command

Exemplo:

```text
CompleteQuestCommand

↓

CompleteQuestHandler

↓

Buscar Player

↓

Buscar Quest

↓

Quest.complete()

↓

Reward.generate()

↓

Salvar Player

↓

Publicar Eventos

↓

Retornar Resultado
```

Observe que:

Toda regra de negócio permanece dentro do domínio.

O Handler apenas coordena a execução.

---

# 🔍 Fluxo de uma Query

Exemplo:

```text
GetPlayerQuery

↓

GetPlayerHandler

↓

Repository

↓

Retornar DTO
```

Queries não modificam estado.

---

# 📦 Estrutura

Exemplo conceitual:

```python
class CompleteQuestHandler:

    async def handle(
        self,
        command: CompleteQuestCommand,
    ):
        ...
```

Todo Handler deve possuir um único ponto de entrada:

```python
handle()
```

---

# 📂 Organização

Os Handlers ficam organizados por feature.

```text
application/

└── quest/

    ├── commands/

    ├── handlers/

    │   ├── create_quest_handler.py

    │   ├── complete_quest_handler.py

    │   └── archive_quest_handler.py

    └── queries/
```

---

# 📏 Princípio da Responsabilidade Única

Cada Handler executa apenas um caso de uso.

Correto:

```text
CompleteQuestHandler
```

Incorreto:

```text
QuestManager
```

Um Handler nunca deve possuir múltiplas responsabilidades.

---

# 🔄 Relação com Commands

A relação é sempre:

```text
1 Command

↓

1 Handler
```

---

# 🔄 Relação com Queries

Da mesma forma:

```text
1 Query

↓

1 Handler
```

---

# 📈 Relação com o Domínio

O Handler utiliza entidades do domínio.

Ele nunca implementa suas regras.

Exemplo:

```text
Player.complete_quest()
```

é uma responsabilidade do domínio.

O Handler apenas solicita essa operação.

---

# 📢 Relação com Eventos de Domínio

Após concluir um caso de uso, o Handler poderá publicar eventos.

Exemplo:

```text
QuestCompletedEvent

↓

Statistics

↓

Achievements

↓

Momentum
```

Isso mantém os módulos desacoplados.

---

# 🧪 Testes Esperados

Cada Handler deve possuir testes específicos para:

- fluxo principal;
- exceções;
- integração com Repositories;
- publicação de eventos.

---

# 🗂️ Estrutura de Código

```text
application/

    player/

        handlers/

    quest/

        handlers/

    progression/

        handlers/

    reward/

        handlers/

    statistics/

        handlers/
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Commands]]
- [[Queries]]
- [[Dispatcher]]
- [[Repositories]]
- [[Domain Events]]
- [[Request Flow]]

---

# 📚 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Modelo de Domínio]]

---

# ✅ Considerações Finais

Os Handlers representam a camada de orquestração da aplicação.

Eles conectam Commands, Queries, Repositories e o Domínio, mantendo cada responsabilidade em sua camada correta.

Um Handler deve ser pequeno, objetivo e focado em um único caso de uso.

Quanto menor e mais específico ele for, mais fácil será testar, manter e evoluir o sistema ao longo do tempo.