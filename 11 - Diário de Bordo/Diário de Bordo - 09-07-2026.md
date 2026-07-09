# 📖 Diário de Bordo

## 🎯 Objetivo da sessão

O que eu queria fazer hoje?

- Revisar e consolidar a documentação arquitetural do ARISE.
    
- Validar se a estrutura definida para o backend Alpha estava coerente.
    
- Corrigir possíveis inconsistências antes do início da implementação.
    

---

## ✅ O que foi concluído

- Revisão completa dos documentos da pasta `06 - Engenharia`.
    
- Validação da arquitetura geral baseada em camadas:
    
    - Presentation;
        
    - Application;
        
    - Domain;
        
    - Infrastructure.
        
- Revisão dos padrões de:
    
    - Commands;
        
    - Queries;
        
    - Dispatcher;
        
    - Handlers;
        
    - Repositories;
        
    - Application Services;
        
    - Domain Events;
        
    - Request Flow.
        
- Identificadas e corrigidas inconsistências arquiteturais.
    
- Criado o documento `Application Layer.md` para centralizar a visão da camada Application.
    
- Revisado o documento `Domain Events.md`, ajustando sua responsabilidade para permanecer dentro do Domain.
    
- Definida uma separação mais clara entre:
    
    - Eventos do Domain;
        
    - Reações da Application;
        
    - Implementações da Infrastructure.
        

---

## ❌ O que ficou pendente

- Iniciar a implementação do backend Alpha.

---

## 🧠 Decisões tomadas

- A arquitetura seguirá o modelo orientado a domínio, mantendo o Domain independente de frameworks e infraestrutura.
    
- A organização da Application seguirá o modelo por feature, mantendo Commands, Queries, Handlers e Services próximos de seus contextos.
    
- Domain Events pertencem ao Domain, enquanto seus consumidores e reações pertencem à Application.
    
- Repositories serão tratados como contratos separados da implementação concreta da infraestrutura.
    
- A implementação do backend seguirá uma construção incremental começando pelo Alpha.
    

---

## 💡 Ideias que surgiram

- Criar uma documentação específica para a visão geral da Application Layer.
    
- Manter eventos preparados para uma futura evolução assíncrona utilizando filas ou sistemas de mensageria.
    
- Continuar priorizando clareza arquitetural antes de adicionar funcionalidades.
    
- Usar a arquitetura como guia para decidir onde cada nova funcionalidade deve existir.
    

---

## 🐞 Problemas encontrados

- Alguns documentos possuíam pequenas diferenças na organização das pastas da Application.
    
- Existia uma ambiguidade sobre a responsabilidade de criação e publicação dos Domain Events.
    
- A localização dos contratos de Repository precisava de uma decisão arquitetural mais clara.
    
- Alguns fluxos poderiam causar acoplamento caso não fossem ajustados antes da implementação.
    

---

## 📚 O que aprendi hoje

- Uma arquitetura bem documentada reduz decisões erradas durante a implementação.
    
- Nem todo componente que coordena algo deve possuir regras de negócio.
    
- Separar intenção, execução e regra de negócio deixa o sistema mais previsível.
    
- Domain Events são fatos ocorridos no sistema, não comandos ou solicitações.
    
- A organização inicial do projeto influencia diretamente a facilidade de manutenção futura.
    

---

## 🚀 Próxima sessão

Primeira tarefa:
Iniciar o planejamento técnico da implementação do Alpha do ARISE, preparando a estrutura inicial do backend.

Segunda tarefa:

Criar a base inicial do projeto backend seguindo a arquitetura definida:

- Application;
    
- Domain;
    
- Infrastructure;
    
- API.
