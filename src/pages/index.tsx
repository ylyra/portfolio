import axios from "axios";
import Head from "next/head";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { TopContent } from "../components/TopContent";
import { Works } from "../components/Works";
import { WorksProvider, WorkData } from "../contexts/WorksContext";
import api from "../services/api";

interface PropsData {
  allWorks: WorkData[];
}

export default function Home(props: PropsData) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Início | Yan</title>
        <meta
          name="description"
          content="Bem vindo ao meu portfolio, aqui você irá encontrar todos os trabalhos que eu fiz."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:site_name" content="Início | Yan" />
        <meta property="og:title" content="Início | Yan" />
        <meta
          property="og:description"
          content="Bem vindo ao meu portfolio, aqui você irá encontrar todos os trabalhos que eu fiz."
        />
        <meta property="og:url" content="https://yanlyra.com.br" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="./apple-icon-180x180.png" />
        <meta property="og:image:width" content="620" />
        <meta property="og:image:height" content="316" />
        <meta name="twitter:site" content="@ylyra1" />
        <meta name="twitter:title" content="Início | Yan" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ylyra1" />
        <meta name="twitter:creator" content="@ylyra1" />
      </Head>

      <NavBar />
      <WorksProvider works={props.allWorks}>
        <TopContent />

        <About />

        <Works />
      </WorksProvider>

      <Contact />

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  let allWorks = [];
  try {
    const { data } = await api.get("/api/trabalhos");
    allWorks = data;
  } catch {}

  return {
    props: {
      allWorks,
    }, // will be passed to the page component as props
    revalidate: 86400,
  };
}
