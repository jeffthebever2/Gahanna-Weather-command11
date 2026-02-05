import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { WelcomeScreen } from './WelcomeScreen';
import { LocationSetup } from './LocationSetup';
import { PreferencesSetup } from './PreferencesSetup';
import { TourComplete } from './TourComplete';
import { Progress } from '@/components/ui/progress';
import { usePreferences } from '@/hooks/usePreferences';

const steps = ['welcome', 'location', 'preferences', 'complete'] as const;

type Step = (typeof steps)[number];

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [open, setOpen] = useState(true);
  const { completeOnboarding } = usePreferences();

  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const nextStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex]);
    }
  };

  const prevStep = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex]);
    }
  };

  const handleComplete = () => {
    completeOnboarding();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 border-white/20">
        <div className="mb-6">
          <Progress value={progress} className="h-1" />
          <p className="text-white/60 text-sm mt-2 text-center">
            Step {currentStepIndex + 1} of {steps.length}
          </p>
        </div>

        {currentStep === 'welcome' && <WelcomeScreen onNext={nextStep} />}
        {currentStep === 'location' && <LocationSetup onNext={nextStep} onBack={prevStep} />}
        {currentStep === 'preferences' && (
          <PreferencesSetup onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 'complete' && <TourComplete onComplete={handleComplete} />}
      </DialogContent>
    </Dialog>
  );
}
