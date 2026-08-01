import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Language, CartItem } from '../../types';

interface CartPageProps {
  language: Language;
  cart: CartItem[];
  cartTotal: number;
  setCurrentPage: (page: any) => void;
  translations: any;
  updateCartQuantity: (id: number, quantity: number) => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  language,
  cart,
  cartTotal,
  setCurrentPage,
  translations,
  updateCartQuantity
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.cart}</h2>

        {cart.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">السلة فارغة</p>
              <Button 
                className="mt-4 bg-green-600 hover:bg-green-700"
                onClick={() => setCurrentPage('store')}
              >
                تصفح المنتجات
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name[language]}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-bold">{item.name[language]}</h3>
                        <p className="text-green-600 font-bold">{item.price.toLocaleString()} {t.dz}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-4">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>{t.total}</span>
                  <span className="text-green-600">{cartTotal.toLocaleString()} {t.dz}</span>
                </div>
                <Button 
                  className="w-full mt-4 bg-green-600 hover:bg-green-700"
                  onClick={() => setCurrentPage('checkout')}
                >
                  {t.checkout}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};