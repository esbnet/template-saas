<center> 

![Capa](/src/assets/capa.jpeg)
</center>

# 🚀 SaaS Template - Full Stack Boilerplate

Este projeto é um **template SaaS completo**, desenvolvido com foco em escalabilidade, modularidade e facilidade de personalização. Ele fornece uma estrutura robusta para aplicações SaaS que exigem autenticação, cobrança recorrente, entrega de produtos digitais e funcionalidades essenciais como rotas protegidas, WebHooks, APIs RESTful e muito mais.

---

<center> 

![Gateway de pagamento Stripe](/src/assets/arch.jpeg)
</center>

---

## 🧱 Stack Tecnológica

- **Next.js** (App Router) — SSR/SSG híbrido com excelente performance.
- **TypeScript** — Tipagem estática para maior confiabilidade.
- **Auth.js** — Autenticação segura e flexível (OAuth, credentials, etc).
- **Stripe & Mercado Pago** — Integração completa com gateways de pagamento.
- **Firebase - Cloud Firestore** — Armazenamento de dados em tempo real.
- **Tailwind CSS + ShadCN/UI** — UI moderna, responsiva e baseada em componentes.
- **Zod** — Validação de dados robusta e typesafe.
- **React Query/TanStack Query** — Gerenciamento de cache e requisições assíncronas.

---

## 🔐 Autenticação com Auth.js

Implementação com suporte a:

- **OAuth (Google, GitHub, etc)**
- **JWT** ou **session-based auth**
- **Proteção de rotas** no client e server (middleware `auth()` no server side e `useSession()` no client side)
- **Roles e permissions** (admin, user, etc)

```ts
// Exemplo de proteção SSR
export const getServerSideProps = withAuth(async (ctx) => {
  const session = await getSession(ctx);
  if (!session) return { redirect: { destination: '/login', permanent: false } };
  return { props: { user: session.user } };
});
```
##

## 📨 Contato
📫 Email: (mailto:esbnet@gmail.com)
🌐 Site [Edmilson Soares](https://esbnet-port.vercel.app/)



<center>

## 🙏 Agradecimentos
Sinte-se a vontade para fazer uma doação via [BuyMeACoffee](https://www.buymeacoffee.com/esbdev)
![Capa](/src/assets/bmc_qr.png)

</center>
