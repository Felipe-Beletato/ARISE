# 🔄 Fluxo de Desenvolvimento

## Objetivo

Este documento descreve o processo utilizado para desenvolver o ARISE.

O objetivo é manter organização, rastreabilidade e qualidade durante a evolução do projeto.

---

# Fluxo Geral

Documentação  
↓  
Arquitetura  
↓  
Implementação  
↓  
Testes  
↓  
Commit  
↓  
Push  
↓  
Revisão  
↓  
Merge


---

# Branches

## main

Contém versões estáveis do projeto.

---

## develop

Branch principal de desenvolvimento.

Novas funcionalidades são integradas aqui antes de uma versão oficial.

---

## feature/*

Utilizada para desenvolvimento de novas funcionalidades.

Exemplo:

feature/quest-system  
feature/xp-system  
feature/authentication

---  
  
## docs/*  
  
Utilizada para alterações relacionadas à documentação.  
  
Exemplo:

docs/project-organization


---

# Commits

Cada commit deve representar uma alteração lógica e completa.

Exemplo:

feat(quest): implement quest completion

docs(engineering): document development workflow

