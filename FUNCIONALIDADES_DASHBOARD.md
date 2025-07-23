# Documentação Funcional do Dashboard - PremiAds

Este documento detalha as funcionalidades de cada tela presente nos dashboards dos diferentes tipos de usuários da plataforma PremiAds: Administrador, Anunciante e Usuário Comum. O objetivo é servir como um guia para futuras refatorações e desenvolvimento.

---

## 1. Dashboard do Administrador

O painel do administrador é o centro de controle da plataforma, permitindo o gerenciamento completo de todos os aspectos do sistema.

### 1.1. Dashboard

- **Descrição:** A tela inicial do administrador. Apresenta uma visão geral e consolidada da plataforma.
- **Funcionalidades:**
    - **Estatísticas Chave:** Exibe métricas vitais como número total de usuários, anunciantes ativos, campanhas em andamento e submissões pendentes.
    - **Gráficos de Atividade:** Mostra gráficos sobre o crescimento de usuários, engajamento em missões e transações recentes.
    - **Atalhos Rápidos:** Links diretos para as áreas mais importantes, como moderação de conteúdo e gerenciamento de usuários.
    - **Logs de Atividade Recente:** Um feed com as últimas ações importantes realizadas no sistema.

### 1.2. Usuários

- **Descrição:** Área dedicada ao gerenciamento de todos os usuários da plataforma (comuns e anunciantes).
- **Funcionalidades:**
    - **Listagem de Usuários:** Tabela com todos os usuários, com informações como nome, email, tipo de perfil, status (ativo, banido) e data de cadastro.
    - **Busca e Filtros:** Ferramentas para encontrar usuários específicos por nome, email ou status.
    - **Ações de Gerenciamento:**
        - **Visualizar Perfil:** Acessa o perfil detalhado do usuário.
        - **Editar Informações:** Altera dados cadastrais.
        - **Banir/Desbanir:** Bloqueia ou desbloqueia o acesso de um usuário.
        - **Resetar Senha:** Envia um link de redefinição de senha.

### 1.3. Rifas

- **Descrição:** Seção para gerenciar a distribuição e o controle das rifas (créditos) do sistema.
- **Funcionalidades:**
    - **Controle de Pacotes:** Criação e edição de pacotes de rifas que os anunciantes podem comprar.
    - **Histórico de Compras:** Log de todas as transações de compra de rifas.
    - **Distribuição Manual:** Ferramenta para adicionar ou remover rifas de um usuário específico (para bônus, correções, etc.).

### 1.4. Regras

- **Descrição:** Configuração das regras e parâmetros de funcionamento da plataforma.
- **Funcionalidades:**
    - **Regras de Missões:** Define os tipos de missões disponíveis, recompensas padrão, etc.
    - **Regras de Sorteios:** Configura a mecânica dos sorteios, como custo em rifas e frequência.
    - **Termos de Serviço:** Editor para atualizar os termos de uso e a política de privacidade.

### 1.5. Moderação

- **Descrição:** Central de moderação para todo o conteúdo gerado pelos usuários.
- **Funcionalidades:**
    - **Fila de Submissões:** Exibe todas as submissões de missões pendentes de aprovação.
    - **Análise de Conteúdo:** Permite visualizar o conteúdo enviado (fotos, vídeos, textos) para aprovação ou rejeição.
    - **Feedback para Usuário:** Ferramenta para enviar uma justificativa em caso de rejeição.
    - **Histórico de Moderação:** Log de todas as decisões de moderação.

### 1.6. Sorteios

- **Descrição:** Gerenciamento completo dos sorteios realizados na plataforma.
- **Funcionalidades:**
    - **Criação de Sorteios:** Ferramenta para criar novos sorteios, definindo prêmios, datas e regras.
    - **Sorteios Ativos:** Lista os sorteios em andamento, com dados de participação.
    - **Realização do Sorteio:** Botão para executar o sorteio de forma automatizada.
    - **Histórico de Vencedores:** Registro de todos os sorteios passados e seus ganhadores.

### 1.7. Notificações

- **Descrição:** Ferramenta para enviar notificações em massa ou segmentadas para os usuários.
- **Funcionalidades:**
    - **Criar Notificação:** Editor para redigir e agendar o envio de notificações.
    - **Segmentação:** Permite enviar para todos, apenas para anunciantes ou apenas para usuários comuns.
    - **Histórico de Envios:** Log de todas as notificações enviadas.

