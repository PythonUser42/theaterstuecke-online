import Hero from "./sections/Hero";
import Tagline from "./sections/Tagline";
import Categories from "./sections/Categories";
import PerformanceRights from "./sections/PerformanceRights";

export default function TheaterHome() {
  return (
    <main>
      <Hero />
      <Tagline />
      <Categories />
      <PerformanceRights />
    </main>
  );
}
