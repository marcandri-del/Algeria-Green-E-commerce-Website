import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ArrowLeft, Users, MapPin, Phone, Clock, UserPlus, Gift } from 'lucide-react';
import { Language, Page, Product, CartItem, Campaign, Participant, TreeDonation } from './types/index';
import { campaigns, products, blogPosts, algerianWilayas } from './data/index';

// Inline translations to fix import issue
const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    store: 'المتجر',
    campaigns: 'الحملات',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    about: 'من نحن',
    startCampaign: 'ابدأ حملة',
    viewCampaigns: 'عرض الحملات',
    register: 'سجل',
    donate: 'تبرع',
    // Hero
    heroTitle: 'الجزائر الخضراء',
    heroSlogan: 'كل غرسة... أمل للجزائر',
    heroDescription: 'انضم إلينا في زراعة مستقبل أخضر للجزائر. اكتشف أشجار الفاكهة والنباتات الطبيعية والأدوات الزراعية',
    shopNow: 'تسوق الآن',
    joinCampaign: 'انضم للحملة',
    // Store Categories - Trees
    categories: 'الفئات',
    trees: 'الأشجار',
    fruitTrees: 'أشجار الفاكهة',
    ornamentalTrees: 'أشجار الزينة',
    medicinalTrees: 'الأشجار الطبية',
    forestTrees: 'أشجار الغابات',
    shadeTrees: 'أشجار الظل',
    nutTrees: 'أشجار المكسرات',
    // Store Categories - Tools
    tools: 'الأدوات',
    handTools: 'الأدوات اليدوية',
    powerTools: 'الأدوات الكهربائية',
    soilFertilizer: 'التربة والأسمدة',
    containers: 'الأصص والحاويات',
    irrigationSystems: 'أنظمة الري',
    protection: 'الحماية والرعاية',
    plantingPacks: 'حزم الزراعة',
    addToCart: 'أضف للسلة',
    // Campaigns
    campaignsTitle: 'حملاتنا البيئية',
    treesPlanted: 'الأشجار المزروعة معنا',
    createdBy: 'أنشأها',
    location: 'الموقع',
    participants: 'المشاركون',
    treesAvailable: 'الأشجار المتاحة',
    joinCampaignBtn: 'انضم للحملة',
    donateTrees: 'تبرع بالأشجار',
    viewDetails: 'عرض التفاصيل',
    campaignNeeds: 'احتياجات الحملة',
    // Regions
    north: 'الشمال',
    east: 'الشرق',
    west: 'الغرب',
    south: 'الجنوب',
    // Forms
    registrationForm: 'نموذج التسجيل',
    donationForm: 'نموذج التبرع',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    age: 'العمر',
    wilaya: 'الولاية',
    phoneNumber: 'رقم الهاتف',
    donorName: 'اسم المتبرع',
    treeType: 'نوع الشجرة',
    quantity: 'الكمية',
    submitRegistration: 'إرسال التسجيل',
    submitDonation: 'إرسال التبرع',
    registrationSuccess: 'شكراً لانضمامك لهذه الحملة!',
    donationSuccess: 'شكراً لتبرعك!',
    // Blog
    blogTitle: 'مدونة المعرفة',
    readMore: 'اقرأ المزيد',
    // Footer
    quickLinks: 'روابط سريعة',
    followUs: 'تابعنا',
    footerSlogan: 'الجزائر الخضراء - كل شجرة أمل',
    // Cart & Checkout
    cart: 'السلة',
    checkout: 'الدفع',
    total: 'المجموع',
    name: 'الاسم',
    phone: 'الهاتف',
    address: 'العنوان',
    cashOnDelivery: 'الدفع عند التسليم',
    placeOrder: 'تأكيد الطلب',
    fastDelivery: 'توصيل سريع في جميع أنحاء الجزائر',
    // Common
    price: 'السعر',
    dz: 'د.ج',
    back: 'رجوع',
    close: 'إغلاق',
    submit: 'إرسال'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    store: 'Boutique',
    campaigns: 'Campagnes',
    blog: 'Blog',
    contact: 'Contact',
    about: 'À propos',
    startCampaign: 'Créer une campagne',
    viewCampaigns: 'Voir les campagnes',
    register: 'S\'inscrire',
    donate: 'Faire un don',
    // Hero
    heroTitle: 'Algérie Verte',
    heroSlogan: 'Chaque arbre, un espoir pour l\'Algérie',
    heroDescription: 'Rejoignez-nous pour planter un avenir vert pour l\'Algérie. Découvrez nos arbres fruitiers, plantes naturelles et outils de jardinage',
    shopNow: 'Acheter maintenant',
    joinCampaign: 'Rejoindre une campagne',
    // Store Categories - Trees
    categories: 'Catégories',
    trees: 'Arbres',
    fruitTrees: 'Arbres fruitiers',
    ornamentalTrees: 'Arbres d\'ornement',
    medicinalTrees: 'Arbres médicinaux',
    forestTrees: 'Arbres forestiers',
    shadeTrees: 'Arbres d\'ombrage',
    nutTrees: 'Arbres à noix',
    // Store Categories - Tools
    tools: 'Outils',
    handTools: 'Outils à main',
    powerTools: 'Outils électriques',
    soilFertilizer: 'Sol et engrais',
    containers: 'Pots et contenants',
    irrigationSystems: 'Systèmes d\'irrigation',
    protection: 'Protection et soins',
    plantingPacks: 'Packs de plantation',
    addToCart: 'Ajouter au panier',
    // Campaigns
    campaignsTitle: 'Nos campagnes environnementales',
    treesPlanted: 'Arbres plantés avec nous',
    createdBy: 'Créée par',
    location: 'Lieu',
    participants: 'Participants',
    treesAvailable: 'Arbres disponibles',
    joinCampaignBtn: 'Rejoindre la campagne',
    donateTrees: 'Faire don d\'arbres',
    viewDetails: 'Voir les détails',
    campaignNeeds: 'Besoins de la campagne',
    // Regions
    north: 'Nord',
    east: 'Est',
    west: 'Ouest',
    south: 'Sud',
    // Forms
    registrationForm: 'Formulaire d\'inscription',
    donationForm: 'Formulaire de don',
    firstName: 'Prénom',
    lastName: 'Nom de famille',
    age: 'Âge',
    wilaya: 'Wilaya',
    phoneNumber: 'Numéro de téléphone',
    donorName: 'Nom du donateur',
    treeType: 'Type d\'arbre',
    quantity: 'Quantité',
    submitRegistration: 'Soumettre l\'inscription',
    submitDonation: 'Soumettre le don',
    registrationSuccess: 'Merci de rejoindre cette campagne!',
    donationSuccess: 'Merci pour votre don!',
    // Blog
    blogTitle: 'Blog de connaissances',
    readMore: 'Lire plus',
    // Footer
    quickLinks: 'Liens rapides',
    followUs: 'Suivez-nous',
    footerSlogan: 'Algérie Verte - Chaque arbre est un espoir',
    // Cart & Checkout
    cart: 'Panier',
    checkout: 'Commander',
    total: 'Total',
    name: 'Nom',
    phone: 'Téléphone',
    address: 'Adresse',
    cashOnDelivery: 'Paiement à la livraison',
    placeOrder: 'Passer commande',
    fastDelivery: 'Livraison rapide partout en Algérie',
    // Common
    price: 'Prix',
    dz: 'DA',
    back: 'Retour',
    close: 'Fermer',
    submit: 'Soumettre'
  },
  en: {
    // Navigation
    home: 'Home',
    store: 'Store',
    campaigns: 'Campaigns',
    blog: 'Blog',
    contact: 'Contact',
    about: 'About',
    startCampaign: 'Start Campaign',
    viewCampaigns: 'View Campaigns',
    register: 'Register',
    donate: 'Donate',
    // Hero
    heroTitle: 'Algeria Green',
    heroSlogan: 'Every tree, a new hope for Algeria',
    heroDescription: 'Join us in planting a green future for Algeria. Discover fruit trees, natural plants, and farming tools',
    shopNow: 'Shop Now',
    joinCampaign: 'Join a Campaign',
    // Store Categories - Trees
    categories: 'Categories',
    trees: 'Trees',
    fruitTrees: 'Fruit Trees',
    ornamentalTrees: 'Ornamental Trees',
    medicinalTrees: 'Medicinal Trees',
    forestTrees: 'Forest Trees',
    shadeTrees: 'Shade Trees',
    nutTrees: 'Nut Trees',
    // Store Categories - Tools
    tools: 'Tools',
    handTools: 'Hand Tools',
    powerTools: 'Power Tools',
    soilFertilizer: 'Soil & Fertilizer',
    containers: 'Pots & Containers',
    irrigationSystems: 'Irrigation Systems',
    protection: 'Protection & Care',
    plantingPacks: 'Tree Planting Packs',
    addToCart: 'Add to Cart',
    // Campaigns
    campaignsTitle: 'Our Environmental Campaigns',
    treesPlanted: 'Trees planted with us so far',
    createdBy: 'Created by',
    location: 'Location',
    participants: 'Participants',
    treesAvailable: 'Trees available',
    joinCampaignBtn: 'Join Campaign',
    donateTrees: 'Donate Trees',
    viewDetails: 'View Details',
    campaignNeeds: 'Campaign Needs',
    // Regions
    north: 'North',
    east: 'East',
    west: 'West',
    south: 'South',
    // Forms
    registrationForm: 'Registration Form',
    donationForm: 'Donation Form',
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    wilaya: 'Wilaya',
    phoneNumber: 'Phone Number',
    donorName: 'Donor Name',
    treeType: 'Tree Type',
    quantity: 'Quantity',
    submitRegistration: 'Submit Registration',
    submitDonation: 'Submit Donation',
    registrationSuccess: 'Thank you for joining this campaign!',
    donationSuccess: 'Thank you for your donation!',
    // Blog
    blogTitle: 'Knowledge Blog',
    readMore: 'Read More',
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    footerSlogan: 'Algeria Green - Every tree is a hope',
    // Cart & Checkout
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    name: 'Name',
    phone: 'Phone',
    address: 'Address',
    cashOnDelivery: 'Cash on Delivery',
    placeOrder: 'Place Order',
    fastDelivery: 'Fast delivery across Algeria',
    // Common
    price: 'Price',
    dz: 'DZD',
    back: 'Back',
    close: 'Close',
    submit: 'Submit'
  }
};

