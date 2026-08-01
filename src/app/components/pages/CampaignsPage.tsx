import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  TreePine,
  Users,
  MapPin,
  Phone,
  UserPlus,
  Gift,
  Eye
} from 'lucide-react';
import { Language, Campaign, Participant, TreeDonation } from '../../types';

interface CampaignsPageProps {
  language: Language;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  participants: Participant[];
  donations: TreeDonation[];
  translations: any;
  campaigns: Campaign[];
  setSelectedCampaign: (campaign: Campaign) => void;
  setCurrentPage: (page: any) => void;
}

export const CampaignsPage: React.FC<CampaignsPageProps> = ({
  language,
  selectedRegion,
  setSelectedRegion,
  participants,
  donations,
  translations,
  campaigns,
  setSelectedCampaign,
  setCurrentPage
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  const getCampaignsWithCounters = () => {
    return campaigns.map(campaign => ({
      ...campaign,
      participants: campaign.participants + participants.filter(p => p.campaignId === campaign.id).length,
      treesAvailable: campaign.treesAvailable + donations.filter(d => d.campaignId === campaign.id).reduce((sum, d) => sum + d.quantity, 0)
    }));
  };

  const campaignsWithCounters = getCampaignsWithCounters();
  const filteredCampaigns = selectedRegion === 'all' 
    ? campaignsWithCounters 
    : campaignsWithCounters.filter(c => c.region === selectedRegion);

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.campaignsTitle}</h2>
          <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full">
            <TreePine className="w-5 h-5 text-green-600" />
            <span className="text-lg font-medium">
              {t.treesPlanted}: <strong className="text-green-600">{campaignsWithCounters.reduce((sum, c) => sum + c.treesAvailable, 0).toLocaleString()}</strong>
            </span>
          </div>
        </div>

        {/* Region Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'جميع المناطق' },
              { key: 'north', label: t.north },
              { key: 'east', label: t.east },
              { key: 'west', label: t.west },
              { key: 'south', label: t.south }
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant={selectedRegion === key ? "default" : "outline"}
                onClick={() => setSelectedRegion(key)}
                className="mb-2"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCampaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={campaign.image}
                  alt={campaign.name[language]}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{campaign.name[language]}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Users className="w-4 h-4" />
                  <span>{t.createdBy}: <strong>{campaign.organizerName}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{t.location}: {campaign.location[language]}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Phone className="w-4 h-4" />
                  <span>{campaign.organizerPhone}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{campaign.description[language]}</p>
                
                {/* Needs Summary */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">{t.campaignNeeds}:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>{campaign.needs.oliveTrees} أشجار زيتون</div>
                    <div>{campaign.needs.tools} أدوات</div>
                    <div>{campaign.needs.volunteers} متطوعون</div>
                  </div>
                </div>

                {/* Counters */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{campaign.participants.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">{t.participants}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{campaign.treesAvailable.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">{t.treesAvailable}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      setSelectedCampaign(campaign);
                      setCurrentPage('register-campaign');
                    }}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    {t.joinCampaignBtn}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSelectedCampaign(campaign);
                      setCurrentPage('donate-trees');
                    }}
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    {t.donateTrees}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSelectedCampaign(campaign);
                      setCurrentPage('campaign-detail');
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {t.viewDetails}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};