### 1.8. Documentação

- **Descrição:** Acesso à documentação técnica e manual de uso do sistema para a equipe de administração.
- **Funcionalidades:**
    - **Guias e Tutoriais:** Manuais sobre como operar cada módulo da plataforma.
    - **Informações Técnicas:** Detalhes sobre a arquitetura do sistema e integrações.

### 1.9. Configurações

- **Descrição:** Configurações gerais da conta de administrador e da plataforma.
- **Funcionalidades:**
    - **Gerenciamento de Contas Admin:** Adicionar ou remover outros administradores.
    - **Configurações de API:** Gerenciamento de chaves de API para serviços integrados (Stripe, etc.).
    - **Manutenção do Sistema:** Ferramentas para limpeza de cache, backups, etc.

---

## 2. Dashboard do Anunciante

Painel focado nas necessidades dos anunciantes, permitindo a criação e o gerenciamento de suas campanhas de marketing.

### 2.1. Dashboard

- **Descrição:** Tela inicial do anunciante, com um resumo de suas atividades e performance.
- **Funcionalidades:**
    - **Métricas de Performance:** Visão geral do desempenho das campanhas: alcance, engajamento, ROI.
    - **Saldo de Rifas:** Exibe o saldo atual de rifas para usar em campanhas.
    - **Atividade Recente:** Últimas submissões de usuários em suas campanhas.
    - **Atalhos:** Acesso rápido para criar uma nova campanha ou ver as análises.

### 2.2. Campanhas

- **Descrição:** Área para criar e gerenciar todas as campanhas (missões).
- **Funcionalidades:**
    - **Listagem de Campanhas:** Tabela com todas as campanhas criadas, com status (ativa, pendente, encerrada).
    - **Formulário de Criação:** Passo a passo para criar uma nova campanha, definindo tipo, regras, recompensas e público-alvo.
    - **Edição e Gerenciamento:** Opções para pausar, editar ou encerrar uma campanha.
    - **Visualizar Desempenho:** Acesso aos dados detalhados de uma campanha específica.

### 2.3. Cashbacks

- **Descrição:** Gerenciamento de campanhas de cashback.
- **Funcionalidades:**
    - **Criação de Campanhas de Cashback:** Define o percentual de cashback, produtos/serviços elegíveis e duração.
    - **Acompanhamento:** Monitora o volume de cashbacks gerados e resgatados.
    - **Configuração de Limites:** Estabelece regras, como valor máximo de cashback por usuário.

### 2.4. Validação de Cupom

- **Descrição:** Ferramenta para validar cupons apresentados por usuários.
- **Funcionalidades:**
    - **Leitor de QR Code / Inserção Manual:** Permite validar um cupom escaneando-o ou digitando o código.
    - **Histórico de Validações:** Registro de todos os cupons validados.

### 2.5. Moderação

- **Descrição:** Análise e aprovação das submissões de usuários para as campanhas do anunciante.
- **Funcionalidades:**
    - **Fila de Aprovação:** Lista de submissões pendentes específicas de suas campanhas.
    - **Aprovar/Rejeitar:** Ferramentas para moderar o conteúdo enviado pelos usuários.

### 2.6. Análises

- **Descrição:** Relatórios detalhados sobre o desempenho das campanhas.
- **Funcionalidades:**
    - **Dados Demográficos:** Gráficos sobre o público alcançado (idade, gênero, localização).
    - **Engajamento:** Análise de quais campanhas geram mais interação.
    - **Exportar Relatórios:** Opção para baixar os dados em formatos como CSV ou PDF.

### 2.7. CRM

- **Descrição:** Ferramentas de relacionamento com os clientes que participam de suas campanhas.
- **Funcionalidades:**
    - **Listagem de Participantes:** Mostra os usuários que interagiram com suas campanhas.
    - **Dados de Contato (com consentimento):** Acesso a informações para contato, dependendo das permissões do usuário.
    - **Segmentação:** Criação de listas de usuários com base no comportamento.

### 2.8. Rifas

- **Descrição:** Compra e gerenciamento de rifas (créditos).
- **Funcionalidades:**
    - **Comprar Rifas:** Interface para adquirir pacotes de rifas usando diferentes métodos de pagamento.
    - **Histórico de Transações:** Extrato de todas as compras e usos de rifas.

### 2.9. Notificações

