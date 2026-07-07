# 🔄 Máquina de Estados

## Objetivo

Este documento define todos os estados possíveis do jogador dentro do ARISE, bem como as condições necessárias para entrar, permanecer e sair de cada um deles.

---

# Filosofia

Os estados representam a condição atual do jogador.

Eles não medem habilidade, mas refletem o comportamento recente, permitindo que o sistema responda de forma dinâmica às mudanças na rotina.

---

# Estrutura

Cada estado possui:

- Nome
    
- Descrição
    
- Condições de Entrada
    
- Condições de Permanência
    
- Condições de Saída
    
- Prioridade
    

---

# Estados Iniciais

## 🟢 Normal

Estado padrão do jogador.

---

## 🟡 Oscilando

O jogador apresenta perda de consistência.

Possíveis gatilhos:

- Quests não concluídas.
    
- Queda de Momentum.
    
- Baixa Afinidade.
    

---

## 🔴 Instável

O jogador permanece há vários dias com desempenho inconsistente.

Pode gerar Debuffs adicionais.

---

## ⚫ Caótico

Estado crítico.

Representa abandono prolongado ou grande perda de consistência.

---

## 🔥 Disciplinado

Mantém boa consistência durante vários dias.

---

## 💎 Em Chamas

Alta consistência.

Momentum elevado.

Poucos Debuffs.

---

## ⭐ Lendário

Estado reservado para jogadores que mantêm excelência por longos períodos.

---

# Regras Gerais

- Apenas um Status pode estar ativo por vez.
    
- Estados possuem prioridade.
    
- Mudanças não ocorrem instantaneamente.
    
- Toda transição deve respeitar a persistência definida em [[Sistema de Buffs e Debuffs]].
    

---

# Fluxo Simplificado

Normal

↓

Oscilando

↓

Instável

↓

Caótico

ou

Normal

↓

Disciplinado

↓

Em Chamas

↓

Lendário

---

## 🔗 Referências ajustadas

### Arquitetura

- [[Modelo Conceitual]]
- [[Arquitetura do Universo]]

---

### Sistemas (apenas estado central do jogador)

- [[Sistema de Momentum]]