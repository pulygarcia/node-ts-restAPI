type Category = 'Snack' | 'Meal' | 'Dessert' | 'Drink' | 'Appetizer';

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: Category;
}

export const items: MenuItem[] = [
  // Snacks
  {
    name: 'Medialunas',
    description: 'Argentinian croissants, sweet or savory.',
    price: 1.50,
    category: 'Snack'
  },
  {
    name: 'Tostadas con Dulce de Leche',
    description: 'Toasts served with dulce de leche.',
    price: 2.00,
    category: 'Snack'
  },
  {
    name: 'Facturas',
    description: 'Variety of Argentinian buns and pastries.',
    price: 2.50,
    category: 'Snack'
  },
  {
    name: 'Sándwich de Miga',
    description: 'Crustless sandwiches with various fillings.',
    price: 3.00,
    category: 'Snack'
  },
  {
    name: 'Churros con Chocolate',
    description: 'Fried churros served with hot chocolate.',
    price: 3.00,
    category: 'Snack'
  },
  
  // Meals
  {
    name: 'Empanadas',
    description: 'Dough filled with meat, onion, egg, and olives.',
    price: 2.50,
    category: 'Meal'
  },
  {
    name: 'Asado',
    description: 'Grilled beef served with chimichurri.',
    price: 15.00,
    category: 'Meal'
  },
  {
    name: 'Milanesa',
    description: 'Breaded and fried meat served with fries.',
    price: 10.00,
    category: 'Meal'
  },
  {
    name: 'Choripán',
    description: 'Grilled sausage served in a bread roll with chimichurri.',
    price: 5.00,
    category: 'Meal'
  },
  {
    name: 'Provoleta',
    description: 'Grilled provolone cheese with spices.',
    price: 7.00,
    category: 'Meal'
  },
  {
    name: 'Locro',
    description: 'Stew of corn, beans, sausage, bacon, and beef.',
    price: 12.00,
    category: 'Meal'
  },
  {
    name: 'Humita en Chala',
    description: 'Corn and pumpkin puree wrapped in corn husks.',
    price: 8.00,
    category: 'Meal'
  },
  {
    name: 'Lomo a la Parrilla',
    description: 'Grilled tenderloin steak with garnish.',
    price: 18.00,
    category: 'Meal'
  },
  {
    name: 'Pizza a la Piedra',
    description: 'Stone-baked pizza with mozzarella and tomato.',
    price: 10.00,
    category: 'Meal'
  },
  {
    name: 'Bife de Chorizo',
    description: 'Grilled beef sirloin steak.',
    price: 20.00,
    category: 'Meal'
  },
  {
    name: 'Pollo al Disco',
    description: 'Chicken cooked in a plow disk with vegetables.',
    price: 14.00,
    category: 'Meal'
  },
  {
    name: 'Sopa Paraguaya',
    description: 'Corn and cheese pie.',
    price: 6.00,
    category: 'Meal'
  },
  {
    name: 'Guiso de Lentejas',
    description: 'Lentil stew with sausage and vegetables.',
    price: 9.00,
    category: 'Meal'
  },
  {
    name: 'Matambre a la Pizza',
    description: 'Flank steak covered with tomato sauce and cheese.',
    price: 12.00,
    category: 'Meal'
  },
  {
    name: 'Pastel de Papas',
    description: 'Meat pie topped with mashed potatoes.',
    price: 10.00,
    category: 'Meal'
  },
  
  // Desserts
  {
    name: 'Dulce de Leche Pancakes',
    description: 'Pancakes filled with dulce de leche.',
    price: 4.00,
    category: 'Dessert'
  },
  {
    name: 'Alfajores',
    description: 'Cookies filled with dulce de leche and coated in chocolate.',
    price: 3.00,
    category: 'Dessert'
  },
  {
    name: 'Flan con Dulce de Leche',
    description: 'Homemade flan served with dulce de leche.',
    price: 5.00,
    category: 'Dessert'
  },
  {
    name: 'Tarta de Ricota',
    description: 'Pie filled with sweet ricotta.',
    price: 4.50,
    category: 'Dessert'
  },
  {
    name: 'Helado Artesanal',
    description: 'Homemade ice cream with various flavors.',
    price: 3.50,
    category: 'Dessert'
  },
  {
    name: 'Chocotorta',
    description: 'Cake made with chocolate cookies and dulce de leche cream.',
    price: 6.00,
    category: 'Dessert'
  },
  {
    name: 'Pastelitos',
    description: 'Fried dough filled with quince or sweet potato paste.',
    price: 2.50,
    category: 'Dessert'
  },
  {
    name: 'Queso y Dulce',
    description: 'Simple dessert of fresh cheese and quince paste.',
    price: 3.00,
    category: 'Dessert'
  },
  
  // Drinks
  {
    name: 'Malbec',
    description: 'Argentinian red wine, famous worldwide.',
    price: 12.00,
    category: 'Drink'
  },
  {
    name: 'Fernet con Coca',
    description: 'Herbal liqueur mixed with Coca-Cola.',
    price: 6.00,
    category: 'Drink'
  },
  {
    name: 'Mate',
    description: 'Traditional Argentinian infusion of yerba mate.',
    price: 3.00,
    category: 'Drink'
  },
  {
    name: 'Submarino',
    description: 'Hot milk with a melted chocolate bar.',
    price: 4.00,
    category: 'Drink'
  },
  {
    name: 'Café con Leche',
    description: 'Espresso mixed with hot milk.',
    price: 2.50,
    category: 'Drink'
  },
  {
    name: 'Limonada Casera',
    description: 'Fresh homemade lemonade.',
    price: 2.00,
    category: 'Drink'
  },
  {
    name: 'Té con Leche',
    description: 'Black tea mixed with hot milk.',
    price: 2.00,
    category: 'Drink'
  },
  {
    name: 'Gaseosa',
    description: 'Variety of soft drinks.',
    price: 1.50,
    category: 'Drink'
  },
  {
    name: 'Agua Mineral',
    description: 'Natural or sparkling mineral water.',
    price: 1.00,
    category: 'Drink'
  },
  {
    name: 'Cerveza Artesanal',
    description: 'Variety of local craft beers.',
    price: 5.00,
    category: 'Drink'
  },
  
  // Appetizers
  {
    name: 'Picada',
    description: 'Selection of cold cuts, cheeses, and olives.',
    price: 10.00,
    category: 'Appetizer'
  },
  {
    name: 'Tortilla de Papas',
    description: 'Traditional potato omelette.',
    price: 5.00,
    category: 'Appetizer'
  },
  {
    name: 'Provoleta a la Parrilla',
    description: 'Grilled provolone cheese with oregano.',
    price: 7.00,
    category: 'Appetizer'
  },
  {
    name: 'Calamares a la Romana',
    description: 'Fried squid rings with lemon.',
    price: 8.00,
    category: 'Appetizer'
  },
  {
    name: 'Bruschettas',
    description: 'Toasted bread with tomato, garlic, and basil.',
    price: 4.50,
    category: 'Appetizer'
  }
];


