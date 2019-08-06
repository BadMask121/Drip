const {MockList} =  require('graphql-yoga')


const Sales = [{
    id: '0',
    name: 'Jeffrey test',
    product: Product,
    order: Order
}]


const Product = [{
    id: '1',
    name: "long Sleeve Men",
    price: 123.0,
    brand: "Gucci",
    size: 12,
    size_type: "M",
    category: "Clothing"
}]


const Order = [{
    id: '1',
    product: Product,
    date: "12 Mon 2019",
    status: "sold",
    quantity: 2
}]


let saleId = Sales.length;

const resolvers = {
    createSales: (parent , args) => {
        const sale = {
            id = `${saleId++}`
        }
    }
}