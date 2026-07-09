# 🚀 Planejamento Alpha

> Este documento define o escopo oficial do Alpha do ARISE, estabelecendo os objetivos, funcionalidades, limitações e critérios de conclusão da primeira versão jogável do sistema.

---

# 🎯 Objetivo do Alpha

O Alpha tem como objetivo validar a arquitetura do sistema e implementar o núcleo das mecânicas do ARISE.

Nesta fase, o foco não será quantidade de funcionalidades, mas sim a construção de uma base sólida, modular e escalável.

Todo o desenvolvimento do Alpha deverá respeitar a arquitetura definida em [[Arquitetura Geral]].

---

# 📌 Objetivos Técnicos

Ao final do Alpha, o backend deverá possuir:

- Arquitetura modular implementada.
- API funcional utilizando FastAPI.
- Persistência em PostgreSQL.
- Sistema de autenticação.
- Estrutura baseada em Parser → Dispatcher → Handler → Domain.
- Testes automatizados para os principais casos de uso.
- Documentação atualizada.

---

# 🎮 Objetivos Funcionais

O Alpha deverá permitir que um usuário consiga:

- Criar uma conta.
- Fazer login.
- Gerenciar seu perfil.
- Visualizar suas categorias.
- Criar quests.
- Editar quests.
- Concluir quests.
- Receber XP.
- Evoluir de nível.
- Consultar seu progresso.

Ao final do Alpha, o ciclo principal de progressão deverá estar completo.

---

# 🧩 Escopo do Alpha

## ✅ Incluído

### Infraestrutura

- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- Docker
- JWT
- Testes automatizados

---

### Sistema de Usuários

- Cadastro
- Login
- Perfil
- Autenticação

---

### Sistema de Quests

- Criar
- Editar
- Excluir
- Concluir
- Histórico básico

---

### Sistema de XP

- Ganho de XP
- XP Geral
- XP por Categoria
- Regras de distribuição

---

### Sistema de Categorias

- Vanguard
- Codex
- Soul
- Treasury
- Creation

---

### Sistema de Progressão

- Níveis
- Curva de XP
- Evolução

---

# ❌ Fora do Escopo

As funcionalidades abaixo ficam oficialmente adiadas para versões futuras.

- Buffs
- Debuffs
- Momentum
- Contratos
- Inventário
- Baús
- Conquistas
- Títulos
- Eventos
- Notificações
- Dashboard avançado
- Recomendações
- Multiplayer
- Aplicativo mobile

---

# 🏗️ Ordem de Implementação

## Épico I

Infraestrutura

- Backend
- Banco
- Docker
- Configuração
- Testes

---

## Épico II

Usuários

- Cadastro
- Login
- Perfil

---

## Épico III

Categorias

- Estrutura
- Regras
- Associação com usuários

---

## Épico IV

Quests

- CRUD
- Validação
- Conclusão

---

## Épico V

XP

- Distribuição
- Progressão
- Categorias

---

## Épico VI

Integração

- Fluxo completo
- Ajustes
- Refatorações

---

# 📦 Arquitetura dos Casos de Uso

Todo caso de uso seguirá obrigatoriamente a estrutura abaixo.

```text
HTTP Request
      │
      ▼
Router
      │
      ▼
Parser
      │
      ▼
Command / Query
      │
      ▼
Dispatcher
      │
      ▼
Handler
      │
      ▼
Domain
      │
      ▼
Repository
      │
      ▼
Database
```

Nenhum módulo poderá ignorar esse fluxo sem justificativa técnica documentada.

---

# ✅ Critérios de Conclusão do Alpha

O Alpha será considerado concluído quando:

- Todos os Épicos forem entregues.
- Todos os testes principais estiverem passando.
- A documentação estiver atualizada.
- O fluxo completo de progressão estiver funcional.
- O sistema puder ser executado por qualquer desenvolvedor seguindo apenas a documentação do repositório.

---

# 📈 Próximos Passos (Beta)

Após a conclusão do Alpha, o desenvolvimento seguirá para o Beta, adicionando:

- Buffs
- Debuffs
- Momentum
- Contratos
- Inventário
- Baús
- Conquistas
- Títulos
- Eventos
- Estatísticas
- Dashboard

---

# 🔗 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Roadmap Técnico]]
- [[Estrutura de Pastas]]
- [[Backend]]
- [[API]]
- [[Banco de Dados]]

---

# 📝 Observações

O Alpha representa a fundação técnica do ARISE.

Novas funcionalidades só poderão ser adicionadas ao escopo mediante revisão do planejamento e atualização deste documento.

O objetivo principal não é entregar todas as mecânicas idealizadas, mas construir uma base robusta, limpa e preparada para evoluções futuras.