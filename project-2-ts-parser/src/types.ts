export type OrderStatus= 'Pending' | 'Paid' | 'Cancelled';

export interface User{
  id: number
  name: string
  email: string
  role: string
  createdAt: string
}

export interface Order{
  id:number
  userId: number
  amount: number
  status: OrderStatus
  createdAt: string
}

export interface DataPackage{
  users: User[]
  orders: Order[]
}