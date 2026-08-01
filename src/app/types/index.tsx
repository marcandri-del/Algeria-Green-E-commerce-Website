export type Language = 'ar' | 'fr' | 'en';
export type Page = 'home' | 'store' | 'product' | 'campaigns' | 'campaign-detail' | 'start-campaign' | 'register-campaign' | 'donate-trees' | 'blog' | 'article' | 'contact' | 'cart' | 'checkout' | 'about' | 'privacy';

export interface Product {
  id: number;
  name: { ar: string; fr: string; en: string };
  description: { ar: string; fr: string; en: string };
  price: number;
  category: string;
  subcategory?: string;
  image: string;
  featured?: boolean;
  isPackage?: boolean;
  packageContents?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Campaign {
  id: number;
  name: { ar: string; fr: string; en: string };
  organizerName: string;
  organizerPhone: string;
  location: { ar: string; fr: string; en: string };
  region: string;
  description: { ar: string; fr: string; en: string };
  needs: {
    oliveTrees: number;
    palmTrees: number;
    citrusTrees: number;
    tools: number;
    volunteers: number;
  };
  participants: number;
  treesAvailable: number;
  image: string;
  startDate: string;
}

export interface Participant {
  firstName: string;
  lastName: string;
  age: number;
  wilaya: string;
  phone: string;
  campaignId: number;
}

export interface TreeDonation {
  donorName: string;
  phone: string;
  treeType: string;
  quantity: number;
  campaignId: number;
}

export interface BlogPost {
  id: number;
  title: { ar: string; fr: string; en: string };
  excerpt: { ar: string; fr: string; en: string };
  date: string;
  image: string;
}