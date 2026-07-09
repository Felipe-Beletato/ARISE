# 🚦 Dispatcher

> Este documento define o Dispatcher da camada **Application**, responsável por encaminhar Commands e Queries para seus respectivos Handlers.

---

# 🎯 Objetivo

O Dispatcher é o componente responsável por localizar e executar o Handler adequado para cada Command ou Query.

Ele atua como um intermediário entre a camada de apresentação (Presentation) e a camada de aplicação (Application).

Seu objetivo é eliminar o acoplamento direto entre endpoints e casos de uso.

---

# 🧠 Conceito

O Dispatcher responde apenas uma pergunta:

> **"Quem deve executar esta solicitação?"**

Ele nunca responde:

> **"Como essa solicitação será executada?"**

Essa responsabilidade pertence ao Handler.

---

# 🏛️ Filosofia

O Dispatcher não conhece regras de negócio.

Ele apenas:

- recebe um Command ou Query;
- identifica seu tipo;
- encontra o Handler correspondente;
- delega a execução;
- retorna o resultado.

---

# 📌 Responsabilidades

O Dispatcher deve:

- localizar Handlers;
- encaminhar Commands;
- encaminhar Queries;
- garantir a relação 1:1 entre mensagem e Handler.

---

# ❌ Não é responsabilidade

O Dispatcher nunca deve:

- acessar banco de dados;
- alterar entidades;
- calcular regras;
- validar domínio;
- emitir eventos;
- conhecer FastAPI.

---

# 🏗️ Fluxo Geral

```text
HTTP Request

↓

Parser

↓

Command / Query

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

---

# 📦 Funcionamento

Exemplo:

```text
CompleteQuestCommand

↓

Dispatcher

↓

CompleteQuestHandler
```

Outro exemplo:

```text
GetPlayerQuery

↓

Dispatcher

↓

GetPlayerHandler
```

---

# 🔄 Registro de Handlers

Cada Command ou Query deve possuir exatamente um Handler registrado.

Exemplo conceitual:

```text
CompleteQuestCommand

↓

CompleteQuestHandler
```

```text
GetStatisticsQuery

↓

GetStatisticsHandler
```

Caso nenhum Handler esteja registrado, o Dispatcher deve gerar uma exceção apropriada.

---

# ⚠️ Relação 1:1

Uma das regras do ARISE é:

```text
1 Command

↓

1 Handler
```

Da mesma forma:

```text
1 Query

↓

1 Handler
```

Essa regra evita ambiguidades e torna o fluxo previsível.

---

# 📂 Organização

Estrutura sugerida:

```text
application/

├── dispatcher.py

├── player/

├── quest/

├── progression/

├── reward/

└── statistics/
```

O Dispatcher permanece centralizado, enquanto os Handlers ficam organizados por feature.

---

# 🔄 Fluxo de Execução

```text
Endpoint

↓

Parser

↓

CreatePlayerCommand

↓

Dispatcher

↓

CreatePlayerHandler

↓

Player Domain

↓

Repository

↓

Response
```

---

# 📈 Benefícios

A utilização do Dispatcher oferece:

- baixo acoplamento;
- alta coesão;
- facilidade de testes;
- extensibilidade;
- substituição simples de Handlers;
- arquitetura previsível.

---

# 🧪 Tratamento de Erros

O Dispatcher deve identificar situações como:

- Handler não registrado;
- múltiplos Handlers para a mesma mensagem;
- tipo de mensagem inválido.

Esses erros pertencem à camada de Application.

---

# ⚙️ Possível Interface

Exemplo conceitual:

```python
dispatcher.dispatch(command)

dispatcher.dispatch(query)
```

A implementação interna permanece transparente para os demais componentes.

---

# 🔗 Relação com Handlers

O Dispatcher conhece apenas o contrato dos Handlers.

Ele nunca conhece a implementação interna.

Essa separação facilita substituições futuras e reduz dependências entre módulos.

---

# 🧪 Testes Esperados

Os testes devem validar:

- localização correta do Handler;
- execução correta;
- erro para Handler inexistente;
- erro para registros duplicados;
- retorno adequado ao chamador.

---

# 📚 Documentos Relacionados

- [[Commands]]
- [[Queries]]
- [[Handlers]]
- [[Request Flow]]

---

# ✅ Considerações Finais

O Dispatcher é o ponto central da camada de Application.

Sua responsabilidade é exclusivamente encaminhar mensagens para o Handler correto.

Toda lógica de negócio permanece isolada nos Handlers e no Domínio, mantendo a arquitetura desacoplada, previsível e fácil de evoluir.