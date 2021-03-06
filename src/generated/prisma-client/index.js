"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "AuthPayload",
    embedded: false
  },
  {
    name: "Vendor",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "Delivery",
    embedded: false
  },
  {
    name: "Address",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4400`
});
exports.prisma = new exports.Prisma();
