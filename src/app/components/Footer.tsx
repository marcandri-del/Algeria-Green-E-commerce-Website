import React from 'react';
import { NewAlgeriaGreenLogo } from './NewAlgeriaGreenLogo';
import { TreePine, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Language, Page, Campaign, Participant, TreeDonation } from '../types';

interface FooterProps {
  language: Language;
  participants: Participant[];
  donations: TreeDonation[];
  campaigns: Campaign[];
  translations: any;
  setCurrentPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  participants,
  donations,
  campaigns,
  translations,
  setCurrentPage
}) => {
  const t = translations[language];

  const getCampaignsWithCounters = () => {
    return campaigns.map(campaign => ({
      ...campaign,
      participants: campaign.participants + participants.filter(p => p.campaignId === campaign.id).length,
      treesAvailable: campaign.treesAvailable + donations.filter(d => d.campaignId === campaign.id).reduce((sum, d) => sum + d.quantity, 0)
    }));
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full pattern-amazigh" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <NewAlgeriaGreenLogo 
                size={40} 
                className="mr-3"
              />
              <h3 className="text-xl font-bold">{t.heroTitle}</h3>
            </div>
            <p className="text-gray-400 mb-4">{t.footerSlogan}</p>
            <div className="flex items-center gap-2 text-sm">
              <TreePine className="w-4 h-4 text-green-400" />
              <span>{t.treesPlanted}: <strong className="text-green-400">
                {getCampaignsWithCounters().reduce((sum, c) => sum + c.treesAvailable, 0).toLocaleString()}
              </strong></span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">من نحن</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">سياسة الخصوصية</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">{t.contact}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.followUs}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {t.heroTitle}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};