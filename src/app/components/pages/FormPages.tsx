import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { SuccessMessage } from '../SuccessMessage';
import { ArrowLeft, UserPlus, Gift, Plus, Check } from 'lucide-react';
import { Language, Campaign, Participant, TreeDonation } from '../../types';

// Campaign Registration Page
interface CampaignRegistrationPageProps {
  language: Language;
  selectedCampaign: Campaign | null;
  showRegistrationSuccess: boolean;
  setCurrentPage: (page: any) => void;
  translations: any;
  algerianWilayas: string[];
  handleRegistration: (formData: any) => void;
}

export const CampaignRegistrationPage: React.FC<CampaignRegistrationPageProps> = ({
  language,
  selectedCampaign,
  showRegistrationSuccess,
  setCurrentPage,
  translations,
  algerianWilayas,
  handleRegistration
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    wilaya: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRegistration(formData);
  };

  if (showRegistrationSuccess) {
    return (
      <SuccessMessage
        icon={<Check className="w-full h-full" />}
        title={t.registrationSuccess}
        message="ستتم إضافتك إلى قائمة المشاركين قريباً"
      />
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="outline" 
          onClick={() => setCurrentPage('campaigns')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.back}
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t.registrationForm}</CardTitle>
            <CardDescription>
              التسجيل في حملة: {selectedCampaign?.name[language]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t.firstName}</Label>
                  <Input 
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">{t.lastName}</Label>
                  <Input 
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">{t.age}</Label>
                  <Input 
                    id="age"
                    type="number"
                    min="16"
                    max="100"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="wilaya">{t.wilaya}</Label>
                  <Select value={formData.wilaya} onValueChange={(value) => setFormData({...formData, wilaya: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الولاية" />
                    </SelectTrigger>
                    <SelectContent>
                      {algerianWilayas.map((wilaya) => (
                        <SelectItem key={wilaya} value={wilaya}>
                          {wilaya}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="phone">{t.phoneNumber}</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+213 XXX XXX XXX"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <UserPlus className="w-4 h-4 mr-2" />
                {t.submitRegistration}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Tree Donation Page
interface TreeDonationPageProps {
  language: Language;
  selectedCampaign: Campaign | null;
  showDonationSuccess: boolean;
  setCurrentPage: (page: any) => void;
  translations: any;
  handleDonation: (formData: any) => void;
}

export const TreeDonationPage: React.FC<TreeDonationPageProps> = ({
  language,
  selectedCampaign,
  showDonationSuccess,
  setCurrentPage,
  translations,
  handleDonation
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';
  
  const [formData, setFormData] = useState({
    donorName: '',
    phone: '',
    treeType: '',
    quantity: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDonation(formData);
  };

  if (showDonationSuccess) {
    return (
      <SuccessMessage
        icon={<Gift className="w-full h-full" />}
        title={t.donationSuccess}
        message="تبرعك سيساعد في إنجاح هذه الحملة"
      />
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="outline" 
          onClick={() => setCurrentPage('campaigns')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.back}
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t.donationForm}</CardTitle>
            <CardDescription>
              التبرع لحملة: {selectedCampaign?.name[language]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="donorName">{t.donorName}</Label>
                <Input 
                  id="donorName"
                  value={formData.donorName}
                  onChange={(e) => setFormData({...formData, donorName: e.target.value})}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">{t.phoneNumber}</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+213 XXX XXX XXX"
                  required
                />
              </div>
              <div>
                <Label htmlFor="treeType">{t.treeType}</Label>
                <Select value={formData.treeType} onValueChange={(value) => setFormData({...formData, treeType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع الشجرة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="olive">شجرة الزيتون</SelectItem>
                    <SelectItem value="palm">شجرة النخيل</SelectItem>
                    <SelectItem value="citrus">شجرة الحمضيات</SelectItem>
                    <SelectItem value="pomegranate">شجرة الرمان</SelectItem>
                    <SelectItem value="eucalyptus">شجرة الكاليتوس</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="quantity">{t.quantity}</Label>
                <Input 
                  id="quantity"
                  type="number"
                  min="1"
                  max="100"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <Gift className="w-4 h-4 mr-2" />
                {t.submitDonation}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Start Campaign Page
interface StartCampaignPageProps {
  language: Language;
  translations: any;
  algerianWilayas: string[];
}

export const StartCampaignPage: React.FC<StartCampaignPageProps> = ({
  language,
  translations,
  algerianWilayas
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.startCampaign}</h2>
          <p className="text-lg text-gray-600">ابدأ حملتك الخاصة لزراعة الأشجار في منطقتك</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div>
                <Label htmlFor="campaignName">اسم الحملة</Label>
                <Input id="campaignName" placeholder="أدخل اسم الحملة" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="organizerName">اسم المنظم</Label>
                  <Input id="organizerName" placeholder="اسمك الكامل" />
                </div>
                <div>
                  <Label htmlFor="organizerPhone">رقم الهاتف</Label>
                  <Input id="organizerPhone" placeholder="+213 XXX XXX XXX" />
                </div>
              </div>

              <div>
                <Label htmlFor="location">موقع الحملة</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الولاية" />
                  </SelectTrigger>
                  <SelectContent>
                    {algerianWilayas.map((wilaya) => (
                      <SelectItem key={wilaya} value={wilaya}>
                        {wilaya}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">وصف الحملة</Label>
                <Textarea 
                  id="description" 
                  placeholder="اكتب وصفاً تفصيلياً لحملتك..." 
                  rows={4} 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="oliveTrees">أشجار الزيتون المطلوبة</Label>
                  <Input id="oliveTrees" type="number" placeholder="عدد الأشجار" />
                </div>
                <div>
                  <Label htmlFor="tools">الأدوات المطلوبة</Label>
                  <Input id="tools" type="number" placeholder="عدد الأدوات" />
                </div>
                <div>
                  <Label htmlFor="volunteers">المتطوعون المطلوبون</Label>
                  <Input id="volunteers" type="number" placeholder="عدد المتطوعين" />
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                إنشاء الحملة
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};