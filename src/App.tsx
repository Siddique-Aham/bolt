import { useState, useEffect } from 'react';
import { Code2, Menu, X, Zap, Brain, Sparkles, CheckCircle2, ArrowRight, Terminal } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that understand context and generate production-ready code instantly.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate, debug, and refactor code in milliseconds with our optimized AI engine.',
    },
    {
      icon: Sparkles,
      title: 'Smart Suggestions',
      description: 'Real-time intelligent code suggestions that adapt to your coding style and patterns.',
    },
    {
      icon: Code2,
      title: 'Multi-Language Support',
      description: 'Supports 50+ programming languages with framework-specific optimizations.',
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 19,
      features: [
        '100 AI requests/day',
        'Basic code generation',
        'Email support',
        '5 projects',
      ],
    },
    {
      name: 'Pro',
      price: 49,
      features: [
        'Unlimited AI requests',
        'Advanced code generation',
        'Priority support',
        'Unlimited projects',
        'Team collaboration',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 199,
      features: [
        'Everything in Pro',
        'Custom AI models',
        'Dedicated support',
        'On-premise deployment',
        'SLA guarantee',
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActivePage(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                CodeAI Pro
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activePage === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activePage === item.id
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Side Navigation Bar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group relative"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activePage === item.id
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            ></div>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.name}
            </span>
          </button>
        ))}
      </div>

      {/* Home Section */}
      {activePage === 'home' && (
        <section className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient Orb Following Mouse */}
            <div
              className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-300 ease-out pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
                left: `${mousePosition.x - 250}px`,
                top: `${mousePosition.y - 250}px`,
              }}
            ></div>

            {/* Purple/Blue Gradient Glow - Bottom Center */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{
              background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 30%, transparent 70%)',
              filter: 'blur(60px)',
            }}></div>

            {/* Planet/Horizon Curve */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[300px]" style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(20, 20, 30, 0.8) 100%)',
              borderRadius: '100% 100% 0 0',
              transform: 'translateX(-50%) translateY(40%)',
            }}></div>

            {/* Horizon Glow Line */}
            <div className="absolute bottom-[120px] left-0 right-0 h-[2px]" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.6) 30%, rgba(59, 130, 246, 0.6) 70%, transparent 100%)',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm text-gray-400">Ultimate AI Coding Platform – Features Checklist</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal mb-6 leading-tight tracking-tight">
                Good things come
                <br />
                to those{' '}
                <span className="font-display italic font-normal">
                  who wait.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Generate leads, build excitement, and grow
                <br />
                your email list ahead of launch day.
              </p>

              {/* Email Form */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mb-32">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-lg text-base border border-white/10 focus:border-white/30 focus:outline-none transition-colors placeholder:text-gray-500"
                />
                <button className="px-8 py-4 bg-white text-black rounded-lg text-base font-medium hover:bg-gray-100 transition-all duration-200">
                  Get Notified
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activePage === 'about' && (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative flex items-center">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-300 ease-out pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
                left: `${mousePosition.x - 250}px`,
                top: `${mousePosition.y - 250}px`,
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-normal mb-6">
                About <span className="font-display italic">CodeAI Pro</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Revolutionizing software development with artificial intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-normal">Our Mission</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  We believe that every developer deserves access to world-class AI tools. Our mission
                  is to democratize AI-powered coding assistance, making it accessible, affordable, and
                  incredibly powerful.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Founded in 2024, CodeAI Pro has quickly become the go-to platform for developers
                  who want to leverage AI to write better code, faster. Our team of AI researchers and
                  experienced developers work tirelessly to push the boundaries of what's possible.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-normal text-white">500K+</div>
                    <div className="text-sm text-gray-400 mt-1">Developers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-normal text-white">50M+</div>
                    <div className="text-sm text-gray-400 mt-1">Code Lines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-normal text-white">99.9%</div>
                    <div className="text-sm text-gray-400 mt-1">Uptime</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <Brain className="w-10 h-10 text-cyan-400" />
                      <div>
                        <h4 className="font-medium text-base">AI-First Approach</h4>
                        <p className="text-sm text-gray-400">Built on cutting-edge machine learning</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <Zap className="w-10 h-10 text-cyan-400" />
                      <div>
                        <h4 className="font-medium text-base">Lightning Performance</h4>
                        <p className="text-sm text-gray-400">Optimized for speed and efficiency</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <Sparkles className="w-10 h-10 text-cyan-400" />
                      <div>
                        <h4 className="font-medium text-base">Continuous Innovation</h4>
                        <p className="text-sm text-gray-400">Weekly updates and improvements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {activePage === 'features' && (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative flex items-center">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-300 ease-out pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
                left: `${mousePosition.x - 250}px`,
                top: `${mousePosition.y - 250}px`,
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-normal mb-6">
                Powerful <span className="font-display italic">Features</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Everything you need to supercharge your development workflow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <CheckCircle2 className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-medium mb-2">Code Completion</h3>
                <p className="text-sm text-gray-400">Intelligent autocomplete that predicts your next line of code</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <CheckCircle2 className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-medium mb-2">Bug Detection</h3>
                <p className="text-sm text-gray-400">Automatically identify and fix bugs before they reach production</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <CheckCircle2 className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-medium mb-2">Code Refactoring</h3>
                <p className="text-sm text-gray-400">Optimize and improve your codebase with AI-powered suggestions</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {activePage === 'pricing' && (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative flex items-center">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-300 ease-out pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
                left: `${mousePosition.x - 250}px`,
                top: `${mousePosition.y - 250}px`,
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-normal mb-6">
                Simple <span className="font-display italic">Pricing</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Choose the perfect plan for your needs. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border ${
                    plan.popular
                      ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/10'
                      : 'border-white/10'
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 bg-cyan-400 text-black rounded-full text-xs font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-normal">${plan.price}</span>
                      <span className="text-gray-400 text-sm">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                      plan.popular
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-400 text-sm mb-4">Need a custom plan for your organization?</p>
              <button className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300 border border-white/10">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">CodeAI Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                The ultimate AI coding platform for modern developers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button className="hover:text-cyan-400 transition-colors">Features</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">Pricing</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">Documentation</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">API</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button className="hover:text-cyan-400 transition-colors">About</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">Blog</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">Careers</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button className="hover:text-cyan-400 transition-colors">Privacy</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">Terms</button></li>
                <li><button className="hover:text-cyan-400 transition-colors">Security</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 CodeAI Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
