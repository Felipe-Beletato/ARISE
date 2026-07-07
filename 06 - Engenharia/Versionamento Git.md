# 🌳 Versionamento Git

## Objetivo

Este documento define o fluxo de versionamento utilizado durante o desenvolvimento do ARISE.

Seu objetivo é manter um histórico limpo, facilitar a manutenção do projeto e tornar a evolução do software facilmente compreensível.

---

# Filosofia

Cada commit representa **uma alteração lógica, completa e funcional**.

O histórico do Git faz parte da documentação do projeto e deve refletir a evolução do sistema.

Sempre que possível, o projeto deve permanecer compilando e funcionando após cada commit.

---

# Estrutura de Branches

## main

Representa versões estáveis.

Nunca deve conter código incompleto.

Todo merge para a `main` deve representar uma versão utilizável.

---

## develop

Branch principal de desenvolvimento.

Recebe as funcionalidades concluídas antes de serem promovidas para a `main`.

---

## feature/*

Cada funcionalidade possui sua própria branch.

Exemplos:

```text
feature/quest-system
feature/momentum
feature/contracts
feature/authentication
feature/dashboard
feature/mobile-home
```

Após a conclusão da funcionalidade:

- Merge para `develop`
    
- Exclusão da branch
    

---

# Fluxo de Desenvolvimento

```text
main

↓

develop

↓

feature/nova-funcionalidade

↓

develop

↓

main
```

---

# Conventional Commits

Todos os commits seguirão o padrão Conventional Commits.

## feat

Nova funcionalidade.

Exemplo:

```text
feat(domain): implement quest completion workflow
```

---

## fix

Correção de erro.

```text
fix(api): correct xp calculation
```

---

## docs

Alterações na documentação.

```text
docs(engineering): add git workflow
```

---

## refactor

Melhoria interna sem alterar comportamento.

```text
refactor(dispatcher): simplify event routing
```

---

## test

Adição ou alteração de testes.

```text
test(domain): add quest service tests
```

---

## chore

Infraestrutura e manutenção.

```text
chore(project): configure docker compose
```

---

# Quando fazer um Commit

Um commit deve ser realizado quando:

- Uma funcionalidade estiver completa.
    
- Uma correção estiver finalizada.
    
- Uma configuração importante for concluída.
    
- Um documento relevante for criado ou atualizado.
    

Evitar commits contendo funcionalidades parcialmente implementadas.

---

# Antes de iniciar alterações grandes

Sempre criar um commit antes de iniciar uma refatoração extensa.

Isso permite retornar rapidamente para um estado estável caso seja necessário.

---

# Frequência dos Commits

Preferir vários commits pequenos e organizados em vez de poucos commits gigantes.

Cada commit deve possuir um propósito claro.

---

# Versionamento

As versões do projeto seguirão o padrão SemVer.

Formato:

```text
MAJOR.MINOR.PATCH
```

Exemplos:

```text
0.1.0
0.2.0
0.3.0
1.0.0
```

---

# Releases previstas

## Alpha

Validação das mecânicas principais.

Exemplo:

```text
v0.1.0-alpha
```

---

## Beta

Sistema completo.

Foco em estabilidade e testes.

Exemplo:

```text
v0.9.0-beta
```

---

## Stable

Primeira versão pública.

```text
v1.0.0
```

---

# Boas práticas

- Commits pequenos e objetivos.
    
- Mensagens claras e em inglês.
    
- Não enviar código quebrado para `develop`.
    
- Não trabalhar diretamente na `main`.
    
- Atualizar a documentação sempre que uma mudança estrutural ocorrer.
    

---

## 🔗 Referências

### Engenharia

- [[Roadmap do Alpha]]
    
- [[Estrutura do Projeto]]
    
- [[CI-CD]]
    

### Planejamento

- [[Plano de Desenvolvimento]]