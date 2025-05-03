"use client";

// Ultima linha de proteção contra o erro para a tela nao quebrar, só funciona em produção

export default function GlobalError() {
  return (
    <html>
      <body>
        <p>ALgo deu errado</p>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </body>
    </html>
  );
}
