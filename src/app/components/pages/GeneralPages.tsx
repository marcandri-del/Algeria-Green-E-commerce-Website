import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { ChevronRight } from 'lucide-react';
import { Language } from '../../types';

// Blog Section
interface BlogSectionProps {
  language: Language;
  translations: any;
  blogPosts: any[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ language, translations, blogPosts }) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.blogTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{post.title[language]}</h3>
                <p className="text-gray-600 text-sm mb-3">{post.excerpt[language]}</p>
                <Button variant="outline" size="sm">
                  {t.readMore}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Section
interface ContactSectionProps {
  language: Language;
  translations: any;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, translations }) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.contact}</h2>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">{t.name}</Label>
                <Input id="name" placeholder={t.name} />
              </div>
              <div>
                <Label htmlFor="phone">{t.phone}</Label>
                <Input id="phone" placeholder={t.phone} />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="message">رسالة</Label>
              <Textarea id="message" placeholder="اكتب رسالتك هنا..." rows={4} />
            </div>
            <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
              إرسال الرسالة
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};