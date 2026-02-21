TECNOLOGIAS: 
Node.js (Ambiente de execução)
Express (Framework web)
Prisma (ORM para modelagem e queries)
MongoDB (Banco de Dados NoSQL)
PRE REQUISITOS: 
Node.js v18 ou superior instalado.
Instância do MongoDB (Local ou MongoDB Atlas).
CONFIGURAÇÃO E INSTALAÇÃO
git clone https://github.com
cd seu-projeto
INSTALE AS DEPENDENCIAS: 
npm install
CONFIGURE O AMBIENTE
DATABASE_URL="mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/NOME_DO_BANCO?retryWrites=true&w=majority"
SINCRONIZE O BANCO E GERE O CLIENTE 
npx prisma db push
npx prisma generate
EXECUÇÃO 
npm run dev
npm start
