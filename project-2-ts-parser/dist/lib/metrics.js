export function calculateMetrics(Data) {
    const totalUsers = Data.users.length;
    const totalOrders = Data.orders.length;
    let sum = 0;
    const totalRevenue = Data.orders.reduce((sum, order) => {
        return sum += order.amount;
    }, 0);
    const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    return { totalUsers, totalOrders, totalRevenue, averageOrderValue };
}
//# sourceMappingURL=metrics.js.map