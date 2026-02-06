import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Pause, SkipBack, SkipForward, Layers, MapPin, ZoomIn, ZoomOut } from 'lucide-react';
import { useLocation } from '@/hooks/useLocation';
import { RADAR_SERVICES } from '@/config/api';

export function RadarPage() {
  const { location } = useLocation();
  const [playing, setPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [radarFrames, setRadarFrames] = useState<string[]>([]);
  const [opacity, setOpacity] = useState(70);

  useEffect(() => {
    const fetchRadarFrames = async () => {
      try {
        const response = await fetch(RADAR_SERVICES.rainviewer);
        const data = await response.json();
        const frames = data.radar.past.slice(-10).map((frame: { path: string }) => {
          return `https://tilecache.rainviewer.com${frame.path}/256/{z}/{x}/{y}/2/1_1.png`;
        });
        setRadarFrames(frames);
      } catch {
        setRadarFrames([]);
      }
    };

    fetchRadarFrames();
  }, []);

  useEffect(() => {
    if (!playing || radarFrames.length === 0) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % radarFrames.length);
    }, 500);
    return () => clearInterval(interval);
  }, [playing, radarFrames]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Interactive Radar</h1>
          <p className="text-white/70">Live precipitation and weather layers</p>
        </div>
        <Badge className="text-white border border-white/30">
          <MapPin className="w-3 h-3 mr-1" />
          {location.name}
        </Badge>
      </div>

      <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 border-slate-700/50 overflow-hidden">
        <CardContent className="p-0 relative">
          <div className="h-[500px] relative bg-slate-900/70 flex items-center justify-center">
            <div className="text-center text-white/70">
              <p className="text-lg font-semibold">Radar map preview</p>
              <p className="text-sm">Frames loaded: {radarFrames.length}</p>
            </div>

            <div className="absolute top-4 right-4 z-[1000] space-y-2">
              <Button type="button" className="backdrop-blur-md bg-white/10 border-white/20">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button type="button" className="backdrop-blur-md bg-white/10 border-white/20">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button type="button" className="backdrop-blur-md bg-white/10 border-white/20">
                <Layers className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="border-t border-white/10 p-4 backdrop-blur-md bg-slate-900/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button type="button" onClick={() => setCurrentFrame(0)} className="text-white hover:bg-white/10">
                  <SkipBack className="w-5 h-5" />
                </Button>
                <Button type="button" onClick={() => setPlaying(!playing)} className="bg-blue-600 hover:bg-blue-700">
                  {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <Button
                  type="button"
                  onClick={() => setCurrentFrame(Math.max(radarFrames.length - 1, 0))}
                  className="text-white hover:bg-white/10"
                >
                  <SkipForward className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1">
                <Slider
                  value={[currentFrame]}
                  max={Math.max(radarFrames.length - 1, 1)}
                  step={1}
                  onValueChange={([value]) => setCurrentFrame(value)}
                  className="w-full"
                />
                <div className="flex justify-between text-white/60 text-xs mt-1">
                  <span>-50 min</span>
                  <span>Now</span>
                </div>
              </div>

              <div className="w-32">
                <div className="text-white/70 text-xs mb-1">Opacity</div>
                <Slider value={[opacity]} max={100} step={5} onValueChange={([value]) => setOpacity(value)} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="precipitation" className="w-full">
        <TabsList className="backdrop-blur-md bg-white/10 border-white/20">
          <TabsTrigger value="precipitation">Precipitation</TabsTrigger>
          <TabsTrigger value="satellite">Satellite</TabsTrigger>
          <TabsTrigger value="temperature">Temperature</TabsTrigger>
          <TabsTrigger value="wind">Wind</TabsTrigger>
          <TabsTrigger value="clouds">Clouds</TabsTrigger>
        </TabsList>

        <TabsContent value="precipitation" className="mt-4">
          <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Precipitation Radar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">
                Real-time precipitation intensity from radar. Blue indicates light rain, progressing through warmer
                colors for heavier precipitation.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="satellite" className="mt-4">
          <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Satellite Imagery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">Visible and infrared satellite views showing cloud cover and storm systems.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
