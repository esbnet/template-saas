<center> 

![Capa](/src/assets/capa.jpeg)
</center>

## 🧩 Template MicroSaaS
Este projeto foi desenvolvido durante um minicurso da Rocketseat com o objetivo de me aprofundar no modelo de aplicações SaaS (Software as a Service). A proposta foi criar um template funcional com os principais recursos que caracterizam esse tipo de sistema — incluindo autenticação, integração com gateways de pagamento, tratamento de webhooks e armazenamento de dados.

<center> 

![Gateway de pagamento Stripe](/src/assets/arch.jpeg)
Diagrama de pagamento
</center>

### 🚀 Tecnologias Utilizadas
* Next.js
* TypeScript
* Tailwind CSS
* Auth.js (Google OAuth2)
* Stripe & Mercado Pago
* Firebase Firestore
* Vercel (deploy)
* Resend (e-mail)

### 🔧 Instalação e Execução
Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório
``` 
git clone https://github.com/esbnet/template-saas.git
```

2. Instale as dependências
```
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente
Para cada recurso, configure as variáveis de ambiente correspondentes no arquivo .env.local. Altamente recomendado a consulta [documentação oficial](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser) do Next e dos demais frameworks e APIs.
Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis (exemplo):
``` 
# Auth.js
AUTH_SECRET=

# Google
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

# Firebase
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

# meio de pagamento - stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_PRODUCT_PRICE_ID=
STRIPE_SUBSCRIPTION_PRICE_ID=
STRIPE_WEBHOOK_SECRET=

# Mercado Pago
MERCADO_PAGO_PUBLIC_KEY=
MERCADO_PAGO_ACCESS_TOKEN=
MERCADO_PAGO_WEBHOOK_SECRET=
MERCADO_PAGO_WEB_HOOK_SECRET_PROD=

# Resend
RESEND_API_KEY=
```
4. Execute o projeto em modo de desenvolvimento
```
npm run dev
# ou
yarn dev
```
A aplicação estará disponível em: http://localhost:3000

### 🔐 Autenticação
A autenticação foi implementada com Auth.js, utilizando login via Google (OAuth2). As credenciais são armazenadas com segurança e utilizadas para proteger rotas específicas da aplicação.

### 💳 Integração com Gateways de Pagamento
#### Stripe
A integração com o Stripe foi realizada da seguinte forma:

* Instalação da biblioteca oficial do Stripe;
* Configuração de produtos e preços na plataforma;
* Ajuste de variáveis no .env.local;
* Criação de um hook para facilitar chamadas de funções do Stripe;
* Desenvolvimento de uma API para execução das ações e disparo de eventos;
* Implementação dos webhooks, que tratam respostas do Stripe e atualizam o Firestore com informações como confirmação ou cancelamento de assinaturas.

#### Mercado Pago
Além do Stripe, foi integrada também a solução do Mercado Pago, incluindo:
* Criação de contas e configuração inicial;
Implementação dos webhooks;
* Criação de hook e rotas internas para comunicação com a API;
* Testes de pagamento para validar a operação completa.

## ☁️ Deploy e Recursos Adicionais
Para a finalização do projeto, foram adicionados os seguintes recursos:

* Deploy na Vercel
* Favicon e imagem OpenGraph (1200x630)
* Arquivo de manifesto (PWA-ready)
* Envio automático de e-mail de boas-vindas com Resend
* Melhoria de SEO com meta tags otimizadas

## 📦 Estrutura Pronta para Evoluir
Com tudo isso implementado, o template está pronto para servir como base sólida no desenvolvimento de produtos SaaS. Ele já conta com autenticação, integrações com meios de pagamento, deploy otimizado e estrutura escalável — perfeito para acelerar o início de novos projetos.

---

<center>

## 📨 Contato
📫 Email: (mailto:esbnet@gmail.com)
🌐 Site [Edmilson Soares](https://esbnet-port.vercel.app/)




## 🙏 Agradecimentos

André Elias - https://www.linkedin.com/in/andr%C3%A9-elias/
Rocketseat - https://rocketseat.com.br 🚀


</br >
</br >

Sinte-se a vontade para fazer uma doação via [BuyMeACoffee](https://www.buymeacoffee.com/esbdev)
![Capa](/src/assets/bmc_qr.png)

</center>
