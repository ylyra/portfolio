import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return(
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>
          <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="apple-icon-180x180.png" />

          <link rel="icon" type="image/png" sizes="192x192" href="android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />

          <link rel="manifest" href="manifest.json" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="theme-color" content="#000000" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,100;1,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@500&display=swap" rel="stylesheet" />
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.0.6/css/all.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
          
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
          <script src="assets/js/script.js"></script>
        </body>
      </Html>
    );
  }
}