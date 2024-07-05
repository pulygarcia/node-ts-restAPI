type Category = 'Merienda' | 'Comida' | 'Postre' | 'Bebida' | 'Entrada';

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: Category;
}

export const items: MenuItem[] = [
  // Meriendas
  {
    name: 'Medialunas',
    description: 'Croissants argentinos, dulces o saladas.',
    price: 1.50,
    category: 'Merienda'
  },
  {
    name: 'Tostadas con Dulce de Leche',
    description: 'Tostadas servidas con dulce de leche.',
    price: 2.00,
    category: 'Merienda'
  },
  {
    name: 'Facturas',
    description: 'Variedad de bollos y pasteles argentinos.',
    price: 2.50,
    category: 'Merienda'
  },
  {
    name: 'Sándwich de Miga',
    description: 'Sándwiches de pan de miga con diferentes rellenos.',
    price: 3.00,
    category: 'Merienda'
  },
  {
    name: 'Churros con Chocolate',
    description: 'Churros fritos servidos con chocolate caliente.',
    price: 3.00,
    category: 'Merienda'
  },
  
  // Platos de Comida
  {
    name: 'Empanadas',
    description: 'Masa rellena con carne, cebolla, huevo y aceitunas.',
    price: 2.50,
    category: 'Comida'
  },
  {
    name: 'Asado',
    description: 'Carne de res asada a la parrilla, servida con chimichurri.',
    price: 15.00,
    category: 'Comida'
  },
  {
    name: 'Milanesa',
    description: 'Carne empanada y frita, servida con papas fritas.',
    price: 10.00,
    category: 'Comida'
  },
  {
    name: 'Choripán',
    description: 'Chorizo a la parrilla servido en pan con chimichurri.',
    price: 5.00,
    category: 'Comida'
  },
  {
    name: 'Provoleta',
    description: 'Queso provolone a la parrilla con especias.',
    price: 7.00,
    category: 'Comida'
  },
  {
    name: 'Locro',
    description: 'Guiso de maíz, porotos, chorizo, panceta y carne de res.',
    price: 12.00,
    category: 'Comida'
  },
  {
    name: 'Humita en Chala',
    description: 'Puré de maíz y zapallo envuelto en hojas de maíz.',
    price: 8.00,
    category: 'Comida'
  },
  {
    name: 'Lomo a la Parrilla',
    description: 'Filete de lomo asado a la parrilla con guarnición.',
    price: 18.00,
    category: 'Comida'
  },
  {
    name: 'Pizza a la Piedra',
    description: 'Pizza cocida en horno de piedra con mozzarella y tomate.',
    price: 10.00,
    category: 'Comida'
  },
  {
    name: 'Bife de Chorizo',
    description: 'Corte de carne asado a la parrilla.',
    price: 20.00,
    category: 'Comida'
  },
  {
    name: 'Pollo al Disco',
    description: 'Pollo cocido en disco de arado con verduras.',
    price: 14.00,
    category: 'Comida'
  },
  {
    name: 'Sopa Paraguaya',
    description: 'Tarta de maíz y queso.',
    price: 6.00,
    category: 'Comida'
  },
  {
    name: 'Guiso de Lentejas',
    description: 'Guiso de lentejas con chorizo y verduras.',
    price: 9.00,
    category: 'Comida'
  },
  {
    name: 'Matambre a la Pizza',
    description: 'Matambre de res cubierto con salsa de tomate y queso.',
    price: 12.00,
    category: 'Comida'
  },
  {
    name: 'Pastel de Papas',
    description: 'Pastel de carne cubierto con puré de papas.',
    price: 10.00,
    category: 'Comida'
  },
  
  // Postres
  {
    name: 'Dulce de Leche Pancakes',
    description: 'Panqueques rellenos de dulce de leche.',
    price: 4.00,
    category: 'Postre'
  },
  {
    name: 'Alfajores',
    description: 'Galletas rellenas de dulce de leche y cubiertas de chocolate.',
    price: 3.00,
    category: 'Postre'
  },
  {
    name: 'Flan con Dulce de Leche',
    description: 'Flan casero acompañado de dulce de leche.',
    price: 5.00,
    category: 'Postre'
  },
  {
    name: 'Tarta de Ricota',
    description: 'Tarta rellena de ricota dulce.',
    price: 4.50,
    category: 'Postre'
  },
  {
    name: 'Helado Artesanal',
    description: 'Helado hecho en casa con sabores variados.',
    price: 3.50,
    category: 'Postre'
  },
  {
    name: 'Chocotorta',
    description: 'Tarta de galletas de chocolate y crema de dulce de leche.',
    price: 6.00,
    category: 'Postre'
  },
  {
    name: 'Pastelitos',
    description: 'Masa frita rellena de dulce de membrillo o batata.',
    price: 2.50,
    category: 'Postre'
  },
  {
    name: 'Queso y Dulce',
    description: 'Postre simple de queso fresco y dulce de membrillo.',
    price: 3.00,
    category: 'Postre'
  },
  
  // Bebidas
  {
    name: 'Malbec',
    description: 'Vino tinto argentino, famoso en todo el mundo.',
    price: 12.00,
    category: 'Bebida'
  },
  {
    name: 'Fernet con Coca',
    description: 'Licor de hierbas mezclado con Coca Cola.',
    price: 6.00,
    category: 'Bebida'
  },
  {
    name: 'Mate',
    description: 'Infusión tradicional argentina de yerba mate.',
    price: 3.00,
    category: 'Bebida'
  },
  {
    name: 'Submarino',
    description: 'Leche caliente con una barra de chocolate derretida.',
    price: 4.00,
    category: 'Bebida'
  },
  {
    name: 'Café con Leche',
    description: 'Café expreso mezclado con leche caliente.',
    price: 2.50,
    category: 'Bebida'
  },
  {
    name: 'Limonada Casera',
    description: 'Limonada fresca hecha en casa.',
    price: 2.00,
    category: 'Bebida'
  },
  {
    name: 'Té con Leche',
    description: 'Té negro mezclado con leche caliente.',
    price: 2.00,
    category: 'Bebida'
  },
  {
    name: 'Gaseosa',
    description: 'Variedad de bebidas gaseosas.',
    price: 1.50,
    category: 'Bebida'
  },
  {
    name: 'Agua Mineral',
    description: 'Agua mineral natural o con gas.',
    price: 1.00,
    category: 'Bebida'
  },
  {
    name: 'Cerveza Artesanal',
    description: 'Variedad de cervezas artesanales locales.',
    price: 5.00,
    category: 'Bebida'
  },
  
  // Entradas
  {
    name: 'Picada',
    description: 'Selección de fiambres, quesos y aceitunas.',
    price: 10.00,
    category: 'Entrada'
  },
  {
    name: 'Tortilla de Papas',
    description: 'Tortilla de papas tradicional.',
    price: 5.00,
    category: 'Entrada'
  },
  {
    name: 'Provoleta a la Parrilla',
    description: 'Queso provolone a la parrilla con orégano.',
    price: 7.00,
    category: 'Entrada'
  },
  {
    name: 'Calamares a la Romana',
    description: 'Anillas de calamar fritas con limón.',
    price: 8.00,
    category: 'Entrada'
  },
  {
    name: 'Bruschettas',
    description: 'Pan tostado con tomate, ajo y albahaca.',
    price: 4.50,
    category: 'Entrada'
  }
];

