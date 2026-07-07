# 🗄 Modelo Conceitual

## Objetivo

Este documento define todas as entidades existentes no universo do ARISE e seus relacionamentos.

Ele representa a estrutura lógica do sistema e servirá como base para a modelagem do banco de dados e implementação futura.

---

# Entidades

## 👤 Player

Representa o usuário do sistema.

Possui:

- XP Geral
    
- Nível Geral
    
- Categorias
    
- Momentum
    
- Status
    
- Buffs
    
- Debuffs
    
- Títulos
    
- Contratos
    
- Histórico
    
- Estatísticas
    

---

## 📜 Quest

Representa um objetivo que pode ser concluído pelo jogador.

Possui:

- Nome
    
- Descrição
    
- Tipo
    
- Dificuldade
    
- Rank
    
- XP Base
    
- Categorias
    
- Prazo
    
- Estado
    
- Recompensas
    

---

## 📚 Categoria

Representa uma área de evolução.

Possui:

- XP
    
- Nível
    
- Afinidade
    
- Buffs
    
- Debuffs
    

---

## ❤️ Afinidade

Representa a prática recente do jogador em uma categoria.

---

## ⚡ Momentum

Representa a consistência recente do jogador.

---

## ✨ Buff

Representa um estado positivo temporário.

---

## ☠ Debuff

Representa um estado negativo temporário.

---

## 🏷 Status

Representa a condição atual do jogador.

---

## 🏅 Título

Representa conquistas permanentes da jornada.

---

## 📜 Contrato

Representa desafios opcionais de alto risco e alta recompensa.

---

## 📖 Histórico

Armazena todos os acontecimentos relevantes da jornada do jogador.

---

# Relacionamentos

Player

→ possui Categorias

→ realiza Quests

→ aceita Contratos

→ recebe Buffs

→ recebe Debuffs

→ possui Momentum

→ possui Status

→ conquista Títulos

→ gera Histórico

---

Quest

→ pertence a Categorias

→ concede XP

→ altera Afinidade

→ altera Momentum

→ gera Recompensas

---

Categoria

→ possui Afinidade

→ influencia Status

→ influencia Progressão

---

## 🔗 Referências ajustadas

### Arquitetura

- [[Arquitetura do Universo]]