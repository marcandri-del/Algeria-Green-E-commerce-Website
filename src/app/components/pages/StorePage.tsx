import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  TreePine,
  Wrench,
  Package,
  Zap,
  Star,
  Plus,
  Check
} from 'lucide-react';
import { Language, Product, CartItem } from '../../types';

interface StorePageProps {
  language: Language;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setSelectedProduct: (product: Product) => void;
  setCurrentPage: (page: any) => void;
  translations: any;
  products: Product[];
  addToCart: (product: Product) => void;
}

export const StorePage: React.FC<StorePageProps> = ({
  language,
  selectedCategory,
  setSelectedCategory,
  setSelectedProduct,
  setCurrentPage,
  translations,
  products,
  addToCart
}) => {
  const t = translations[language];
  const isRTL = language === 'ar';

  const getFilteredProducts = () => {
    if (selectedCategory === 'all') return products;
    // Trees - Main category
    if (selectedCategory === 'trees') return products.filter(p => p.category === 'trees');
    // Trees - Subcategories
    if (selectedCategory === 'fruit') return products.filter(p => p.category === 'trees' && p.subcategory === 'fruit');
    if (selectedCategory === 'ornamental') return products.filter(p => p.category === 'trees' && p.subcategory === 'ornamental');
    if (selectedCategory === 'medicinal') return products.filter(p => p.category === 'trees' && p.subcategory === 'medicinal');
    if (selectedCategory === 'forest') return products.filter(p => p.category === 'trees' && p.subcategory === 'forest');
    if (selectedCategory === 'shade') return products.filter(p => p.category === 'trees' && p.subcategory === 'shade');
    if (selectedCategory === 'nuts') return products.filter(p => p.category === 'trees' && p.subcategory === 'nuts');
    // Tools - Main category
    if (selectedCategory === 'tools') return products.filter(p => p.category === 'tools');
    // Tools - Subcategories
    if (selectedCategory === 'hand') return products.filter(p => p.category === 'tools' && p.subcategory === 'hand');
    if (selectedCategory === 'power') return products.filter(p => p.category === 'tools' && p.subcategory === 'power');
    if (selectedCategory === 'soil') return products.filter(p => p.category === 'tools' && p.subcategory === 'soil');
    if (selectedCategory === 'containers') return products.filter(p => p.category === 'tools' && p.subcategory === 'containers');
    if (selectedCategory === 'irrigation') return products.filter(p => p.category === 'tools' && p.subcategory === 'irrigation');
    if (selectedCategory === 'protection') return products.filter(p => p.category === 'tools' && p.subcategory === 'protection');
    // Packs
    if (selectedCategory === 'packs') return products.filter(p => p.category === 'packs');
    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.store}</h2>
          <p className="text-lg text-gray-600">{t.heroDescription}</p>
        </div>

        {/* Highlighted Tree Planting Packs */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-green-800 mb-2">{t.plantingPacks}</h3>
            <p className="text-green-700">احصل على كل ما تحتاجه لبدء رحلة الزراعة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {products.filter(p => p.isPackage).map((pack) => (
              <Card key={pack.id} className="overflow-hidden hover:shadow-lg transition-shadow border-green-200">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={pack.image}
                    alt={pack.name[language]}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-600">
                    <Package className="w-3 h-3 mr-1" />
                    حزمة
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{pack.name[language]}</h3>
                  <p className="text-gray-600 text-sm mb-3">{pack.description[language]}</p>
                  {pack.packageContents && (
                    <div className="mb-3">
                      <h4 className="font-medium text-sm mb-1">محتويات الحزمة:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {pack.packageContents.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="w-3 h-3 text-green-600 mr-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-green-600">{pack.price.toLocaleString()} {t.dz}</span>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => addToCart(pack)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {t.addToCart}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Categories Filter */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-center mb-6">تصفح حسب الفئة</h3>
          
          {/* Main Categories */}
          <div className="flex justify-center mb-4">
            <div className="flex flex-wrap gap-2 max-w-6xl">
              <Button
                variant={selectedCategory === 'all' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory('all')}
                className="mb-2"
              >
                <TreePine className="w-4 h-4 mr-2" />
                {t.categories}
              </Button>
              <Button
                variant={selectedCategory === 'trees' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory('trees')}
                className="mb-2"
              >
                <TreePine className="w-4 h-4 mr-2" />
                {t.trees}
              </Button>
              <Button
                variant={selectedCategory === 'tools' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory('tools')}
                className="mb-2"
              >
                <Wrench className="w-4 h-4 mr-2" />
                {t.tools}
              </Button>
              <Button
                variant={selectedCategory === 'packs' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory('packs')}
                className="mb-2"
              >
                <Package className="w-4 h-4 mr-2" />
                {t.plantingPacks}
              </Button>
            </div>
          </div>

          {/* Tree Subcategories */}
          {(selectedCategory === 'trees' || ['fruit', 'ornamental', 'medicinal', 'forest', 'shade', 'nuts'].includes(selectedCategory)) && (
            <div className="flex justify-center mb-4">
              <div className="flex flex-wrap gap-2 max-w-6xl">
                <Button
                  variant={selectedCategory === 'fruit' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('fruit')}
                  className="mb-2"
                >
                  🍎 {t.fruitTrees}
                </Button>
                <Button
                  variant={selectedCategory === 'ornamental' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('ornamental')}
                  className="mb-2"
                >
                  🌺 {t.ornamentalTrees}
                </Button>
                <Button
                  variant={selectedCategory === 'medicinal' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('medicinal')}
                  className="mb-2"
                >
                  🌿 {t.medicinalTrees}
                </Button>
                <Button
                  variant={selectedCategory === 'forest' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('forest')}
                  className="mb-2"
                >
                  🌲 {t.forestTrees}
                </Button>
                <Button
                  variant={selectedCategory === 'shade' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('shade')}
                  className="mb-2"
                >
                  🌳 {t.shadeTrees}
                </Button>
                <Button
                  variant={selectedCategory === 'nuts' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('nuts')}
                  className="mb-2"
                >
                  🥜 {t.nutTrees}
                </Button>
              </div>
            </div>
          )}

          {/* Tools Subcategories */}
          {(selectedCategory === 'tools' || ['hand', 'power', 'soil', 'containers', 'irrigation', 'protection'].includes(selectedCategory)) && (
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-2 max-w-6xl">
                <Button
                  variant={selectedCategory === 'hand' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('hand')}
                  className="mb-2"
                >
                  🛠️ {t.handTools}
                </Button>
                <Button
                  variant={selectedCategory === 'power' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('power')}
                  className="mb-2"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {t.powerTools}
                </Button>
                <Button
                  variant={selectedCategory === 'soil' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('soil')}
                  className="mb-2"
                >
                  🌱 {t.soilFertilizer}
                </Button>
                <Button
                  variant={selectedCategory === 'containers' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('containers')}
                  className="mb-2"
                >
                  🪴 {t.containers}
                </Button>
                <Button
                  variant={selectedCategory === 'irrigation' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('irrigation')}
                  className="mb-2"
                >
                  💧 {t.irrigationSystems}
                </Button>
                <Button
                  variant={selectedCategory === 'protection' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory('protection')}
                  className="mb-2"
                >
                  🛡️ {t.protection}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.filter(p => !p.isPackage).map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div onClick={() => { setSelectedProduct(product); setCurrentPage('product'); }}>
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name[language]}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      <Star className="w-3 h-3 mr-1" />
                      مميز
                    </Badge>
                  )}
                  <Badge className="absolute top-2 right-2 bg-green-600">
                    {product.category === 'trees' ? '🌳' : '🛠️'}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name[language]}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description[language]}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{product.price.toLocaleString()} {t.dz}</span>
                  </div>
                </CardContent>
              </div>
              <div className="p-4 pt-0">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => addToCart(product)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {t.addToCart}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Results count */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            عرض {filteredProducts.filter(p => !p.isPackage).length} منتج من أصل {products.filter(p => !p.isPackage).length}
          </p>
        </div>
      </div>
    </div>
  );
};