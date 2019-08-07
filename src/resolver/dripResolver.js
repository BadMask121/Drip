
// // graphql Query resolvers
// const resolvers = {

//     Query:{
//         allVendors: (parent, args, context, info) => context.prisma.Vendors(),
//         allProducts: (parent, args, context, info) => context.prisma.products(),
//         allOrders: (parent, args, context, info) => context.prisma.orders()
//     },

//     Mutation:{
//         createVendors: (parent, args, context) => {    
//             return context.prisma.createVendor({
//                 ...args
//             })
//         },

//         createProduct: (parent , args, context) =>{
//             return context.prisma.createProduct({
//                 ...args
//             })
//         },
        
//         createOrder: (parent, args, context) => {
//             return context.prisma.createOrder({
//                 ...args
//             })
//         }
//     }
// }




module.exports = resolvers