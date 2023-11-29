<h1>PortalAdminAngular</h1><h2>README - Implantação de Site Angular com Firebase Hosting</h2><h3>Pré-requisitos</h3><ul><li><strong>Node.js instalado</strong>: <a href="https://nodejs.org/" target="_new">Node.js</a></li><li><strong>Angular CLI instalado</strong>: Execute <code>npm install -g @angular/cli</code></li><li><strong>Firebase CLI instalado</strong>: Execute <code>npm install -g firebase-tools</code></li><li><strong>Conta no Firebase</strong>: <a href="https://firebase.google.com/" target="_new">Firebase</a></li><li><strong>Acesso ao repositório GitHub do projeto</strong></li></ul><h3>Configuração Inicial</h3><h4>Clone o Repositório do GitHub</h4><p>Use <code>git clone https://github.com/Squad13Porto/PortalAdminAngular.git</code> para clonar o repositório para sua máquina local.</p><h4>Instale as Dependências</h4><p>Navegue até a pasta do projeto e execute <code>npm install</code> para instalar as dependências do projeto.</p><h3>Configuração do Firebase</h3><h4>Login no Firebase</h4><p>Execute <code>firebase login</code> para entrar na sua conta Firebase.</p><h4>Inicialize o Firebase no Projeto</h4><ul><li>Na pasta do projeto, execute <code>firebase init</code>.</li><li>Escolha as opções relevantes para o seu projeto, especialmente 'Hosting'.</li><li>Conecte o projeto local ao projeto do Firebase escolhido.</li></ul><h3>Build e Implantação</h3><h4>Build do Projeto Angular</h4><p>Execute <code>ng build --prod</code> para criar uma build de produção do seu projeto Angular. Os arquivos serão gerados na pasta <code>dist/</code>.</p><h4>Implante no Firebase Hosting</h4><ul><li>Após o build, execute <code>firebase deploy</code>.</li><li>Este comando irá implantar o conteúdo da pasta <code>dist/</code> para o Firebase Hosting.</li></ul><h3>Verificação</h3><p>Após a implantação, você receberá um URL público. Acesse esse URL para verificar se o site está funcionando conforme esperado.</p><h3>Atualizações Futuras</h3><p>Para futuras atualizações do site, repita o processo de build (<code>ng build --prod</code>) e implantação (<code>firebase deploy</code>).</p>
