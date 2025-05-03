export default function InterceptedF2() {
  /* 
        A pagina interceptada mostra uma UI temporario mas mantem o contexto
        da página padrao.
        Primeira ver onde é a origem depois qual o destino, e dentro da origem criar
        pastas com o nome (.) ou (..) ou (..)(..) depende de onde a outra pagina de destino está
        referente a pagina de origem, como se fosse o caminho para referencia um path
    */

  return (
    <div className="p-20">
      <h1>(.)F2 Page intercepted</h1>
    </div>
  );
}
