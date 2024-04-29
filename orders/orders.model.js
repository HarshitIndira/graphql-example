const orders = [
    {
        date: '24-04-2024',
        subtotal: 9500,
        items: [
            {
                product: {
                    id: 'redshoe',
                    desctiption: 'Old red shoe',
                    price: 7000,
                },
                quantity: 2,
            }
        ]
    }
]

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
};