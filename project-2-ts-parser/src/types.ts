type OrderStatus= 'Pending' | 'Paid' | 'Cancelled';

interface User{
  id: number
  name: string
  email: string
  role: string
  createdAt: string
}

interface Order{
  id:number
  userId: number
  amount: number
  status: OrderStatus
  createdAt: string
}

interface DataPackage{
  users: User[]
  orders: Order[]
}