
import {ReactElement} from 'react'
import { AchievementList } from './AchievementList';

export const AchievementsSection = (): ReactElement => {

  return (
    <section id="misProyectos" className="u-center">
      <div className="w-full flex flex-col justify-center pt-4 items-center border-t-2 border-[var(--bg-hover)]">
        <h1 className="text-4xl font-bold">Mis Logros</h1>
        <span className="text-base text-[var(--text-secondary)]">
          Competencias
        </span>
      </div>

      <AchievementList/>
    
    </section>
  );


}