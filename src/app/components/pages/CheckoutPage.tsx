import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Truck, Check } from 'lucide-react';
import { Language, CartItem } from '../../types';

interface CheckoutPageProps {
  language: Language;
  cart: CartItem[];
  cartTotal: number;
  translations: any;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  language,
  cart,
  cartTotal,
  translations
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.checkout}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>معلومات التوصيل</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">{t.name}</Label>
                <Input id="name" placeholder={t.name} />
              </div>
              <div>
                <Label htmlFor="phone">{t.phone}</Label>
                <Input id="phone" placeholder={t.phone} />
              </div>
              <div>
                <Label htmlFor="address">{t.address}</Label>
                <Textarea id="address" placeholder={t.address} rows={3} />
              </div>
              <div>
                <Label htmlFor="payment">طريقة الدفع</Label>
                <Select defaultValue="cod">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cod">{t.cashOnDelivery}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ملخص الطلب</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name[language]} x{item.quantity}</span>
                    <span>{(item.price * item.quantity).toLocaleString()} {t.dz}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-2 mt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>{t.total}</span>
                  <span className="text-green-600">{cartTotal.toLocaleString()} {t.dz}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
                <Truck className="w-4 h-4" />
                {t.fastDelivery}
              </div>
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                <Check className="w-4 h-4 mr-2" />
                {t.placeOrder}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};