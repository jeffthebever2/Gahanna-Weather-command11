import { Button } from '@/components/ui/button';
import { Cloud, Radar, Snowflake, AlertTriangle, BarChart3, Map } from 'lucide-react';

export function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center py-8">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
          <Cloud className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Welcome to WeatherPro</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Your comprehensive weather intelligence platform with professional forecasting tools,
          interactive radar, and multi-source data analysis.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
        <FeatureCard
          icon={<Radar className="w-6 h-6" />}
          title="Live Radar"
          description="Interactive precipitation maps"
        />
        <FeatureCard
          icon={<BarChart3 className="w-6 h-6" />}
          title="Multi-Source"
          description="6 weather APIs synthesized"
        />
        <FeatureCard
          icon={<Snowflake className="w-6 h-6" />}
          title="Snow Day"
          description="AI-powered predictions"
        />
        <FeatureCard
          icon={<AlertTriangle className="w-6 h-6" />}
          title="Severe Weather"
          description="Real-time alerts"
        />
        <FeatureCard
          icon={<Map className="w-6 h-6" />}
          title="Specialized"
          description="Marine, Aviation, Fire"
        />
        <FeatureCard
          icon={<Cloud className="w-6 h-6" />}
          title="Professional"
          description="Meteorologist tools"
        />
      </div>

      <Button
        onClick={onNext}
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
      >
        Get Started
      </Button>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <div className="text-blue-400 mb-2">{icon}</div>
      <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
      <p className="text-white/60 text-xs">{description}</p>
    </div>
  );
}
