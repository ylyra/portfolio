import { useContext } from 'react';
import { WorksContext } from '../contexts/WorksContext';

import styles from '../styles/components/Works.module.css'

export function Works() {
  const {showWork, workActived, allWorks} = useContext(WorksContext)

  return (
    <section id='works' className={`container ${styles.worksContainer}`}>
      <h2 className="subtitle center">TRABALHOS</h2>

      <div className={`${styles.works} works`}>
        {allWorks.map(recentWork => {
          return (
            <div 
              key={`bottom-${recentWork.id}`}
              className="work" 
              id={`work-${recentWork.id}`} 
              onClick={() => showWork(recentWork.id)} 
              style={{backgroundImage: `url(${recentWork.image_small})`}} 
            />          
          )
        })}
      </div>

      <div className={styles.seeWork} id='see-work'>
        { workActived && (
          <>
            <h3 className={styles.center}>{workActived.name}</h3>
            <div className={styles.infos}>
              <div className={styles.image} style={{backgroundImage: `url(${workActived.image_big})`}}></div>
              <div className={styles.info} dangerouslySetInnerHTML={{__html: workActived.description_pt_br}}></div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}