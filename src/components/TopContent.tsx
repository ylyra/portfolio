import { useContext } from "react";
import { Link } from "react-scroll";

import { WorksContext } from "../contexts/WorksContext";

import styles from "../styles/components/TopContent.module.css";

export function TopContent() {
  const { showWork, recentsWorks } = useContext(WorksContext);

  return (
    <section id="top" className={styles.topContainer}>
      <div className={`container ${styles.container}`}>
        <h1 className="title">Veja alguns dos meus projetos!</h1>

        <div className={`works ${styles.works}`}>
          {recentsWorks.map((recentWork) => {
            return (
              <Link
                to="see-work"
                className="work"
                style={{ backgroundImage: `url(${recentWork.image_small})` }}
                smooth={true}
                offset={-120}
                isDynamic
                duration={500}
                onClick={() => showWork(recentWork.id)}
                key={`topWork-${recentWork.id}`}
              />
            );
          })}
          <a href="#works" rel="noopener">
            Veja mais &gt;
          </a>
        </div>

        <a href="#contact" rel="noopener" className="btn">
          Contate-me
        </a>
      </div>
    </section>
  );
}
