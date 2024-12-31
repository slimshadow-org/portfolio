const team = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Lead Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    bio: 'Full-stack developer with 8+ years of experience in modern web technologies.',
  },
  // Add more team members
];

export function Team() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(member => (
            <div
              key={member.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 mb-4">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.github}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  GitHub
                </a>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}