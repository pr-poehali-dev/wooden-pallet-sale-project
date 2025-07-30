import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Поддон европейский",
      category: "Поддоны",
      size: "1200×800×144 мм",
      weight: "20-25 кг",
      material: "Сосна, ель",
      price: "от 450 ₽",
      description: "Стандартный европоддон EPAL для международных перевозок",
      features: ["Сертифицирован EPAL", "Многоразовое использование", "Стандартные размеры"]
    },
    {
      id: 2,
      name: "Поддон американский",
      category: "Поддоны",
      size: "1200×1000×144 мм",
      weight: "25-30 кг",
      material: "Сосна, береза",
      price: "от 520 ₽",
      description: "Усиленный поддон повышенной грузоподъемности",
      features: ["Грузоподъемность 1500 кг", "Усиленная конструкция", "Долговечность"]
    },
    {
      id: 3,
      name: "Ящик деревянный",
      category: "Ящики",
      size: "600×400×300 мм",
      weight: "3-5 кг",
      material: "Сосна",
      price: "от 180 ₽",
      description: "Универсальный ящик для хранения и транспортировки",
      features: ["Экологичный материал", "Легкий вес", "Прочная конструкция"]
    },
    {
      id: 4,
      name: "Доска обрезная",
      category: "Доски",
      size: "25×150×6000 мм",
      weight: "4-6 кг/шт",
      material: "Сосна 1 сорт",
      price: "от 95 ₽/шт",
      description: "Качественная обрезная доска для строительства",
      features: ["1 сорт", "Камерная сушка", "Точные размеры"]
    },
    {
      id: 5,
      name: "Доска строганная",
      category: "Доски",
      size: "20×100×6000 мм",
      weight: "3-4 кг/шт",
      material: "Сосна высший сорт",
      price: "от 120 ₽/шт",
      description: "Строганная доска для отделочных работ",
      features: ["Высший сорт", "Гладкая поверхность", "Готова к покраске"]
    },
    {
      id: 6,
      name: "Ящик фруктовый",
      category: "Ящики",
      size: "500×300×200 мм",
      weight: "2-3 кг",
      material: "Береза, тополь",
      price: "от 150 ₽",
      description: "Специализированный ящик для фруктов и овощей",
      features: ["Вентиляционные отверстия", "Пищевой материал", "Компактный размер"]
    }
  ];

  const categories = ["Все", "Поддоны", "Ящики", "Доски"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Package" size={24} className="text-primary" />
              <span className="text-xl font-bold text-primary">SMpallet</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Icon name="TreePine" size={14} className="mr-1" />
                  Экологически чистые материалы
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Деревянные
                  <span className="text-primary"> поддоны</span> и 
                  <span className="text-primary"> пиломатериалы</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Производим и продаем качественные деревянные поддоны, ящики и доски. 
                  Собственное производство, доставка по всей России.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Посмотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  <Icon name="Calculator" size={18} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/16e6f8a5-e2f2-44a5-bd45-09770b14070b.jpg" 
                alt="Деревянные поддоны" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold">Гарантия качества</div>
                    <div className="text-sm text-muted-foreground">Сертифицированная продукция</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Package2" size={14} className="mr-1" />
              Каталог продукции
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Наша продукция
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент деревянных изделий с подробными характеристиками и размерами
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "Все" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="text-lg font-bold text-primary">
                      {product.price}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-muted-foreground">Размеры</div>
                      <div className="font-mono text-xs bg-muted px-2 py-1 rounded">
                        {product.size}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-muted-foreground">Вес</div>
                      <div className="font-mono text-xs bg-muted px-2 py-1 rounded">
                        {product.weight}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-muted-foreground mb-2">Материал</div>
                    <div className="text-sm">{product.material}</div>
                  </div>
                  <div>
                    <div className="font-medium text-muted-foreground mb-2">Особенности</div>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <Icon name="ShoppingCart" size={14} className="mr-1" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Info" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Icon name="Building2" size={14} className="mr-1" />
                  О компании
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Надежный партнер в сфере деревообработки
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  SMpallet — это современное производственное предприятие с 10-летним опытом работы 
                  в сфере изготовления деревянных поддонов, ящиков и пиломатериалов.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Мы используем только качественную древесину и современное оборудование, 
                  что позволяет нам гарантировать высокое качество продукции и соблюдение 
                  всех технических требований.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card rounded-lg">
                  <Icon name="Factory" size={32} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold">Собственное производство</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Icon name="Truck" size={32} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold">Доставка по России</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Icon name="Award" size={32} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold">Сертификаты качества</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Icon name="Users" size={32} className="text-primary mx-auto mb-2" />
                  <div className="font-semibold">Опытная команда</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    Наши преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Контроль качества на всех этапах производства",
                    "Использование сертифицированных материалов",
                    "Собственный автопарк для доставки",
                    "Гибкая система скидок для постоянных клиентов",
                    "Возможность изготовления по индивидуальным размерам"
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{advantage}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Icon name="MapPin" size={14} className="mr-1" />
              Контакты
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы ответить на все ваши вопросы и подготовить индивидуальное предложение
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground mb-4">
                Звоните в рабочее время
              </p>
              <div className="space-y-1">
                <div className="font-medium">+7 (902) 334-95-15</div>
                <div className="text-sm text-muted-foreground">Пн-Пт: 9:00-18:00</div>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                Отправьте нам сообщение
              </p>
              <div className="space-y-1">
                <div className="font-medium">info@drevprom.ru</div>
                <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground mb-4">
                Производство и склад
              </p>
              <div className="space-y-1">
                <div className="font-medium">г. Ярославль, ул. Полушкина роща, 16с34</div>
                <div className="text-sm text-muted-foreground">Производственная зона</div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="text-base">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Package" size={24} className="text-primary" />
                <span className="text-xl font-bold text-primary">SMpallet</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Качественные деревянные изделия для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Поддоны</li>
                <li>Ящики</li>
                <li>Доски</li>
                <li>Индивидуальные заказы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Производство</li>
                <li>Сертификаты</li>
                <li>Партнерам</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (902) 334-95-15</li>
                <li>info@drevprom.ru</li>
                <li>г. Ярославль, ул. Полушkина роща, 16с34</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div>© 2024 SMpallet. Все права защищены.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}