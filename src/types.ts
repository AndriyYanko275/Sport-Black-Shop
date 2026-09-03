export type SportCategory =
  | 'football'
  | 'basketball'
  | 'volleyball'
  | 'tennis'
  | 'rugby'

export type Product = {
  id: string
  name: string
  category: SportCategory
  size: string
  material: string
  price: number
  description: string
}
