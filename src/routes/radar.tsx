import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Layers,
  MapPin,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from '@/hooks/useLocation';
import { useRadar } from '@/hooks/useRadar';

export function RadarPage() {
  const { location } = useLocation();
  const { data: radarFrames } = useRadar();
  const [playing, setPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [opacity, setOpacity] = useState(70);

  useEffect(() => {
    if (playing && radarFrames && radarFrames.length > 0) {
      const interval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % radarFrames.length);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [playing, radarFrames]);

  const currentFrameUrl = radarFrames?.[currentFrame]?.url;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Interactive Radar</h1>
          <p className="text-white/70">Live precipitation and weather layers</p>
        </div>
        <Badge className="text-white border-white/30">
          <MapPin className="w-3 h-3 mr-1" />
          {location.name}
        </Badge>
      </div>

      <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 border-slate-700/50 overflow-hidden">
        <CardContent className="p-0 relative">
          <div className="h-[600px] relative">
            <MapContainer
              center={[location.latitude, location.longitude]}
              zoom={8}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap contributors'
              />

              {currentFrameUrl && (
                <TileLayer url={currentFrameUrl} opacity={opacity / 100} zIndex={1000} />
              )}
            </MapContainer>

            <div className="absolute top-4 right-4 z-[1000] space-y-2">
              <Button
                size="icon"
                variant="secondary"
                className="backdrop-blur-md bg-white/10 border-white/20"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="backdrop-blur-md bg-white/10 border-white/20"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="backdrop-blur-md bg-white/10 border-white/20"
              >
                <Layers className="w-4 h-4" />
              </Button>
            </div>

            <div className="absolute bottom-20 left-4 z-[1000] backdrop-blur-md bg-slate-900/80 border border-white/20 rounded-lg p-4">
              <h3 className="text-white font-semibold text-sm mb-3">Precipitation</h3>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-8 h-4 bg-blue-200"></div>
                  <div className="w-8 h-4 bg-blue-400"></div>
                  <div className="w-8 h-4 bg-blue-600"></div>
                  <div className="w-8 h-4 bg-yellow-400"></div>
                  <div className="w-8 h-4 bg-orange-500"></div>
                  <div className="w-8 h-4 bg-red-500"></div>
                  <div className="w-8 h-4 bg-purple-600"></div>
                </div>
              </div>
              <div className="flex justify-between text-white/70 text-xs mt-1">
                <span>Light</span>
                <span>Heavy</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 p-4 backdrop-blur-md bg-slate-900/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setCurrentFrame(0)}
                  className="text-white hover:bg-white/10"
                >
                  <SkipBack className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  onClick={() => setPlaying(!playing)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setCurrentFrame((radarFrames?.length ?? 1) - 1)}
                  className="text-white hover:bg-white/10"
                >
                  <SkipForward className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1">
                <Slider
                  value={[currentFrame]}
                  max={(radarFrames?.length ?? 1) - 1}
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
            <CardContent>
              <p className="text-white/70">
                Real-time precipitation intensity from weather radar. Updates every 5 minutes.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="satellite" className="mt-4">
          <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-slate-700/50">
            <CardContent>
              <p className="text-white/70">
                Visible and infrared satellite views showing cloud cover and storm systems.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: 'Coverage',
            description: 'Radar coverage extends 250+ miles from your location',
          },
          {
            title: 'Update Frequency',
            description: 'New radar scans every 5 minutes during active weather',
          },
          {
            title: 'Data Source',
            description: 'National Weather Service NEXRAD radar network',
          },
        ].map((item) => (
          <Card
            key={item.title}
            className="backdrop-blur-xl bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-slate-700/50"
          >
            <CardContent>
              <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
