import { ReactElement } from "react";

export const AchievementCard = (): ReactElement => {
  return (
    <div className="w-full flex flex-col justify-center items-center border-t-2 border-[var(--bg-hover)]">
      <h1 className="text-4xl font-bold">Mis Logros</h1>
      <span className="text-base text-[var(--text-secondary)]">Competencias</span>
    </div>
  );
};