import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
        <div className="text-2xl font-bold text-white">⭐ StarAI</div>
        <div className="flex gap-6">
          <Link href="#features" className="text-slate-300 hover:text-white transition">
            Features
          </Link>
          <Link href="#about" className="text-slate-300 hover:text-white transition">
            About
          </Link>
          <Link href="#contact" className="text-slate-300 hover:text-white transition">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Accelerate Digital Transformation
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl">
          StarAI Technology helps businesses accelerate digital transformation through AI, Cloud Automation, and Enterprise IT Solutions
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-slate-300 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Solutions',
                description: 'Leverage cutting-edge AI technology to drive innovation and growth',
                icon: '🤖',
              },
              {
                title: 'Cloud Automation',
                description: 'Streamline operations with intelligent cloud automation',
                icon: '☁️',
              },
              {
                title: 'Enterprise IT',
                description: 'Comprehensive IT solutions tailored for enterprises',
                icon: '🏢',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500 transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-6 text-center text-slate-400">
        <p>&copy; 2024 StarAI Technology. All rights reserved.</p>
      </footer>
    </main>
  );
}
