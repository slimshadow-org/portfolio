import { Code2, Database, Layout, Server } from 'lucide-react';

const technologies = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React 18+', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'DevOps',
    icon: Database,
    items: ['Docker', 'GitHub Actions', 'AWS', 'Terraform'],
  },
  {
    category: 'Tools',
    icon: Code2,
    items: ['VS Code', 'Git', 'Postman', 'Jest'],
  },
];

export function TechStack() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map(({ category, icon: Icon, items }) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
              <ul className="space-y-3">
                {items.map(item => (
                  <li
                    key={item}
                    className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}