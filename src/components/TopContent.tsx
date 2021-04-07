import { useContext } from 'react';
import { WorksContext } from '../contexts/WorksContext';

import styles from '../styles/components/TopContent.module.css';

export function TopContent() {
  const { showWork, recentsWorks } = useContext(WorksContext)

  return (
    <section id='top' className={styles.topContainer}>
      <div className={`container ${styles.container}`}>
        <h1 className="title">Veja alguns dos meus projetos!</h1>

        <div className={`works ${styles.works}`}>
          {recentsWorks.map(recentWork => {
            return (
              <div 
                key={`topWork-${recentWork.id}`}
                className='work' 
                onClick={() => showWork(recentWork.id)} 
                style={{backgroundImage: `url(${recentWork.image_small})`}} />           
            )
          })}
          <a href="#works" rel="noopener">Veja mais &gt;</a>
        </div>

        <a href="#contact" rel="noopener" className="btn">Contate-me</a>
      </div>
    </section>
  );
}