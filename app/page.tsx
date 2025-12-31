import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GridBackground from './components/GridBackground';

export default function Page() {
  return (
    <main className="relative">
      <GridBackground />

      <div className="relative z-10">
        <Hero />
        <Services />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
