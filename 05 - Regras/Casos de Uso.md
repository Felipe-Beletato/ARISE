# 📋 Casos de Uso

## Objetivo

Este documento descreve os principais cenários de interação entre o jogador e os sistemas do ARISE.

Seu objetivo é definir o comportamento esperado do sistema diante das ações do jogador, servindo como ponte entre as regras de negócio e a futura implementação.

---

# Filosofia

Todo comportamento do ARISE deve ser previsível, consistente e reproduzível.

Cada ação realizada pelo jogador gera uma sequência de eventos que percorre diversos sistemas, mantendo a integridade dos dados e a coerência da progressão.

---

# Caso de Uso 01 — Concluir uma Quest

### Evento

O jogador conclui uma Quest.

### Fluxo

1. Validar a conclusão da Quest.
    
2. Calcular o XP Base.
    
3. Aplicar modificadores.
    
4. Distribuir XP Geral e XP das Categorias.
    
5. Atualizar Afinidade.
    
6. Atualizar Momentum.
    
7. Verificar Buffs.
    
8. Verificar Debuffs.
    
9. Atualizar Status.
    
10. Verificar Títulos.
    
11. Registrar no Histórico.
    

---

# Caso de Uso 02 — Falhar uma Quest

### Evento

Uma Quest deixa de ser concluída dentro do prazo.

### Fluxo

1. Registrar falha.
    
2. Atualizar Histórico.
    
3. Avaliar redução de Momentum.
    
4. Verificar aplicação de Debuffs.
    
5. Atualizar Status.
    

---

# Caso de Uso 03 — Aceitar um Contrato

### Evento

O jogador aceita um Contrato.

### Fluxo

1. Registrar aceitação.
    
2. Ativar Contrato.
    
3. Iniciar prazo.
    
4. Bloquear alterações permitidas.
    
5. Aguardar conclusão ou falha.
    

---

# Caso de Uso 04 — Completar um Contrato

### Evento

Contrato concluído.

### Fluxo

1. Validar requisitos.
    
2. Conceder recompensas.
    
3. Atualizar XP.
    
4. Atualizar Histórico.
    
5. Verificar conquistas.
    

---

# Caso de Uso 05 — Permanecer muito tempo sem praticar uma Categoria

### Evento

Afinidade abaixo do limite.

### Fluxo

1. Detectar baixa atividade.
    
2. Aplicar Debuff correspondente.
    
3. Atualizar Status.
    
4. Registrar Histórico.
    

---

# Caso de Uso 06 — Recuperar consistência

### Evento

Jogador mantém sequência positiva.

### Fluxo

1. Atualizar Afinidade.
    
2. Atualizar Momentum.
    
3. Verificar remoção de Debuffs.
    
4. Atualizar Status.
    
5. Registrar Histórico.
    

---

# Observações

Novos Casos de Uso deverão ser adicionados sempre que um novo sistema alterar significativamente o comportamento do ARISE.

---

## 🔗 Referências ajustadas

### Arquitetura

- [[Fluxo de Dados]]
- [[Arquitetura do Universo]]

---

### Sistemas (somente núcleo de interação)

- [[Sistema de Quests]]
- [[Sistema de Contratos]]