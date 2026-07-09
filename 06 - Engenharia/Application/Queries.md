# 🔍 Queries

> Este documento define o padrão de Queries utilizado pela camada **Application** do ARISE.

---

# 🎯 Objetivo

Uma Query representa uma **intenção de consultar informações do sistema**, sem realizar qualquer alteração de estado.

Toda operação de leitura dentro do ARISE deve ser representada por uma Query.

---

# 🧠 Conceito

Uma Query responde apenas uma pergunta:

> **"Quais informações eu quero obter?"**

Ela nunca responde:

> **"Como essas informações serão buscadas?"**

Essa responsabilidade pertence ao Query Handler.

---

# 🏛️ Filosofia

Queries são objetos simples.

Elas possuem apenas os dados necessários para localizar ou filtrar informações.

Assim como os Commands, elas não possuem regras de negócio.

---

# 📌 Responsabilidades

Uma Query deve:

- representar uma intenção de leitura;
- transportar filtros;
- transportar identificadores;
- ser imutável sempre que possível.

---

# ❌ Não é responsabilidade

Uma Query nunca deve:

- alterar entidades;
- modificar banco de dados;
- criar objetos de domínio;
- executar regras de negócio;
- conhecer FastAPI;
- conhecer SQLAlchemy;
- conhecer PostgreSQL.

---

# 🏗️ Fluxo Geral

```text
HTTP Request

↓

Parser

↓

Query

↓

Dispatcher

↓

Query Handler

↓

Repository

↓

Response
```

Assim como os Commands, a Query existe apenas durante o processamento da requisição.

---

# 📦 Estrutura

Toda Query deverá seguir um padrão semelhante:

```python
from dataclasses import dataclass
from uuid import UUID

@dataclass(frozen=True)
class GetPlayerQuery:
    player_id: UUID
```

Características:

- dataclass
- frozen=True
- sem métodos
- sem lógica
- apenas atributos

---

# 📝 Convenção de Nome

Toda Query termina com:

```text
Query
```

Exemplos:

```text
GetPlayerQuery

GetQuestQuery

GetStatisticsQuery

GetProgressionQuery

GetLevelQuery

GetCategoryQuery
```

---

# 📂 Organização

Cada agregado possuirá suas próprias Queries.

Estrutura sugerida:

```text
application/

├── player/

│   ├── commands/

│   ├── queries/

│   ├── handlers/

│   └── services/
```

Exemplo:

```text
player/

└── queries/

    ├── get_player.py

    ├── list_players.py

    └── get_profile.py
```

---

# 🔄 Ciclo de Vida

Uma Query percorre:

```text
Cliente

↓

FastAPI Endpoint

↓

Parser

↓

Query

↓

Dispatcher

↓

Query Handler

↓

Repository

↓

Resposta
```

Após retornar o resultado, a Query deixa de existir.

---

# 🧪 Validação

As Queries possuem apenas validações estruturais.

Exemplos:

- ID obrigatório;
- paginação válida;
- filtros válidos.

Validações de negócio pertencem ao domínio.

---

# 📊 Relação com Query Handlers

Cada Query possui exatamente um Query Handler.

```text
GetPlayerQuery

↓

GetPlayerHandler
```

Relação sempre 1:1.

---

# 🔄 Relação com Commands

Commands:

```text
WRITE
```

Queries:

```text
READ
```

Essa separação torna a arquitetura previsível e facilita testes, manutenção e escalabilidade.

---

# 📚 Exemplos do ARISE

Consultar jogador:

```text
GetPlayerQuery
```

---

Consultar progresso:

```text
GetProgressionQuery
```

---

Consultar Quest:

```text
GetQuestQuery
```

---

Consultar estatísticas:

```text
GetStatisticsQuery
```

---

Consultar categorias:

```text
GetCategoriesQuery
```

---

# 🧪 Testes Esperados

Os testes devem validar:

- criação correta;
- imutabilidade;
- transporte correto dos filtros;
- tipos válidos.

Queries não possuem regras de negócio.

---

# 🗂️ Estrutura de Código

```text
application/

└── player/

    ├── queries/

└── quest/

    ├── queries/

└── progression/

    ├── queries/

└── statistics/

    ├── queries/
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Commands]]
- [[Dispatcher]]
- [[Handlers]]
- [[Repositories]]
- [[Request Flow]]

---

# 📚 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Modelo de Domínio]]

---

# ✅ Considerações Finais

Queries representam toda leitura realizada pelo sistema.

Elas devem permanecer pequenas, imutáveis e livres de lógica de negócio.

Seu único objetivo é transportar os dados necessários para que um Query Handler obtenha as informações solicitadas de forma organizada e previsível.