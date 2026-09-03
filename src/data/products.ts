import type { Product, SportCategory } from '../types'

export const CATEGORIES: { id: SportCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Усі' },
  { id: 'football', label: 'Футбол' },
  { id: 'basketball', label: 'Баскетбол' },
  { id: 'volleyball', label: 'Волейбол' },
  { id: 'tennis', label: 'Теніс' },
  { id: 'rugby', label: 'Регбі' },
]

export const products: Product[] = [
  {
    id: 'fb-match',
    name: 'Match Pro',
    category: 'football',
    size: '5',
    material: 'Поліуретан',
    price: 3090,
    description:
      'Матчевий футбольний м’яч із рівним швом. Для поля та штучного покриття.',
  },
  {
    id: 'fb-train',
    name: 'Training Line',
    category: 'football',
    size: '5',
    material: 'ПВХ',
    price: 1290,
    description: 'Тренувальний м’яч. Стійкий до зносу, без зайвого блиску.',
  },
  {
    id: 'fb-youth',
    name: 'Youth Four',
    category: 'football',
    size: '4',
    material: 'ПВХ',
    price: 990,
    description: 'Розмір 4. Для академій і домашніх тренувань.',
  },
  {
    id: 'bb-indoor',
    name: 'Indoor Grain',
    category: 'basketball',
    size: '7',
    material: 'Композитна шкіра',
    price: 2790,
    description: 'Зальний баскетбольний м’яч. Дрібне зерно, контрольований відскок.',
  },
  {
    id: 'bb-street',
    name: 'Street Ash',
    category: 'basketball',
    size: '7',
    material: 'Гума',
    price: 1590,
    description: 'Вуличний м’яч. Товстіша оболонка, стриманий матовий тон.',
  },
  {
    id: 'bb-youth',
    name: 'Youth Five',
    category: 'basketball',
    size: '5',
    material: 'Гума',
    price: 1190,
    description: 'Розмір 5. Легший обхват для молодших гравців.',
  },
  {
    id: 'vb-indoor',
    name: 'Hall Soft',
    category: 'volleyball',
    size: '5',
    material: 'Мікрофібра',
    price: 1890,
    description: 'Зальний волейбольний м’яч. М’який контакт, стабільна траєкторія.',
  },
  {
    id: 'vb-beach',
    name: 'Coast Light',
    category: 'volleyball',
    size: '5',
    material: 'Синтетика',
    price: 1690,
    description: 'Пляжний м’яч. Легший, щоб не тонути в піску.',
  },
  {
    id: 'tn-tour',
    name: 'Tour Extra Duty',
    category: 'tennis',
    size: 'Стандарт',
    material: 'Вовна / гума',
    price: 890,
    description: 'Банка з трьох м’ячів. Хард-корт, щільний відскок.',
  },
  {
    id: 'tn-club',
    name: 'Club Championship',
    category: 'tennis',
    size: 'Стандарт',
    material: 'Вовна / гума',
    price: 740,
    description: 'Клубна серія. Для регулярної гри без турнірних вимог.',
  },
  {
    id: 'rg-union',
    name: 'Union Match',
    category: 'rugby',
    size: '5',
    material: 'Гумовий грип',
    price: 2190,
    description: 'Овальний матчевий м’яч. Чітке захоплення в дощ.',
  },
  {
    id: 'rg-train',
    name: 'Union Train',
    category: 'rugby',
    size: '5',
    material: 'ПВХ',
    price: 1490,
    description: 'Тренувальний регбійний м’яч. Той самий баланс, простіший матеріал.',
  },
]

export function formatPrice(value: number) {
  return `${value.toLocaleString('uk-UA')} ₴`
}

export function categoryLabel(id: SportCategory) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id)
}