- **Descrição:** Central de notificações relacionadas às suas atividades.
- **Funcionalidades:**
    - **Alertas:** Avisos sobre novas submissões, campanhas perto de expirar, etc.
    - **Configurações de Notificação:** Permite escolher quais alertas deseja receber.

### 2.10. Perfil

- **Descrição:** Gerenciamento das informações do perfil do anunciante.
- **Funcionalidades:**
    - **Dados da Empresa:** Edição de nome, logo, descrição e informações de contato.
    - **Configurações de Faturamento:** Gerenciamento de dados de pagamento.

### 2.11. Configurações

- **Descrição:** Configurações gerais da conta.
- **Funcionalidades:**
    - **Alterar Senha:** Modificação da senha de acesso.
    - **Integrações:** Configuração de integrações com outras ferramentas (se aplicável).

---

## 3. Dashboard do Usuário Comum

Painel projetado para o usuário final, focado em participar de missões e ganhar recompensas.

### 3.1. Dashboard

- **Descrição:** Tela inicial do usuário, com um resumo de seu progresso e atividades disponíveis.
- **Funcionalidades:**
    - **Resumo de Pontos:** Exibe o total de pontos/rifas acumulados.
    - **Missões em Destaque:** Sugestões de novas missões para participar.
    - **Progresso de Nível:** Barra de experiência e nível atual do usuário.
    - **Atividade Recente:** Histórico das últimas missões concluídas e recompensas ganhas.

### 3.2. Missões

- **Descrição:** Lista de todas as missões disponíveis para o usuário participar.
- **Funcionalidades:**
    - **Explorar Missões:** Navegação por todas as campanhas ativas, com filtros por tipo ou recompensa.
    - **Página da Missão:** Detalhes de uma missão específica, com instruções e botão para participar.
    - **Enviar Submissão:** Interface para enviar o conteúdo solicitado na missão (foto, vídeo, etc.).

### 3.3. Recompensas

- **Descrição:** Área para visualizar e resgatar as recompensas ganhas.
- **Funcionalidades:**
    - **Catálogo de Recompensas:** Lista de prêmios disponíveis para troca com pontos.
    - **Meus Cupons:** Visualização dos cupons de desconto e cashback adquiridos.
    - **Histórico de Resgates:** Registro de todas as recompensas já utilizadas.

### 3.4. Sorteios

- **Descrição:** Participação nos sorteios da plataforma.
- **Funcionalidades:**
    - **Sorteios Ativos:** Lista dos sorteios em que o usuário pode entrar.
    - **Comprar Bilhetes:** Interface para usar rifas para adquirir bilhetes de sorteio.
    - **Meus Bilhetes:** Visualização dos números de bilhete em cada sorteio.
    - **Resultados:** Anúncio dos vencedores dos sorteios anteriores.

### 3.5. Indicações

- **Descrição:** Programa de indicação para convidar amigos.
- **Funcionalidades:**
    - **Link de Convite:** Geração de um link exclusivo para compartilhar.
    - **Acompanhamento:** Status dos amigos convidados e bônus recebidos.

### 3.6. Cashback

- **Descrição:** Extrato e gerenciamento do saldo de cashback.
- **Funcionalidades:**
    - **Saldo Disponível:** Mostra o valor total de cashback acumulado.
    - **Histórico de Transações:** Detalhes de onde o cashback foi ganho.
    - **Regras de Uso:** Informações sobre como e onde o cashback pode ser utilizado.

### 3.7. Perfil

- **Descrição:** Gerenciamento das informações pessoais e de perfil.
- **Funcionalidades:**
    - **Dados Pessoais:** Edição de nome, avatar, e outras informações.
    - **Interesses:** Seleção de interesses para receber missões mais relevantes.
    - **Privacidade:** Configurações de compartilhamento de dados.

### 3.8. Notificações

- **Descrição:** Central de notificações sobre missões, recompensas e sorteios.
- **Funcionalidades:**
    - **Feed de Notificações:** Lista de todas as atualizações relevantes.
    - **Marcar como Lida:** Opção para gerenciar as notificações.

### 3.9. Suporte

- **Descrição:** Canal para obter ajuda e suporte.
- **Funcionalidades:**
    - **FAQ:** Acesso a uma lista de perguntas frequentes.
    - **Abrir Ticket:** Formulário para entrar em contato com a equipe de suporte.
    - **Tutoriais:** Guias de como usar a plataforma. 