import { createContext, ReactNode, useState } from 'react';

export interface WorkData {
  id?: number;
  name: string;
  description_pt_br: string;
  description_en: string;
  image_small: string;
  image_big: string;
}

interface WorksContextData {
  workActived: WorkData | null;
  recentsWorks: Array<WorkData>
  allWorks: Array<WorkData>
  showWork: (id: number) => void;
}

interface WorksProviderProps {
  children: ReactNode;
  works: Array<WorkData>;
}

export const WorksContext = createContext({} as WorksContextData);

export function WorksProvider({ children, works }: WorksProviderProps) {
  const [workActived, setWorkdActived] = useState(null);
  const allWorks = works
  const recentsWorks = allWorks.slice(-5).reverse();

  function showWork(id: number) {
    const work = allWorks.find(r => r.id === id)
    setWorkdActived(work);
  }

  const WorksValue = {
    workActived,
    allWorks,
    recentsWorks,
    showWork
  }

  return (
    <WorksContext.Provider value={WorksValue}>
      { children }
    </WorksContext.Provider>

  );
}