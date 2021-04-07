import styles from '../styles/components/About.module.css'

export function About() {
  return (    
    <section id='about' className={styles.aboutContainer}>
      <div className="container">
        <h2 className="subtitle center">SOBRE</h2>

        <div className="row dflex">
          <div className="col s12 m7 dfc">
            <p>Olá, me chamo Yan e sou um web desenvolvedor e futuramente um web designer também, atualmente estou trabalhando com as tecnologias como JavaScript (TypeScript, NodeJS, Electron, React e React-Native) e com o bom e velho PHP e MySQL, caso queira entrar em contato para a contratação de criação de um website (ou talvez a procura de desenvolvedor para sua empresa) basta preencher o formulário no final do site ou entre em contato através do WhatsApp.</p>
          </div>
          <div className={`col s12 m5 ${styles.hideOnSmallAndDown}`}>
            <img src="./assets/images/user.svg" alt="Homem com notebook" />
          </div>
        </div>
      </div>
    </section>
  );
}