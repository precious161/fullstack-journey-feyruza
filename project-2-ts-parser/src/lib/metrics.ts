import type { DataPackage } from "../types.js";

export function calculateMetrics(Data: DataPackage): { totalUsers: number, totalOrders: number, totalRevenue: number, averageOrderValue: number }{

  const totalUsers: number= Data.users.length;

  const totalOrders: number= Data.orders.length;

  let sum:number=0;
  const totalRevenue: number=Data.orders.reduce((sum,order)=>{
      return sum+=order.amount;
  },0)

  const averageOrderValue:number=totalOrders > 0 ? totalRevenue/totalOrders:0;

  return { totalUsers,totalOrders, totalRevenue, averageOrderValue }
}