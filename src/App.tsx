import { useState, useEffect } from 'react';
import { Zap, Brain, Sparkles, CheckCircle2 } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'features', 'pricing'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-display font-medium">
              CodeAI Pro
            </span>
          </div>
        </div>
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
                activeSection === item.id
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
      <section id="home" className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center">
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

          {/* Planet/Horizon Half-Circle */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] aspect-square rounded-full" style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(20, 20, 30, 0.8) 100%)',
            transform: 'translateX(-50%) translateY(50%)',
          }}></div>

          {/* Horizon Glow Arc */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] aspect-square rounded-full" style={{
            border: '2px solid transparent',
            borderTopColor: 'rgba(139, 92, 246, 0.6)',
            boxShadow: '0 -2px 40px rgba(139, 92, 246, 0.4)',
            transform: 'translateX(-50%) translateY(50%)',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center">
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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative flex items-center">
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

      {/* Features Section */}
      <section id="features" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative flex items-center">
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

          <div className="grid md:grid-cols-3 gap-6">
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

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative flex items-center">
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
    </div>
  );
}

export default App;
