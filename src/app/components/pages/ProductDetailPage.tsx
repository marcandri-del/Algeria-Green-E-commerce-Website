import React from 'react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Check, Plus, Truck } from 'lucide-react';
import { Language, Product } from '../../types';

interface ProductDetailPageProps {
  language: Language;
  selectedProduct: Product | null;
  setCurrentPage: (page: any) => void;
  translations: any;
  addToCart: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  language,
  selectedProduct,
  setCurrentPage,
  translations,
  addToCart
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  if (!selectedProduct) return null;

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="outline" 
          onClick={() => setCurrentPage('store')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.back}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-square overflow-hidden rounded-lg">
            <ImageWithFallback
              src={selectedProduct.image}
              alt={selectedProduct.name[language]}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{selectedProduct.name[language]}</h1>
            <p className="text-gray-600 mb-6">{selectedProduct.description[language]}</p>
            
            {selectedProduct.isPackage && selectedProduct.packageContents && (
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">محتويات الحزمة:</h3>
                <ul className="space-y-2">
                  {selectedProduct.packageContents.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-green-600">
                {selectedProduct.price.toLocaleString()} {t.dz}
              </span>
            </div>

            <Button 
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 mb-4"
              onClick={() => addToCart(selectedProduct)}
            >
              <Plus className="w-5 h-5 mr-2" />
              {t.addToCart}
            </Button>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck className="w-4 h-4" />
              {t.fastDelivery}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};