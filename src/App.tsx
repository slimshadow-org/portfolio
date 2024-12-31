import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Sameer
          </a>
          <div className="flex items-center gap-6 md:gap-8">
            <a href="#projects" className="text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400">
              Projects
            </a>
            <a href="#contact" className="text-sm md:text-base hover:text-indigo-600 dark:hover:text-indigo-400">
              Contact
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Team />
        <Contact />
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} SlimShadow Org. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;