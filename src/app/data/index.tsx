import { Product, Campaign, BlogPost } from '../types';

export const algerianWilayas = [
  'أدرار - Adrar', 'الشلف - Chlef', 'الأغواط - Laghouat', 'أم البواقي - Oum El Bouaghi',
  'باتنة - Batna', 'بجاية - Béjaïa', 'بسكرة - Biskra', 'بشار - Béchar',
  'البليدة - Blida', 'البويرة - Bouira', 'تمنراست - Tamanrasset', 'تبسة - Tébessa',
  'تلمسان - Tlemcen', 'تيارت - Tiaret', 'تيزي وزو - Tizi Ouzou', 'الجزائر - Alger',
  'الجلفة - Djelfa', 'جيجل - Jijel', 'سطيف - Sétif', 'سعيدة - Saïda',
  'سكيكدة - Skikda', 'سيدي بلعباس - Sidi Bel Abbès', 'عنابة - Annaba', 'قالمة - Guelma',
  'قسنطينة - Constantine', 'المدية - Médéa', 'مستغانم - Mostaganem', 'المسيلة - M\'Sila',
  'معسكر - Mascara', 'ورقلة - Ouargla', 'وهران - Oran', 'البيض - El Bayadh',
  'إليزي - Illizi', 'برج بوعريريج - Bordj Bou Arréridj', 'بومرداس - Boumerdès',
  'الطارف - El Tarf', 'تندوف - Tindouf', 'تيسمسيلت - Tissemsilt', 'الوادي - El Oued',
  'خنشلة - Khenchela', 'سوق أهراس - Souk Ahras', 'تيبازة - Tipaza', 'ميلة - Mila',
  'عين الدفلى - Aïn Defla', 'النعامة - Naâma', 'عين تموشنت - Aïn Témouchent',
  'غرداية - Ghardaïa', 'غليزان - Relizane', 'تيميمون - Timimoun', 'برج باجي مختار - Bordj Badji Mokhtar',
  'أولاد جلال - Ouled Djellal', 'بني عباس - Béni Abbès', 'إن صالح - In Salah', 'إن قزام - In Guezzam'
];

