
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <img 
                src="/lovable-uploads/56143efe-ed61-4ef6-a045-df92fce2da81.png" 
                alt="OpenAI" 
                className="inline-block w-4 h-4 mr-2 brightness-0 invert opacity-60"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(76%) sepia(77%) saturate(288%) hue-rotate(233deg) brightness(91%) contrast(89%)'
                }}
              />
              New: AI-Powered Content Generation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-white">Manage Your</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Social Media
            </span>
            <br />
            <span className="text-white">Like a Pro</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Schedule posts, analyze performance, and grow your audience across all platforms with our comprehensive social media management suite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-800">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-gray-400 text-sm mb-4">Trusted by 10,000+ businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-gray-500 font-semibold">TechCorp</div>
              <div className="text-gray-500 font-semibold">StartupHub</div>
              <div className="text-gray-500 font-semibold">MediaFlow</div>
              <div className="text-gray-500 font-semibold">BrandWorks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
