# NORTE — Loja virtual de moda masculina

Loja de demonstração feita com Next.js App Router, React, TypeScript e CSS próprio. A interface está em português brasileiro (pt-BR), usando o template de e-commerce ANIQ UI como referência visual e funcional — sem copiar o código proprietário do template.

## O que está implementado

- Página inicial editorial responsiva, categorias e catálogo de 12 produtos demonstrativos.
- Pesquisa por nome, categoria e cor; filtros por categoria e preço; ordenação por relevância, novidades, preço e avaliação.
- Visualização de produto, seletor de tamanho e descrição.
- Carrinho com quantidade, remoção, subtotal e cálculo demonstrativo de frete.
- Favoritos persistentes no navegador via localStorage.
- Modal de checkout demonstrativo, formulário de newsletter, menu para celular e mensagens de feedback.
- Metadados de página e idioma pt-BR.

## Executar localmente

Requisitos: Node.js compatível com a versão do Next.js instalada.

    npm install
    npm run dev

Abra http://localhost:3000.

Verificações:

    npm run typecheck
    npm run build

## Importante antes de publicar

Este repositório contém um front-end demonstrativo. Produtos, imagens, avaliações, preços e promoções são de exemplo. O checkout não processa pagamentos nem grava pedidos. Login, estoque, pedidos, cálculo real de frete, e-mail/newsletter, suporte, políticas e integração de pagamento ainda precisam ser ligados a serviços reais. Não use este checkout para coletar dados de clientes ou processar vendas.

Confirme direitos de uso das fotografias, revise preço/estoque, substitua nome e marca se necessário e adicione política de privacidade, termos, troca/devolução, entrega, dados de contato, domínio e analytics antes de colocar a loja no ar.

## Referências

- REA — Reverse Engineer Anything: https://github.com/morluto/rea (referência de ferramenta; este projeto não altera o repositório REA).
- E-commerce ANIQ UI: https://ecommerce-clothes-1.aniq-ui.com/en
- Documentação da storefront ANIQ UI: https://www.aniq-ui.com/en/templates/next-js-ecommerce-template/docs/storefront

A implementação e o CSS deste projeto são próprios. As referências orientaram o escopo e a direção visual; o código proprietário do template não está incluído.