export const translations = {
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

// Comprehensive product catalog with expanded categories
export const products: Product[] = [
  // FRUIT TREES
  {
    id: 1,
    name: { ar: 'شجرة الزيتون الجزائرية', fr: 'Olivier algérien', en: 'Algerian Olive Tree' },
    description: { ar: 'شجرة زيتون أصيلة من الجزائر مع دليل العناية الكامل', fr: 'Olivier authentique d\'Algérie avec guide d\'entretien complet', en: 'Authentic Algerian olive tree with complete care guide' },
    price: 2500,
    category: 'trees',
    subcategory: 'fruit',
    image: 'https://images.unsplash.com/photo-1753774131150-3ca4173525dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMHRyZWUlMjBwbGFudGluZyUyMG5hdHVyZSUyMGdyZWVufGVufDF8fHx8MTc1NTg3NzU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true
  },
  {
    id: 2,
    name: { ar: 'شجرة الرمان', fr: 'Grenadier', en: 'Pomegranate Tree' },
    description: { ar: 'شجرة رمان عالية الجودة تنتج ثمار حلوة ومغذية', fr: 'Grenadier de haute qualité produisant des fruits sucrés et nutritifs', en: 'High-quality pomegranate tree producing sweet and nutritious fruits' },
    price: 1800,
    category: 'trees',
    subcategory: 'fruit',
    image: 'https://images.unsplash.com/photo-1636634244011-f76ae6d379f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb21lZ3JhbmF0ZSUyMHRyZWUlMjBmcnVpdHN8ZW58MXx8fHwxNzU1ODc3NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: { ar: 'شجرة الحمضيات', fr: 'Agrumes', en: 'Citrus Tree' },
    description: { ar: 'شجرة حمضيات متنوعة (ليمون، برتقال، مندرين)', fr: 'Arbre d\'agrumes variés (citron, orange, mandarine)', en: 'Variety citrus tree (lemon, orange, mandarin)' },
    price: 2200,
    category: 'trees',
    subcategory: 'fruit',
    image: 'https://images.unsplash.com/photo-1636634244011-f76ae6d379f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb21lZ3JhbmF0ZSUyMHRyZWUlMjBmcnVpdHN8ZW58MXx8fHwxNzU1ODc3NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 15,
    name: { ar: 'شجرة التفاح الجبلية', fr: 'Pommier de montagne', en: 'Mountain Apple Tree' },
    description: { ar: 'شجرة تفاح مقاومة للبرد تناسب المناطق الجبلية', fr: 'Pommier résistant au froid adapté aux régions montagneuses', en: 'Cold-resistant apple tree suitable for mountain regions' },
    price: 2800,
    category: 'trees',
    subcategory: 'fruit',
    image: 'https://images.unsplash.com/photo-1729261747934-ac694a08bfba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHRyZWUlMjBmcnVpdCUyMG9yY2hhcmR8ZW58MXx8fHwxNzU1OTM0OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 17,
    name: { ar: 'نخيل التمر الصحراوي', fr: 'Palmier dattier du désert', en: 'Desert Date Palm' },
    description: { ar: 'نخيل تمر مقاوم للجفاف ينتج تمور عالية الجودة', fr: 'Palmier dattier résistant à la sécheresse produisant des dattes de haute qualité', en: 'Drought-resistant date palm producing high-quality dates' },
    price: 4500,
    category: 'trees',
    subcategory: 'fruit',
    image: 'https://images.unsplash.com/photo-1605263556300-b70beb4c433c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRlJTIwcGFsbSUyMHRyZWUlMjBkZXNlcnR8ZW58MXx8fHwxNzU1OTM0OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true
  },

  // ORNAMENTAL TREES
  {
    id: 4,
    name: { ar: 'شجرة النخيل الزينة', fr: 'Palmier d\'ornement', en: 'Ornamental Palm Tree' },
    description: { ar: 'شجرة نخيل مثالية لتزيين الحدائق والشوارع', fr: 'Palmier parfait pour décorer jardins et rues', en: 'Perfect palm tree for decorating gardens and streets' },
    price: 3500,
    category: 'trees',
    subcategory: 'ornamental',
    image: 'https://images.unsplash.com/photo-1740474975320-e3ec719042e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwdHJlZSUyMG9ybmFtZW50YWwlMjBsYW5kc2NhcGluZ3xlbnwxfHx8fDE3NTU4Nzg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true
  },
  {
    id: 18,
    name: { ar: 'شجرة الصنوبر الحلبي', fr: 'Pin d\'Alep', en: 'Aleppo Pine' },
    description: { ar: 'شجرة صنوبر دائمة الخضرة مثالية للحدائق الكبيرة', fr: 'Pin persistant idéal pour les grands jardins', en: 'Evergreen pine tree ideal for large gardens' },
    price: 3200,
    category: 'trees',
    subcategory: 'ornamental',
    image: 'https://images.unsplash.com/photo-1749063808047-cfd0d7f4fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5lJTIwdHJlZSUyMGZvcmVzdCUyMGV2ZXJncmVlbnxlbnwxfHx8fDE3NTU5MzQ5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // MEDICINAL TREES
  {
    id: 5,
    name: { ar: 'شجرة الكاليتوس الطبية', fr: 'Eucalyptus médicinal', en: 'Medicinal Eucalyptus Tree' },
    description: { ar: 'شجرة كاليتوس ذات فوائد طبية وعطرية', fr: 'Eucalyptus aux vertus médicinales et aromatiques', en: 'Eucalyptus with medicinal and aromatic benefits' },
    price: 1500,
    category: 'trees',
    subcategory: 'medicinal',
    image: 'https://images.unsplash.com/photo-1673118857032-f14bee090979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldWNhbHlwdHVzJTIwbWVkaWNpbmFsJTIwdHJlZXxlbnwxfHx8fDE3NTU4Nzg4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // FOREST TREES
  {
    id: 21,
    name: { ar: 'شجرة البلوط الجزائري', fr: 'Chêne algérien', en: 'Algerian Oak' },
    description: { ar: 'شجرة بلوط قوية مثالية لإعادة التشجير', fr: 'Chêne robuste idéal pour le reboisement', en: 'Strong oak tree ideal for reforestation' },
    price: 3800,
    category: 'trees',
    subcategory: 'forest',
    image: 'https://images.unsplash.com/photo-1748360434691-429fd3b4d080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYWslMjB0cmVlJTIwZm9yZXN0JTIwc2hhZGV8ZW58MXx8fHwxNzU1OTM0OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // NUT TREES
  {
    id: 24,
    name: { ar: 'شجرة اللوز المزهرة', fr: 'Amandier en fleurs', en: 'Flowering Almond Tree' },
    description: { ar: 'شجرة لوز جميلة تنتج لوز عالي الجودة', fr: 'Bel amandier produisant des amandes de haute qualité', en: 'Beautiful almond tree producing high-quality almonds' },
    price: 3000,
    category: 'trees',
    subcategory: 'nuts',
    image: 'https://images.unsplash.com/photo-1678015070676-912d9d70954b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmQlMjB0cmVlJTIwbnV0cyUyMGZsb3dlcmluZ3xlbnwxfHx8fDE3NTU5MzQ5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // HAND TOOLS
  {
    id: 6,
    name: { ar: 'مجرفة الحديقة', fr: 'Pelle de jardin', en: 'Garden Shovel' },
    description: { ar: 'مجرفة عالية الجودة للحفر والزراعة', fr: 'Pelle de haute qualité pour creuser et planter', en: 'High-quality shovel for digging and planting' },
    price: 800,
    category: 'tools',
    subcategory: 'hand',
    image: 'https://images.unsplash.com/photo-1705113998946-1eefc7961c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBzaG92ZWwlMjBmYXJtaW5nJTIwdG9vbHN8ZW58MXx8fHwxNzU1ODc4ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 7,
    name: { ar: 'مقص التقليم', fr: 'Sécateur', en: 'Pruning Scissors' },
    description: { ar: 'مقص حاد لتقليم الأشجار والنباتات', fr: 'Sécateur tranchant pour tailler arbres et plantes', en: 'Sharp scissors for pruning trees and plants' },
    price: 650,
    category: 'tools',
    subcategory: 'hand',
    image: 'https://images.unsplash.com/photo-1680124744736-859f16257ef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcnVuaW5nJTIwc2Npc3NvcnMlMjBnYXJkZW4lMjB0b29sc3xlbnwxfHx8fDE3NTU4Nzg4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // POWER TOOLS
  {
    id: 28,
    name: { ar: 'المنشار الكهربائي', fr: 'Tronçonneuse électrique', en: 'Electric Chainsaw' },
    description: { ar: 'منشار كهربائي قوي لتقليم الأشجار الكبيرة', fr: 'Tronçonneuse électrique puissante pour élaguer les grands arbres', en: 'Powerful electric chainsaw for pruning large trees' },
    price: 4500,
    category: 'tools',
    subcategory: 'power',
    image: 'https://images.unsplash.com/photo-1675726061078-01a91334f26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFpbnNhdyUyMHBvd2VyJTIwdG9vbCUyMGZvcmVzdHJ5fGVufDF8fHx8MTc1NTkzNDkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // SOIL & FERTILIZER
  {
    id: 9,
    name: { ar: 'السماد العضوي', fr: 'Compost organique', en: 'Organic Compost' },
    description: { ar: 'سماد عضوي طبيعي 100% لتغذية النباتات', fr: 'Compost organique 100% naturel pour nourrir les plantes', en: '100% natural organic compost to nourish plants' },
    price: 300,
    category: 'tools',
    subcategory: 'soil',
    image: 'https://images.unsplash.com/photo-1712842964271-872137967f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY29tcG9zdCUyMHNvaWwlMjBmZXJ0aWxpemVyfGVufDF8fHx8MTc1NTg3ODg4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // CONTAINERS
  {
    id: 10,
    name: { ar: 'الأصص الفخارية', fr: 'Pots en argile', en: 'Clay Pots' },
    description: { ar: 'مجموعة أصص فخارية بأحجام مختلفة', fr: 'Ensemble de pots en argile de différentes tailles', en: 'Set of clay pots in different sizes' },
    price: 850,
    category: 'tools',
    subcategory: 'containers',
    image: 'https://images.unsplash.com/photo-1644463631941-bf7d80b51d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGF5JTIwcG90cyUyMHBsYW50JTIwY29udGFpbmVyc3xlbnwxfHx8fDE3NTU4Nzg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // IRRIGATION SYSTEMS
  {
    id: 11,
    name: { ar: 'نظام الري بالتنقيط', fr: 'Kit d\'irrigation goutte à goutte', en: 'Drip Irrigation Kit' },
    description: { ar: 'نظام ري متكامل يوفر الماء والوقت', fr: 'Système d\'irrigation complet économisant eau et temps', en: 'Complete irrigation system saving water and time' },
    price: 1200,
    category: 'tools',
    subcategory: 'irrigation',
    image: 'https://images.unsplash.com/photo-1685475188388-2a266e6bd5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlwJTIwaXJyaWdhdGlvbiUyMGdhcmRlbmluZyUyMHN5c3RlbXxlbnwxfHx8fDE3NTU4Nzg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // TREE PLANTING PACKS
  {
    id: 12,
    name: { ar: 'الحزمة الأساسية', fr: 'Pack débutant', en: 'Starter Pack' },
    description: { ar: 'شجرة فاكهة واحدة + مجرفة + سماد عضوي', fr: 'Un arbre fruitier + pelle + engrais organique', en: 'One fruit tree + shovel + organic fertilizer' },
    price: 3500,
    category: 'packs',
    image: 'https://images.unsplash.com/photo-1753774131150-3ca4173525dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMHRyZWUlMjBwbGFudGluZyUyMG5hdHVyZSUyMGdyZWVufGVufDF8fHx8MTc1NTg3NzU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isPackage: true,
    packageContents: ['شجرة فاكهة', 'مجرفة', 'سماد عضوي'],
    featured: true
  },
  {
    id: 13,
    name: { ar: 'حزمة العائلة', fr: 'Pack famille', en: 'Family Pack' },
    description: { ar: '3 أشجار (زيتون، حمضيات، نخيل) + محراث + إبريق ري + كيس تربة', fr: '3 arbres (olive, agrumes, palmier) + houe + arrosoir + sac de terre', en: '3 trees (olive, citrus, palm) + hoe + watering can + soil bag' },
    price: 8500,
    category: 'packs',
    image: 'https://images.unsplash.com/photo-1711675077933-6d141bee2fc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBjYW1wYWlnbiUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzU1ODc4ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isPackage: true,
    packageContents: ['شجرة زيتون', 'شجرة حمضيات', 'شجرة نخيل', 'محراث', 'إبريق ري', 'كيس تربة'],
    featured: true
  },
  {
    id: 14,
    name: { ar: 'حزمة المجتمع', fr: 'Pack communauté', en: 'Community Pack' },
    description: { ar: '10 أشجار + مجموعة أدوات كاملة + نظام ري', fr: '10 arbres + kit d\'outils complet + système d\'irrigation', en: '10 trees + complete tool kit + irrigation system' },
    price: 25000,
    category: 'packs',
    image: 'https://images.unsplash.com/photo-1576240618320-279baa42212a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB0cmVlJTIwcGxhbnRpbmclMjBBbGdlcmlhfGVufDF8fHx8MTc1NTg3ODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    isPackage: true,
    packageContents: ['10 أشجار متنوعة', 'مجموعة أدوات كاملة', 'نظام ري بالتنقيط', 'أسمدة عضوية'],
    featured: true
  }
];

export const campaigns: Campaign[] = [
  {
    id: 1,
    name: { ar: 'مليون شجرة للجزائر', fr: 'Un million d\'arbres pour l\'Algérie', en: 'One Million Trees for Algeria' },
    organizerName: 'أحمد بن علي',
    organizerPhone: '+213 555 123 456',
    location: { ar: 'الجزائر العاصمة', fr: 'Alger', en: 'Algiers' },
    region: 'north',
    description: { ar: 'حملة وطنية لزراعة مليون شجرة في جميع أنحاء الجزائر', fr: 'Campagne nationale pour planter un million d\'arbres à travers l\'Algérie', en: 'National campaign to plant one million trees across Algeria' },
    needs: {
      oliveTrees: 500,
      palmTrees: 200,
      citrusTrees: 300,
      tools: 50,
      volunteers: 100
    },
    participants: 1245,
    treesAvailable: 850,
    image: 'https://images.unsplash.com/photo-1721720732045-7a3704a8e2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMHBsYW50aW5nJTIwb2xpdmUlMjB0cmVlJTIwQWxnZXJpYSUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc1NTg3NzU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2024-03-15'
  },
  {
    id: 2,
    name: { ar: 'غابات قسنطينة الخضراء', fr: 'Forêts vertes de Constantine', en: 'Green Forests of Constantine' },
    organizerName: 'فاطمة الزهراء',
    organizerPhone: '+213 555 987 654',
    location: { ar: 'قسنطينة', fr: 'Constantine', en: 'Constantine' },
    region: 'east',
    description: { ar: 'مبادرة لإعادة تشجير المناطق المتضررة حول قسنطينة', fr: 'Initiative de reboisement des zones dégradées autour de Constantine', en: 'Reforestation initiative for degraded areas around Constantine' },
    needs: {
      oliveTrees: 200,
      palmTrees: 100,
      citrusTrees: 150,
      tools: 30,
      volunteers: 75
    },
    participants: 687,
    treesAvailable: 320,
    image: 'https://images.unsplash.com/photo-1711675077933-6d141bee2fc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBjYW1wYWlnbiUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzU1ODc4ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2024-04-01'
  },
  {
    id: 3,
    name: { ar: 'واحات وهران المستدامة', fr: 'Oasis durables d\'Oran', en: 'Sustainable Oases of Oran' },
    organizerName: 'محمد الأمين',
    organizerPhone: '+213 555 456 789',
    location: { ar: 'وهران', fr: 'Oran', en: 'Oran' },
    region: 'west',
    description: { ar: 'مشروع لإنشاء واحات خضراء في المناطق الحضرية بوهران', fr: 'Projet de création d\'oasis vertes dans les zones urbaines d\'Oran', en: 'Project to create green oases in urban areas of Oran' },
    needs: {
      oliveTrees: 150,
      palmTrees: 250,
      citrusTrees: 100,
      tools: 25,
      volunteers: 60
    },
    participants: 423,
    treesAvailable: 180,
    image: 'https://images.unsplash.com/photo-1576240618320-279baa42212a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB0cmVlJTIwcGxhbnRpbmclMjBBbGdlcmlhfGVufDF8fHx8MTc1NTg3ODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    startDate: '2024-04-20'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: { ar: 'أفضل 5 أشجار فاكهة لحديقتك', fr: 'Top 5 des arbres fruitiers pour votre jardin', en: 'Top 5 Fruit Trees for Your Garden' },
    excerpt: { ar: 'اكتشف أفضل أشجار الفاكهة التي تنمو بشكل مثالي في المناخ الجزائري', fr: 'Découvrez les meilleurs arbres fruitiers qui poussent parfaitement dans le climat algérien', en: 'Discover the best fruit trees that grow perfectly in the Algerian climate' },
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1636634244011-f76ae6d379f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb21lZ3JhbmF0ZSUyMHRyZWUlMjBmcnVpdHN8ZW58MXx8fHwxNzU1ODc3NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];