# 🗺️ Roadmap Técnico

> Este documento define a estratégia de desenvolvimento do backend do ARISE, organizando a implementação em fases incrementais (Épicos).

---

# 🎯 Objetivo

O desenvolvimento do ARISE seguirá uma abordagem incremental.

Cada Épico adiciona uma camada importante da aplicação, garantindo que o sistema permaneça funcional, testável e de fácil evolução.

Nenhuma funcionalidade será implementada sem que sua infraestrutura esteja preparada.

---

# 🏗️ Estratégia de Desenvolvimento

O desenvolvimento seguirá esta ordem:

```text
Planejamento
      ↓
Arquitetura
      ↓
Infraestrutura
      ↓
Implementação
      ↓
Testes
      ↓
Documentação
      ↓
Merge
```

Cada funcionalidade deverá percorrer obrigatoriamente esse fluxo.

---

# 📚 Épicos

---

# Épico I

## 🏛️ A Fundação

### Objetivo

Construir toda a base técnica do projeto.

### Entregas

- Estrutura do backend
- FastAPI
- Configuração do projeto
- Docker
- PostgreSQL
- Alembic
- SQLAlchemy
- Sistema de configurações
- Logging
- Organização de pastas
- Pipeline inicial de testes

### Status

🟡 Em andamento

---

# Épico II

## 👤 O Primeiro Despertar

### Objetivo

Criar toda a infraestrutura de autenticação e gerenciamento de usuários.

### Entregas

- Cadastro
- Login
- JWT
- Refresh Token
- Perfil do usuário
- Permissões básicas

### Dependências

- Épico I

---

# Épico III

## ⚔️ O Núcleo do ARISE

### Objetivo

Construir as principais mecânicas do RPG.

### Entregas

- Sistema de Quests
- Categorias
- XP
- Progressão
- Níveis

### Dependências

- Épico II

---

# Épico IV

## 🔥 Sistemas de Progressão

### Objetivo

Adicionar os sistemas que tornam o progresso mais dinâmico.

### Entregas

- Momentum
- Buffs
- Debuffs
- Afinidades
- Títulos

### Dependências

- Épico III

---

# Épico V

## 🎒 Economia e Inventário

### Objetivo

Construir os sistemas de recompensa.

### Entregas

- Inventário
- Baús
- Recompensas
- Itens
- Contratos

### Dependências

- Épico IV

---

# Épico VI

## 📊 Inteligência do Sistema

### Objetivo

Adicionar recursos analíticos.

### Entregas

- Estatísticas
- Histórico
- Dashboard
- Recomendações
- Relatórios

### Dependências

- Épico V

---

# Épico VII

## 🚀 Preparação para Produção

### Objetivo

Preparar o sistema para ambientes reais.

### Entregas

- Performance
- Cache
- Redis
- Monitoramento
- Observabilidade
- Hardening
- Deploy

### Dependências

- Todos os Épicos anteriores

---

# 🧩 Ordem dos Módulos

A implementação dos módulos seguirá a seguinte sequência:

```text
Infraestrutura
        │
        ▼
Autenticação
        │
        ▼
Usuários
        │
        ▼
Quests
        │
        ▼
XP
        │
        ▼
Categorias
        │
        ▼
Progressão
        │
        ▼
Momentum
        │
        ▼
Buffs
        │
        ▼
Inventário
        │
        ▼
Contratos
        │
        ▼
Dashboard
```

---

# 📌 Critérios para iniciar um novo Épico

Antes de iniciar qualquer Épico, os seguintes critérios devem ser atendidos:

- Arquitetura aprovada.
- Documentação criada.
- Estrutura definida.
- Casos de uso identificados.
- Modelo de domínio planejado.

---

# ✅ Definição de Concluído (Definition of Done)

Uma funcionalidade só poderá ser considerada concluída quando possuir:

- Código implementado.
- Testes automatizados.
- Documentação atualizada.
- Revisão realizada.
- Merge para `develop`.

---

# 🔗 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Planejamento Alpha]]
- [[Backend]]
- [[API]]
- [[Banco de Dados]]
- [[Tecnologias]]
- [[Estrutura de Pastas]]
- [[Git Workflow]]