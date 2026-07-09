# 🗄️ Repositories

> Este documento define o padrão de Repositories utilizado pela camada **Application** do ARISE.

---

# 🎯 Objetivo

Repositories são responsáveis por abstrair o acesso aos dados da aplicação.

Eles funcionam como um contrato entre o Domínio e a Infraestrutura, permitindo que as regras de negócio permaneçam completamente independentes da forma como os dados são armazenados.

---

# 🧠 Conceito

O Repository responde apenas uma pergunta:

> **"Como obter ou persistir entidades?"**

Ele nunca responde:

> **"Como essas entidades se comportam?"**

Essa responsabilidade pertence ao Domínio.

---

# 🏛️ Filosofia

O Domínio não conhece:

- PostgreSQL;
- SQLite;
- MongoDB;
- Redis;
- SQLAlchemy;
- APIs externas.

Ele conhece apenas interfaces de Repository.

Isso garante baixo acoplamento e facilita testes e futuras mudanças de infraestrutura.

---

# 📌 Responsabilidades

Um Repository deve:

- recuperar entidades;
- persistir alterações;
- remover entidades;
- realizar consultas específicas quando necessário.

---

# ❌ Não é responsabilidade

Um Repository nunca deve:

- implementar regras de negócio;
- calcular XP;
- calcular níveis;
- validar Quests;
- gerar Rewards;
- conhecer FastAPI;
- emitir respostas HTTP.

---

# 🏗️ Fluxo Geral

```text
Handler

↓

Repository

↓

Infraestrutura

↓

Banco de Dados
```

O Handler solicita dados.

O Repository decide como obtê-los.

---

# 📦 Interface

Os Repositories devem ser definidos como contratos.

Exemplo conceitual:

```python
class PlayerRepository(Protocol):

    async def get_by_id(...):

        ...

    async def save(...):

        ...

    async def delete(...):

        ...
```

O Domínio conhece apenas essa interface.

---

# 🔄 Implementações

A implementação concreta pertence à Infraestrutura.

Exemplo:

```text
PlayerRepository

↓

SQLAlchemyPlayerRepository
```

Ou futuramente:

```text
PlayerRepository

↓

MongoPlayerRepository
```

Sem alterar qualquer regra de negócio.

---

# 📂 Organização

Os contratos ficam próximos da Application.

As implementações ficam na Infrastructure.

```text
domain/

    repositories/

        player_repository.py
    
application/

    repositories/

        player_repository.py

        quest_repository.py

        statistics_repository.py
```

```text
infrastructure/

    repositories/

        sqlalchemy_player_repository.py```
```

Cada Repository poderá adicionar métodos específicos quando necessário.

---

# ⚠️ Regras

Um Repository deve trabalhar apenas com seu agregado principal.

Exemplo:

```text
PlayerRepository

↓

Player
```

Não deve manipular diretamente:

- Quest;
- Reward;
- Statistics.

Cada agregado possui seu próprio Repository.

---

# 🧪 Testes Esperados

Os testes devem validar:

- recuperação correta;
- persistência;
- remoção;
- tratamento de entidades inexistentes.

As regras de negócio permanecem testadas no Domínio.

---

# 🗂️ Estrutura de Código

```text
application/

    repositories/

        player_repository.py

        quest_repository.py

        progression_repository.py

        statistics_repository.py
```

```text
infrastructure/

    persistence/

        repositories/

            sqlalchemy_player_repository.py

            sqlalchemy_quest_repository.py

            sqlalchemy_statistics_repository.py
```

---

# 🔗 Relacionamentos

Relaciona-se com:

- [[Handlers]]
- [[Domain]]
- [[Infraestrutura]]
- [[Request Flow]]

---

# 📚 Documentos Relacionados

- [[Arquitetura Geral]]
- [[Modelo de Domínio]]

---

# ✅ Considerações Finais

Repositories representam a fronteira entre as regras de negócio e a persistência.

O Domínio nunca deve conhecer detalhes de banco de dados.

Essa separação permite que a infraestrutura evolua independentemente das regras do jogo, mantendo o ARISE flexível, testável e preparado para futuras mudanças tecnológicas.