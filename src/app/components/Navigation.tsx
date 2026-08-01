import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { NewAlgeriaGreenLogo } from './NewAlgeriaGreenLogo';
import { 
  ShoppingCart, 
  Home,
  Users,
  BookOpen,
  Contact,
  ChevronDown,
  Eye,
  UserPlus
} from 'lucide-react';
import { Language, Page, CartItem } from '../types';

interface NavigationProps {
  currentPage: Page;
  language: Language;
  cart: CartItem[];
  translations: any;
  setCurrentPage: (page: Page) => void;
  setLanguage: (language: Language) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  language,
  cart,
  translations,
  setCurrentPage,
  setLanguage
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  const LanguageSwitcher = () => (
    <div className="flex gap-2">
      {(['ar', 'fr', 'en'] as Language[]).map((lang) => (
        <Button
          key={lang}
          variant={language === lang ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage(lang)}
          className="min-w-[40px]"
        >
          {lang === 'ar' ? 'ع' : lang.toUpperCase()}
        </Button>
      ))}
    </div>
  );

  return (
    <nav className={`bg-white shadow-sm border-b sticky top-0 z-50 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <NewAlgeriaGreenLogo 
              size={40} 
              className="mr-3"
            />
            <div>
              <h1 className="text-lg font-bold text-green-700">{t.heroTitle}</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm ${
                currentPage === 'home' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>{t.home}</span>
            </button>

            <button
              onClick={() => setCurrentPage('store')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm ${
                currentPage === 'store' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{t.store}</span>
            </button>

            {/* Campaigns Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm ${
                    currentPage === 'campaigns' || currentPage === 'start-campaign'
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>{t.campaigns}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem 
                  onClick={() => setCurrentPage('campaigns')}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{t.viewCampaigns}</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setCurrentPage('start-campaign')}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{t.startCampaign}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setCurrentPage('blog')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm ${
                currentPage === 'blog' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.blog}</span>
            </button>

            <button
              onClick={() => setCurrentPage('contact')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm ${
                currentPage === 'contact' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <Contact className="w-4 h-4" />
              <span>{t.contact}</span>
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage('cart')}
              className="relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </Badge>
              )}
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};