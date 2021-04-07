import Head from 'next/head'

export default function Credits() {
  return (
    <section className="container" style={{padding:'10px'}}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Créditos | Yan</title>
        <meta name="description" content="Bem vindo ao meu portfolio, aqui você irá encontrar todos os trabalhos que eu fiz." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:site_name" content="Créditos | Yan" />
        <meta property="og:title" content="Créditos | Yan" />
        <meta property="og:description" content="Bem vindo ao meu portfolio, aqui você irá encontrar todos os trabalhos que eu fiz." />
        <meta property="og:url" content="https://yanlyra.com.br" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="./apple-icon-180x180.png" />
        <meta property="og:image:width" content="620" />
        <meta property="og:image:height" content="316" />
        <meta name="twitter:site" content="@ylyra1" />
        <meta name="twitter:title" content="Créditos | Yan" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ylyra1" />
        <meta name="twitter:creator" content="@ylyra1" />
      </Head>
      
      <h2 className="subtitle center">EXTRA</h2><br />
      <p>Um agradecimento especial aos nomes/sites listados abaixo por terem ajudado de alguma maneira com a criação deste site!</p><br />
      <ul>
        <li>
          <span>Social icons by <a href="https://br.freepik.com/myriammira" rel="noopener" target="_blank">myriammira</a> on <a href="https://br.freepik.com/vetores/logotipo" rel="noopener" target="_blank">Freepik</a></span>
        </li>
        <li>
          <span>Photo by <a href="https://unsplash.com/@flowforfrank">Ferenc Almasi</a> on <a href="https://unsplash.com/s/photos/web-developer" rel="noopener" target="_blank">Unsplash</a></span>
        </li>
        <li>
          <a href="https://materializecss.com" rel="noopener" target="_blank">Materialize Css</a>
        </li>
        <li>
          <a href="https://imask.js.org/" rel="noopener" target="_blank">imask.js</a>
        </li>
      </ul>
    </section>
  )
}