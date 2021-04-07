import Link from 'next/link'

export function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="container">
      <p>
        Desenvolvido por Yan Lyra - Todos os direitos reservados -&nbsp;
        2018 - {fullYear}
      </p>

      <Link href="/credits">
        <a rel="noopener">Créditos Extras</a>
      </Link>
    </footer>
  );
}