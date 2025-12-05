import { HomeDescription } from "../molecules/HomeDescription";
import { HomeImage } from "../molecules/HomeImage";

export const HomeHero = () => (
  <div className="p-6 md:p-10 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-10 bg-blue-200 p-8 rounded-xl shadow-lg">
      <HomeDescription />
      <HomeImage />
    </div>
  </div>
);
