# 🔄 Fluxo de Desenvolvimento

> Este documento define o processo utilizado para desenvolver o ARISE, garantindo organização, rastreabilidade e qualidade durante toda a evolução do projeto.

---

# 🎯 Objetivo

O objetivo deste fluxo é estabelecer um padrão de desenvolvimento que mantenha o projeto organizado desde a concepção de uma funcionalidade até sua integração ao código principal.

Toda nova implementação deve seguir este processo.

---

# 🧭 Fluxo Geral

```text
Ideia

↓

Planejamento

↓

Documentação

↓

Decisão Arquitetural

↓

Branch

↓

Implementação

↓

Testes

↓

Commit

↓

Pull Request

↓

Revisão

↓

Merge

↓

Atualização da Documentação
```

---

# 🧠 1. Planejamento

Antes de iniciar uma nova funcionalidade, deve existir clareza sobre:

- objetivo;
- impacto no sistema;
- componentes envolvidos;
- possíveis alterações arquiteturais.

Nenhuma funcionalidade relevante deve começar diretamente pelo código.

---

# 📚 2. Documentação

A documentação deve acompanhar o desenvolvimento.

Antes da implementação, devem ser definidos:

- comportamento esperado;
- regras de negócio;
- decisões técnicas;
- impactos em outros módulos.

Documentação não é uma etapa final.

Ela faz parte da engenharia do projeto.

---

# 🏛️ 3. Decisão Arquitetural

Antes de criar novos componentes, deve ser definido onde eles pertencem.

Perguntas importantes:

```
Isso é uma regra do jogo?

↓

Domain


Isso é um caso de uso?

↓

Handler


Isso é um processo?

↓

Application Service


Isso é detalhe técnico?

↓

Infrastructure
```

Toda decisão relevante deve respeitar:

- [[Princípios da Engenharia]]
- [[Arquitetura Geral]]

---

# 🌿 Branches

O desenvolvimento utiliza o seguinte modelo:

---

# main

Responsável pelas versões estáveis do projeto.

Não recebe alterações diretamente.

---

# develop

Branch principal de desenvolvimento.

Novas funcionalidades são integradas aqui antes de versões oficiais.

---

# feature/*

Utilizada para desenvolvimento de novas funcionalidades.

Exemplos:

```text
feature/quest-system

feature/xp-progression

feature/authentication
```

---

# docs/*

Utilizada para alterações exclusivamente relacionadas à documentação.

Exemplo:

```text
docs/project-organization
```

---

# fix/*

Utilizada para correção de problemas.

Exemplo:

```text
fix/login-validation
```

---

# 🛠️ Implementação

Durante a implementação, o código deve seguir:

- [[Princípios da Engenharia]]
- [[Arquitetura Geral]]
- [[Request Flow]]

A implementação deve respeitar a separação:

```text
Presentation

↓

Application

↓

Domain

↓

Infrastructure
```

---

# 🧪 Testes

Toda funcionalidade deve possuir testes adequados.

Os testes devem validar:

## Domain

- regras de negócio;
- cálculos;
- estados;
- comportamentos.

---

## Application

- execução dos casos de uso;
- comunicação entre componentes;
- eventos.

---

## Infrastructure

- integração com serviços externos;
- persistência;
- configurações.

---

# 📝 Commits

Cada commit deve representar uma alteração lógica e completa.

O projeto utiliza Conventional Commits.

Formato:

```text
tipo(contexto): descrição
```

---

# Tipos utilizados

## feat

Nova funcionalidade.

Exemplo:

```text
feat(quest): implement quest completion
```

---

## fix

Correção de problema.

Exemplo:

```text
fix(auth): correct token validation
```

---

## docs

Alteração de documentação.

Exemplo:

```text
docs(engineering): update architecture documentation
```

---

## refactor

Melhoria estrutural sem alterar comportamento.

Exemplo:

```text
refactor(domain): reorganize progression module
```

---

## test

Alterações relacionadas a testes.

Exemplo:

```text
test(quest): add completion tests
```

---

## chore

Tarefas de manutenção.

Exemplo:

```text
chore(project): update dependencies
```

---

# 🔍 Pull Requests

Toda alteração relevante deve passar por Pull Request.

Um Pull Request deve conter:

- objetivo da alteração;
- arquivos modificados;
- impacto no sistema;
- testes realizados.

---

# ✅ Revisão

Antes do merge, verificar:

- código segue a arquitetura;
- testes passam;
- documentação está atualizada;
- não existem responsabilidades misturadas.

---

# 🔀 Merge

Após aprovação, a alteração pode ser integrada.

Fluxo:

```text
feature/*

↓

develop

↓

main
```

---

# 📖 Atualização da Documentação

Após mudanças arquiteturais:

- atualizar documentos relacionados;
- atualizar diagramas;
- registrar decisões importantes.

Código e documentação devem evoluir juntos.

---

# 🏗️ Fluxo de uma Feature Completa

Exemplo:

```text
Nova funcionalidade

↓

Criar documento técnico

↓

Definir arquitetura

↓

Criar branch

↓

Implementar Domain

↓

Criar Handler

↓

Criar testes

↓

Commit

↓

Pull Request

↓

Revisão

↓

Merge
```

---

# 🔗 Documentos Relacionados

- [[Princípios da Engenharia]]
- [[Arquitetura Geral]]
- [[Request Flow]]
- [[Domain Events]]
- [[Git Workflow]]

---

# ✅ Considerações Finais

O fluxo de desenvolvimento existe para reduzir decisões improvisadas e garantir que o crescimento do ARISE aconteça de forma organizada.

A velocidade de desenvolvimento é importante, mas a consistência é o que permite que o projeto continue evoluindo no longo prazo.

Cada funcionalidade deve nascer de uma decisão consciente, ser implementada seguindo a arquitetura e permanecer documentada para futuras evoluções.