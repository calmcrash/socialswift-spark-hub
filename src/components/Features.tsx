
import { Calendar, BarChart3, Users, Play, Check, Linkedin } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Schedule posts across all platforms with optimal timing suggestions powered by AI."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get detailed insights into your performance with comprehensive analytics and reporting."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using built-in collaboration tools and approval workflows."
    },
    {
      icon: Play,
      title: "Content Creation",
      description: "Generate engaging content with AI assistance and access to millions of stock assets."
    },
    {
      icon: Check,
      title: "Brand Safety",
      description: "Protect your brand with automated moderation and compliance monitoring tools."
    },
    {
      icon: Linkedin,
      title: "Multi-Platform",
      description: "Manage Instagram, Facebook, Twitter, LinkedIn, and TikTok from one dashboard."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powerful features designed to help you create, schedule, and analyze your social media content effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