// Component imports
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import { StorePage } from './components/pages/StorePage';
import { CampaignsPage } from './components/pages/CampaignsPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { CartPage } from './components/pages/CartPage';
import { CheckoutPage } from './components/pages/CheckoutPage';
import { BlogSection, ContactSection } from './components/pages/GeneralPages';
import { 
  CampaignRegistrationPage, 
  TreeDonationPage, 
  StartCampaignPage 
} from './components/pages/FormPages';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('ar');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [donations, setDonations] = useState<TreeDonation[]>([]);
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false);
  const [showDonationSuccess, setShowDonationSuccess] = useState(false);

  const t = translations[language];
  const isRTL = language === 'ar';

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev => prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleRegistration = (formData: any) => {
    const newParticipant: Participant = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: parseInt(formData.age),
      wilaya: formData.wilaya,
      phone: formData.phone,
      campaignId: selectedCampaign?.id || 0
    };
    setParticipants(prev => [...prev, newParticipant]);
    setShowRegistrationSuccess(true);
    setTimeout(() => {
      setShowRegistrationSuccess(false);
      setCurrentPage('campaigns');
    }, 2000);
  };

  const handleDonation = (formData: any) => {
    const newDonation: TreeDonation = {
      donorName: formData.donorName,
      phone: formData.phone,
      treeType: formData.treeType,
      quantity: parseInt(formData.quantity),
      campaignId: selectedCampaign?.id || 0
    };
    setDonations(prev => [...prev, newDonation]);
    setShowDonationSuccess(true);
    setTimeout(() => {
      setShowDonationSuccess(false);
      setCurrentPage('campaigns');
    }, 2000);
  };

  const getCampaignsWithCounters = () => {
    return campaigns.map(campaign => ({
      ...campaign,
      participants: campaign.participants + participants.filter(p => p.campaignId === campaign.id).length,
      treesAvailable: campaign.treesAvailable + donations.filter(d => d.campaignId === campaign.id).reduce((sum, d) => sum + d.quantity, 0)
    }));
  };

  const CampaignDetailPage = () => {
    if (!selectedCampaign) return null;

    const campaignWithCounters = getCampaignsWithCounters().find(c => c.id === selectedCampaign.id) || selectedCampaign;

    return (
      <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="outline" 
            onClick={() => setCurrentPage('campaigns')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.back}
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={campaignWithCounters.image}
                    alt={campaignWithCounters.name[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h1 className="text-3xl font-bold mb-4">{campaignWithCounters.name[language]}</h1>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium">{campaignWithCounters.organizerName}</div>
                        <div className="text-sm text-gray-600">منظم الحملة</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium">{campaignWithCounters.location[language]}</div>
                        <div className="text-sm text-gray-600">موقع الحملة</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium">{campaignWithCounters.organizerPhone}</div>
                        <div className="text-sm text-gray-600">رقم التواصل</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium">15 مارس 2024</div>
                        <div className="text-sm text-gray-600">تاريخ البداية</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{campaignWithCounters.description[language]}</p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">احتياجات الحملة التفصيلية:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{campaignWithCounters.needs.oliveTrees}</div>
                        <div className="text-sm">أشجار زيتون</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{campaignWithCounters.needs.palmTrees}</div>
                        <div className="text-sm">أشجار نخيل</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{campaignWithCounters.needs.citrusTrees}</div>
                        <div className="text-sm">أشجار حمضيات</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{campaignWithCounters.needs.tools}</div>
                        <div className="text-sm">أدوات زراعة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{campaignWithCounters.needs.volunteers}</div>
                        <div className="text-sm">متطوعون</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>إحصائيات مباشرة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">{campaignWithCounters.participants.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">{t.participants}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">{campaignWithCounters.treesAvailable.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">{t.treesAvailable}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => setCurrentPage('register-campaign')}
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  {t.joinCampaignBtn}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setCurrentPage('donate-trees')}
                >
                  <Gift className="w-4 h-4 mr-2" />
                  {t.donateTrees}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'store':
        return <StorePage 
          language={language}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSelectedProduct={setSelectedProduct}
          setCurrentPage={setCurrentPage}
          translations={translations}
          products={products}
          addToCart={addToCart}
        />;
      case 'product':
        return <ProductDetailPage 
          language={language}
          selectedProduct={selectedProduct}
          setCurrentPage={setCurrentPage}
          translations={translations}
          addToCart={addToCart}
        />;
      case 'campaigns':
        return <CampaignsPage
          language={language}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          participants={participants}
          donations={donations}
          translations={translations}
          campaigns={campaigns}
          setSelectedCampaign={setSelectedCampaign}
          setCurrentPage={setCurrentPage}
        />;
      case 'campaign-detail':
        return <CampaignDetailPage />;
      case 'start-campaign':
        return <StartCampaignPage language={language} translations={translations} algerianWilayas={algerianWilayas} />;
      case 'register-campaign':
        return <CampaignRegistrationPage 
          language={language}
          selectedCampaign={selectedCampaign}
          showRegistrationSuccess={showRegistrationSuccess}
          setCurrentPage={setCurrentPage}
          translations={translations}
          algerianWilayas={algerianWilayas}
          handleRegistration={handleRegistration}
        />;
      case 'donate-trees':
        return <TreeDonationPage 
          language={language}
          selectedCampaign={selectedCampaign}
          showDonationSuccess={showDonationSuccess}
          setCurrentPage={setCurrentPage}
          translations={translations}
          handleDonation={handleDonation}
        />;
      case 'blog':
        return <BlogSection language={language} translations={translations} blogPosts={blogPosts} />;
      case 'contact':
        return <ContactSection language={language} translations={translations} />;
      case 'cart':
        return <CartPage 
          language={language}
          cart={cart}
          cartTotal={cartTotal}
          setCurrentPage={setCurrentPage}
          translations={translations}
          updateCartQuantity={updateCartQuantity}
        />;
      case 'checkout':
        return <CheckoutPage 
          language={language}
          cart={cart}
          cartTotal={cartTotal}
          translations={translations}
        />;
      default:
        return <HeroSection language={language} translations={translations} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen ${isRTL ? 'dir-rtl' : 'dir-ltr'}`}>
      <Navigation
        currentPage={currentPage}
        language={language}
        cart={cart}
        translations={translations}
        setCurrentPage={setCurrentPage}
        setLanguage={setLanguage}
      />
      
      {renderPage()}
      
      <Footer
        language={language}
        participants={participants}
        donations={donations}
        campaigns={campaigns}
        translations={translations}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}