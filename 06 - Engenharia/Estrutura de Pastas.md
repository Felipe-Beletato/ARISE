# 📁 Estrutura de Pastas

> Este documento define a organização oficial do backend do ARISE e descreve a responsabilidade de cada diretório do projeto.

---

# 🎯 Objetivo

A estrutura de pastas foi projetada para refletir a arquitetura da aplicação.

O principal objetivo é garantir:

- Organização consistente;
- Baixo acoplamento;
- Facilidade de manutenção;
- Escalabilidade;
- Navegação intuitiva.

Toda nova funcionalidade deve respeitar esta estrutura.

---

# 🏗️ Estrutura Geral

```text
backend/
│
├── app/
│
├── tests/
│
├── migrations/
│
├── scripts/
│
├── docs/
│
├── pyproject.toml
├── alembic.ini
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── main.py
```

---

# 📦 Diretório `app`

Contém todo o código da aplicação.

```text
app/
│
├── api/
├── application/
├── domain/
├── infrastructure/
├── config/
└── shared/
```

---

# 🌐 api/

Responsável exclusivamente pela comunicação externa.

Não contém regras de negócio.

```text
api/
│
├── routes/
├── dependencies/
├── middleware/
├── exceptions/
└── schemas/
```

### Responsabilidades

- Rotas HTTP
- Respostas da API
- Dependências do FastAPI
- Middleware
- Tratamento de exceções
- Modelos de entrada e saída (Pydantic)

---

# ⚙️ application/

Camada responsável pelos casos de uso da aplicação.

```text
application/
│
├── parser/
├── dispatcher/
├── commands/
├── queries/
├── handlers/
└── dto/
```

### parser/

Transforma entradas externas em objetos internos.

Exemplo:

```text
HTTP Request
      ↓
CreateQuestCommand
```

---

### dispatcher/

Localiza o Handler responsável por executar um Command ou Query.

Nunca contém regra de negócio.

---

### commands/

Representam operações que modificam o estado da aplicação.

Exemplos:

- CreateQuestCommand
- CompleteQuestCommand
- GainXPCommand

---

### queries/

Representam operações apenas de leitura.

Exemplos:

- GetPlayerQuery
- GetInventoryQuery
- GetStatisticsQuery

---

### handlers/

Cada Handler implementa exatamente um caso de uso.

Exemplos:

- CreatePlayerHandler
- CompleteQuestHandler
- GainXPHandler

---

### dto/

Objetos utilizados para comunicação entre camadas da aplicação.

---

# ❤️ domain/

O coração do ARISE.

Toda regra de negócio deve permanecer aqui.

```text
domain/
│
├── player/
├── quest/
├── xp/
├── momentum/
├── buffs/
├── contracts/
├── inventory/
├── achievement/
└── shared/
```

Cada módulo possui suas próprias entidades, regras e objetos de valor.

O domínio não conhece:

- FastAPI
- SQLAlchemy
- PostgreSQL
- Docker
- JWT

---

# 🔌 infrastructure/

Implementações concretas utilizadas pela aplicação.

```text
infrastructure/
│
├── database/
├── repositories/
├── auth/
├── cache/
├── messaging/
└── services/
```

### Responsabilidades

- Banco de dados
- Implementação de repositórios
- Autenticação
- Cache
- Integrações externas
- Serviços de infraestrutura

---

# ⚙️ config/

Arquivos de configuração do projeto.

Exemplos:

- Configurações da aplicação
- Variáveis de ambiente
- Inicialização de serviços

---

# 🧰 shared/

Componentes reutilizáveis entre diferentes módulos.

Exemplos:

- Exceções
- Utilitários
- Helpers
- Tipagens comuns
- Classes base

---

# 🧪 tests/

Todos os testes automatizados.

A estrutura deve espelhar a aplicação.

```text
tests/
│
├── unit/
├── integration/
└── e2e/
```

---

# 🗄️ migrations/

Migrações do banco de dados gerenciadas pelo Alembic.

---

# 📜 scripts/

Scripts auxiliares para desenvolvimento e manutenção.

Exemplos:

- Seed do banco
- Limpeza de ambiente
- Ferramentas administrativas

---

# 📚 docs/

Documentação técnica específica do backend, quando necessário.

A documentação principal do projeto permanece no Obsidian.

---

# 📌 Regras de Organização

Toda nova funcionalidade deve seguir os seguintes princípios:

- Cada diretório possui apenas uma responsabilidade.
- Não criar pastas genéricas como `utils` sem necessidade.
- Evitar dependências circulares.
- O domínio nunca depende da infraestrutura.
- Casos de uso ficam na camada `application`.
- Persistência fica em `infrastructure`.
- Comunicação HTTP fica em `api`.

---

# 🔄 Fluxo entre Camadas

```text
API
 │
 ▼
Application
 │
 ▼
Domain
 │
 ▼
Infrastructure
 │
 ▼
Database
```

As dependências devem sempre apontar para o centro da aplicação.

---

# 📚 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Roadmap Técnico]]
- [[Backend]]
- [[API]]
- [[Banco de Dados]]
- [[Tecnologias]]
- [[Planejamento Alpha]]