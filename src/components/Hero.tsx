import { Code2, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Code2 className="w-10 h-10 md:w-12 md:h-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-mono tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            SlimShadow
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Building the future of web development with modern technologies and innovative solutions.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-5 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://github.com/slimshadow-org"
            className="px-5 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}