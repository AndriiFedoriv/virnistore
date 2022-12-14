export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    categoryId: number;
    description: string;
    image: string;
    stock_quantity: number;
  }
  
  export const products = [
    {
      id: 456332,
      name: 'Вечірнє плаття Калуш 2022 Весільний салон Virnist (VIBD0002)',
      price: 799,
      category: 'evening-dress',
      categoryId: 2,
      description: 'Колір: як на фото можливі інші кольори /n Розмір: від 40 до 60 + Де купити вечірні плаття в Калуші? /n Весільний салон Вірність продає вишукані вечірні сукні та плаття для дружок 2022.',
      image: './../assets/img/products/girl-logo.jpg',
      stock_quantity: 1,
    },
    {
      id: 3561,
      name: 'Вечірня сукня Калуш 2022 Весільний салон Virnist (VIBD0001)',
      price: 699,
      category: 'evening-dress',
      categoryId: 2,
      description: 'Колір: червоний, пудра, капучіно, бузковий, можливі інші кольори /n Розмір: від 40 до 60 + /n Де купити вечірні плаття для дружки в Станісліві? /n Весільний салон Вірність продає вишукані вечірні сукні 2022 для урочистих подій у вашому житті.',
      image: './../assets/img/products/Evening_Dress_Bridesmaid_2022_Bridal_Salon_Virnist_VIBDMAXAZR.jpg',
      stock_quantity: 1,
    },
    {
      id: 34,
      name: 'Дитяча сукня Калуш 2022 Весільний салон Virnist (VIAB034)',
      price: 299,
      category: 'girl-dress',
      categoryId: 3,
      description: 'Колір: Капучіно, Айворі, Білий /n Розмір: Для дівчат від 2-х років /n Весільний салон в Калуші Вірність продає святкові сукні для дівчат від двох років. Великий вибір суконь для дівчаток в наявності.',
      image: './../assets/img/products/Girl_Dress_2022_Bridal_Salon_Virnist_VIFM097_a.jpg',
      stock_quantity: 3,
    },
    {
      id: 125,
      name: 'Весільне плаття 2022 Калуш Весільний салон Virnist (VISR125)',
      price: 899,
      category: 'wedding-dress',
      categoryId: 1,
      description: 'Колір: Айворі, Білий /n Розмір: від 40 до 60 + /n Де купити весільні сукні в Калуші? /n Весільний салон Virnist продає дизайнерські весільні плаття 2022, доступні ціни, великий вибір суконь в наявності. /n Де пошити весільну сукню в Івано-Франківській області? /n Весільний магазин Вірність пошиття весільного плаття від трьох робочих днів, фабрична якість, можливо пошиття сукні по фото.',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 5,
    },
    {
      id: 5,
      name: 'Вечірнє плаття Phone XL',
      price: 799,
      category: 'evening-dress',
      categoryId: 2,
      description: 'A large phone with one of the best screens',
      image: './../assets/img/products/girl-logo.jpg',
      stock_quantity: 1,
    },
    {
      id: 6,
      name: 'Дитяча сукня Phone Mini',
      price: 699,
      category: 'girl-dress',
      categoryId: 3,
      description: 'A great phone with one of the best cameras',
      image: './../assets/img/products/Evening_Dress_Bridesmaid_2022_Bridal_Salon_Virnist_VIBDMAXAZR.jpg',
      stock_quantity: 1,
    },
    {
      id: 7,
      name: 'Вечірнє плаття Phone Standard',
      price: 299,
      category: 'evening-dress',
      categoryId: 2,
      description: '',
      image: './../assets/img/products/Girl_Dress_2022_Bridal_Salon_Virnist_VIFM097_a.jpg',
      stock_quantity: 5,
    },
    {
      id: 8,
      name: 'Дитяча сукня dress',
      price: 299,
      category: 'girl-dress',
      categoryId: 3,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 7,
    },
    {
      id: 9,
      name: 'Весільне плаття Phone XL',
      price: 799,
      category: 'wedding-dress',
      categoryId: 1,
      description: 'A large phone with one of the best screens',
      image: './../assets/img/products/girl-logo.jpg',
      stock_quantity: 1,
    },
    {
      id: 10,
      name: 'Дитяча сукня Phone Mini',
      price: 699,
      category: 'girl-dress',
      categoryId: 3,
      description: 'A great phone with one of the best cameras',
      image: './../assets/img/products/Evening_Dress_Bridesmaid_2022_Bridal_Salon_Virnist_VIBDMAXAZR.jpg',
      stock_quantity: 1,
    },
    {
      id: 11,
      name: 'Вечірнє плаття Phone Stand',
      price: 299,
      category: 'evening-dress',
      categoryId: 2,
      description: '',
      image: './../assets/img/products/Girl_Dress_2022_Bridal_Salon_Virnist_VIFM097_a.jpg',
      stock_quantity: 8,
    },
    {
      id: 12,
      name: 'Весільне плаття dress',
      price: 299,
      category: 'wedding-dress',
      categoryId: 1,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 0,
    },
    {
      id: 13,
      name: 'Perfume 13',
      price: 299,
      category: 'perfume-nonpareil',
      categoryId: 1,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 80,
    },
    {
      id: 14,
      name: 'Perfume 14',
      price: 299,
      category: 'perfume-nonpareil',
      categoryId: 1,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 5,
    },
    {
      id: 15,
      name: 'Perfume 15',
      price: 299,
      category: 'perfume-nonpareil',
      categoryId: 1,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 2,
    },
    {
      id: 16,
      name: 'Perfume 16',
      price: 299,
      category: 'perfume-nonpareil',
      categoryId: 1,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 7,
    },
    {
      id: 17,
      name: 'Весільнi accessories 17',
      price: 299,
      category: 'wedding-accessories',
      categoryId: 1,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 0,
    },
    {
      id: 18,
      name: 'Весільнi accessories 18',
      price: 299,
      category: 'wedding-accessories',
      categoryId: 1,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 4,
    },
    {
      id: 19,
      name: 'Весільнi accessories 19',
      price: 299,
      category: 'wedding-accessories',
      categoryId: 1,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 10,
    },
    {
      id: 20,
      name: 'Весільнi accessories 20',
      price: 299,
      category: 'wedding-accessories',
      categoryId: 1,
      description: '',
      image: './../assets/img/products/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 10,
    }
  ];
  