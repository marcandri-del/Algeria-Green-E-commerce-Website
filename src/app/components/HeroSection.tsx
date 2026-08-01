import React from 'react';
import { Button } from './ui/button';
import { NewAlgeriaGreenLogo } from './NewAlgeriaGreenLogo';
import { Sprout, Users } from 'lucide-react';
import { Language, Page } from '../types';

interface HeroSectionProps {
  language: Language;
  translations: any;
  setCurrentPage: (page: Page) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  translations,
  setCurrentPage
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1721720732045-7a3704a8e2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMHBsYW50aW5nJTIwb2xpdmUlMjB0cmVlJTIwQWxnZXJpYSUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc1NTg3NzU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />
      
      <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <NewAlgeriaGreenLogo 
              size={96} 
              className="drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl mb-6 font-medium text-center">{t.heroSlogan}</p>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-center">{t.heroDescription}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            onClick={() => setCurrentPage('store')}
          >
            <Sprout className="w-5 h-5 mr-2" />
            {t.shopNow}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
            onClick={() => setCurrentPage('campaigns')}
          >
            <Users className="w-5 h-5 mr-2" />
            {t.joinCampaign}
          </Button>
        </div>
      </div>
    </section>
  );
};