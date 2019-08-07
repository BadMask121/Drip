// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  order: (where?: OrderWhereInput) => Promise<boolean>;
  product: (where?: ProductWhereInput) => Promise<boolean>;
  vendor: (where?: VendorWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  order: (where: OrderWhereUniqueInput) => OrderNullablePromise;
  orders: (args?: {
    where?: OrderWhereInput;
    orderBy?: OrderOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Order>;
  ordersConnection: (args?: {
    where?: OrderWhereInput;
    orderBy?: OrderOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => OrderConnectionPromise;
  product: (where: ProductWhereUniqueInput) => ProductNullablePromise;
  products: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Product>;
  productsConnection: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProductConnectionPromise;
  vendor: (where: VendorWhereUniqueInput) => VendorNullablePromise;
  vendors: (args?: {
    where?: VendorWhereInput;
    orderBy?: VendorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Vendor>;
  vendorsConnection: (args?: {
    where?: VendorWhereInput;
    orderBy?: VendorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => VendorConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createOrder: (data: OrderCreateInput) => OrderPromise;
  updateOrder: (args: {
    data: OrderUpdateInput;
    where: OrderWhereUniqueInput;
  }) => OrderPromise;
  updateManyOrders: (args: {
    data: OrderUpdateManyMutationInput;
    where?: OrderWhereInput;
  }) => BatchPayloadPromise;
  upsertOrder: (args: {
    where: OrderWhereUniqueInput;
    create: OrderCreateInput;
    update: OrderUpdateInput;
  }) => OrderPromise;
  deleteOrder: (where: OrderWhereUniqueInput) => OrderPromise;
  deleteManyOrders: (where?: OrderWhereInput) => BatchPayloadPromise;
  createProduct: (data: ProductCreateInput) => ProductPromise;
  updateProduct: (args: {
    data: ProductUpdateInput;
    where: ProductWhereUniqueInput;
  }) => ProductPromise;
  updateManyProducts: (args: {
    data: ProductUpdateManyMutationInput;
    where?: ProductWhereInput;
  }) => BatchPayloadPromise;
  upsertProduct: (args: {
    where: ProductWhereUniqueInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  }) => ProductPromise;
  deleteProduct: (where: ProductWhereUniqueInput) => ProductPromise;
  deleteManyProducts: (where?: ProductWhereInput) => BatchPayloadPromise;
  createVendor: (data: VendorCreateInput) => VendorPromise;
  updateVendor: (args: {
    data: VendorUpdateInput;
    where: VendorWhereUniqueInput;
  }) => VendorPromise;
  updateManyVendors: (args: {
    data: VendorUpdateManyMutationInput;
    where?: VendorWhereInput;
  }) => BatchPayloadPromise;
  upsertVendor: (args: {
    where: VendorWhereUniqueInput;
    create: VendorCreateInput;
    update: VendorUpdateInput;
  }) => VendorPromise;
  deleteVendor: (where: VendorWhereUniqueInput) => VendorPromise;
  deleteManyVendors: (where?: VendorWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  order: (
    where?: OrderSubscriptionWhereInput
  ) => OrderSubscriptionPayloadSubscription;
  product: (
    where?: ProductSubscriptionWhereInput
  ) => ProductSubscriptionPayloadSubscription;
  vendor: (
    where?: VendorSubscriptionWhereInput
  ) => VendorSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type OrderOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "date_ASC"
  | "date_DESC"
  | "status_ASC"
  | "status_DESC"
  | "quantity_ASC"
  | "quantity_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type ProductOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "price_ASC"
  | "price_DESC"
  | "brand_ASC"
  | "brand_DESC"
  | "size_ASC"
  | "size_DESC"
  | "size_type_ASC"
  | "size_type_DESC"
  | "category_ASC"
  | "category_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type VendorOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface OrderUpdateInput {
  vendor?: Maybe<VendorUpdateOneWithoutOrdersInput>;
  product?: Maybe<ProductUpdateOneInput>;
  date?: Maybe<String>;
  status?: Maybe<String>;
  quantity?: Maybe<Int>;
}

export type OrderWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface VendorUpsertWithoutOrdersInput {
  update: VendorUpdateWithoutOrdersDataInput;
  create: VendorCreateWithoutOrdersInput;
}

export interface VendorWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  orders_every?: Maybe<OrderWhereInput>;
  orders_some?: Maybe<OrderWhereInput>;
  orders_none?: Maybe<OrderWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<VendorWhereInput[] | VendorWhereInput>;
  OR?: Maybe<VendorWhereInput[] | VendorWhereInput>;
  NOT?: Maybe<VendorWhereInput[] | VendorWhereInput>;
}

export interface ProductUpdateOneInput {
  create?: Maybe<ProductCreateInput>;
  update?: Maybe<ProductUpdateDataInput>;
  upsert?: Maybe<ProductUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<ProductWhereUniqueInput>;
}

export interface ProductWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  price?: Maybe<Float>;
  price_not?: Maybe<Float>;
  price_in?: Maybe<Float[] | Float>;
  price_not_in?: Maybe<Float[] | Float>;
  price_lt?: Maybe<Float>;
  price_lte?: Maybe<Float>;
  price_gt?: Maybe<Float>;
  price_gte?: Maybe<Float>;
  brand?: Maybe<String>;
  brand_not?: Maybe<String>;
  brand_in?: Maybe<String[] | String>;
  brand_not_in?: Maybe<String[] | String>;
  brand_lt?: Maybe<String>;
  brand_lte?: Maybe<String>;
  brand_gt?: Maybe<String>;
  brand_gte?: Maybe<String>;
  brand_contains?: Maybe<String>;
  brand_not_contains?: Maybe<String>;
  brand_starts_with?: Maybe<String>;
  brand_not_starts_with?: Maybe<String>;
  brand_ends_with?: Maybe<String>;
  brand_not_ends_with?: Maybe<String>;
  size?: Maybe<Int>;
  size_not?: Maybe<Int>;
  size_in?: Maybe<Int[] | Int>;
  size_not_in?: Maybe<Int[] | Int>;
  size_lt?: Maybe<Int>;
  size_lte?: Maybe<Int>;
  size_gt?: Maybe<Int>;
  size_gte?: Maybe<Int>;
  size_type?: Maybe<String>;
  size_type_not?: Maybe<String>;
  size_type_in?: Maybe<String[] | String>;
  size_type_not_in?: Maybe<String[] | String>;
  size_type_lt?: Maybe<String>;
  size_type_lte?: Maybe<String>;
  size_type_gt?: Maybe<String>;
  size_type_gte?: Maybe<String>;
  size_type_contains?: Maybe<String>;
  size_type_not_contains?: Maybe<String>;
  size_type_starts_with?: Maybe<String>;
  size_type_not_starts_with?: Maybe<String>;
  size_type_ends_with?: Maybe<String>;
  size_type_not_ends_with?: Maybe<String>;
  category?: Maybe<String>;
  category_not?: Maybe<String>;
  category_in?: Maybe<String[] | String>;
  category_not_in?: Maybe<String[] | String>;
  category_lt?: Maybe<String>;
  category_lte?: Maybe<String>;
  category_gt?: Maybe<String>;
  category_gte?: Maybe<String>;
  category_contains?: Maybe<String>;
  category_not_contains?: Maybe<String>;
  category_starts_with?: Maybe<String>;
  category_not_starts_with?: Maybe<String>;
  category_ends_with?: Maybe<String>;
  category_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  OR?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  NOT?: Maybe<ProductWhereInput[] | ProductWhereInput>;
}

export interface OrderCreateWithoutVendorInput {
  id?: Maybe<ID_Input>;
  product?: Maybe<ProductCreateOneInput>;
  date: String;
  status: String;
  quantity: Int;
}

export interface OrderUpdateManyMutationInput {
  date?: Maybe<String>;
  status?: Maybe<String>;
  quantity?: Maybe<Int>;
}

export interface OrderCreateManyWithoutVendorInput {
  create?: Maybe<
    OrderCreateWithoutVendorInput[] | OrderCreateWithoutVendorInput
  >;
  connect?: Maybe<OrderWhereUniqueInput[] | OrderWhereUniqueInput>;
}

export interface ProductUpdateDataInput {
  name?: Maybe<String>;
  price?: Maybe<Float>;
  brand?: Maybe<String>;
  size?: Maybe<Int>;
  size_type?: Maybe<String>;
  category?: Maybe<String>;
}

export interface ProductSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProductWhereInput>;
  AND?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  OR?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  NOT?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
}

export interface VendorUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface OrderCreateInput {
  id?: Maybe<ID_Input>;
  vendor?: Maybe<VendorCreateOneWithoutOrdersInput>;
  product?: Maybe<ProductCreateOneInput>;
  date: String;
  status: String;
  quantity: Int;
}

export interface OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput;
  data: OrderUpdateManyDataInput;
}

export interface VendorCreateOneWithoutOrdersInput {
  create?: Maybe<VendorCreateWithoutOrdersInput>;
  connect?: Maybe<VendorWhereUniqueInput>;
}

export interface OrderScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  date?: Maybe<String>;
  date_not?: Maybe<String>;
  date_in?: Maybe<String[] | String>;
  date_not_in?: Maybe<String[] | String>;
  date_lt?: Maybe<String>;
  date_lte?: Maybe<String>;
  date_gt?: Maybe<String>;
  date_gte?: Maybe<String>;
  date_contains?: Maybe<String>;
  date_not_contains?: Maybe<String>;
  date_starts_with?: Maybe<String>;
  date_not_starts_with?: Maybe<String>;
  date_ends_with?: Maybe<String>;
  date_not_ends_with?: Maybe<String>;
  status?: Maybe<String>;
  status_not?: Maybe<String>;
  status_in?: Maybe<String[] | String>;
  status_not_in?: Maybe<String[] | String>;
  status_lt?: Maybe<String>;
  status_lte?: Maybe<String>;
  status_gt?: Maybe<String>;
  status_gte?: Maybe<String>;
  status_contains?: Maybe<String>;
  status_not_contains?: Maybe<String>;
  status_starts_with?: Maybe<String>;
  status_not_starts_with?: Maybe<String>;
  status_ends_with?: Maybe<String>;
  status_not_ends_with?: Maybe<String>;
  quantity?: Maybe<Int>;
  quantity_not?: Maybe<Int>;
  quantity_in?: Maybe<Int[] | Int>;
  quantity_not_in?: Maybe<Int[] | Int>;
  quantity_lt?: Maybe<Int>;
  quantity_lte?: Maybe<Int>;
  quantity_gt?: Maybe<Int>;
  quantity_gte?: Maybe<Int>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<OrderScalarWhereInput[] | OrderScalarWhereInput>;
  OR?: Maybe<OrderScalarWhereInput[] | OrderScalarWhereInput>;
  NOT?: Maybe<OrderScalarWhereInput[] | OrderScalarWhereInput>;
}

export interface VendorCreateWithoutOrdersInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface OrderUpdateWithoutVendorDataInput {
  product?: Maybe<ProductUpdateOneInput>;
  date?: Maybe<String>;
  status?: Maybe<String>;
  quantity?: Maybe<Int>;
}

export interface ProductCreateOneInput {
  create?: Maybe<ProductCreateInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
}

export type VendorWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ProductCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  price: Float;
  brand: String;
  size: Int;
  size_type: String;
  category: String;
}

export interface VendorUpdateInput {
  name?: Maybe<String>;
  orders?: Maybe<OrderUpdateManyWithoutVendorInput>;
}

export interface VendorCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  orders?: Maybe<OrderCreateManyWithoutVendorInput>;
}

export interface OrderSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<OrderWhereInput>;
  AND?: Maybe<OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput>;
  OR?: Maybe<OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput>;
  NOT?: Maybe<OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput>;
}

export interface VendorUpdateOneWithoutOrdersInput {
  create?: Maybe<VendorCreateWithoutOrdersInput>;
  update?: Maybe<VendorUpdateWithoutOrdersDataInput>;
  upsert?: Maybe<VendorUpsertWithoutOrdersInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<VendorWhereUniqueInput>;
}

export type ProductWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface VendorUpdateWithoutOrdersDataInput {
  name?: Maybe<String>;
}

export interface OrderUpdateWithWhereUniqueWithoutVendorInput {
  where: OrderWhereUniqueInput;
  data: OrderUpdateWithoutVendorDataInput;
}

export interface ProductUpsertNestedInput {
  update: ProductUpdateDataInput;
  create: ProductCreateInput;
}

export interface OrderWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  vendor?: Maybe<VendorWhereInput>;
  product?: Maybe<ProductWhereInput>;
  date?: Maybe<String>;
  date_not?: Maybe<String>;
  date_in?: Maybe<String[] | String>;
  date_not_in?: Maybe<String[] | String>;
  date_lt?: Maybe<String>;
  date_lte?: Maybe<String>;
  date_gt?: Maybe<String>;
  date_gte?: Maybe<String>;
  date_contains?: Maybe<String>;
  date_not_contains?: Maybe<String>;
  date_starts_with?: Maybe<String>;
  date_not_starts_with?: Maybe<String>;
  date_ends_with?: Maybe<String>;
  date_not_ends_with?: Maybe<String>;
  status?: Maybe<String>;
  status_not?: Maybe<String>;
  status_in?: Maybe<String[] | String>;
  status_not_in?: Maybe<String[] | String>;
  status_lt?: Maybe<String>;
  status_lte?: Maybe<String>;
  status_gt?: Maybe<String>;
  status_gte?: Maybe<String>;
  status_contains?: Maybe<String>;
  status_not_contains?: Maybe<String>;
  status_starts_with?: Maybe<String>;
  status_not_starts_with?: Maybe<String>;
  status_ends_with?: Maybe<String>;
  status_not_ends_with?: Maybe<String>;
  quantity?: Maybe<Int>;
  quantity_not?: Maybe<Int>;
  quantity_in?: Maybe<Int[] | Int>;
  quantity_not_in?: Maybe<Int[] | Int>;
  quantity_lt?: Maybe<Int>;
  quantity_lte?: Maybe<Int>;
  quantity_gt?: Maybe<Int>;
  quantity_gte?: Maybe<Int>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<OrderWhereInput[] | OrderWhereInput>;
  OR?: Maybe<OrderWhereInput[] | OrderWhereInput>;
  NOT?: Maybe<OrderWhereInput[] | OrderWhereInput>;
}

export interface ProductUpdateInput {
  name?: Maybe<String>;
  price?: Maybe<Float>;
  brand?: Maybe<String>;
  size?: Maybe<Int>;
  size_type?: Maybe<String>;
  category?: Maybe<String>;
}

export interface ProductUpdateManyMutationInput {
  name?: Maybe<String>;
  price?: Maybe<Float>;
  brand?: Maybe<String>;
  size?: Maybe<Int>;
  size_type?: Maybe<String>;
  category?: Maybe<String>;
}

export interface OrderUpdateManyWithoutVendorInput {
  create?: Maybe<
    OrderCreateWithoutVendorInput[] | OrderCreateWithoutVendorInput
  >;
  delete?: Maybe<OrderWhereUniqueInput[] | OrderWhereUniqueInput>;
  connect?: Maybe<OrderWhereUniqueInput[] | OrderWhereUniqueInput>;
  set?: Maybe<OrderWhereUniqueInput[] | OrderWhereUniqueInput>;
  disconnect?: Maybe<OrderWhereUniqueInput[] | OrderWhereUniqueInput>;
  update?: Maybe<
    | OrderUpdateWithWhereUniqueWithoutVendorInput[]
    | OrderUpdateWithWhereUniqueWithoutVendorInput
  >;
  upsert?: Maybe<
    | OrderUpsertWithWhereUniqueWithoutVendorInput[]
    | OrderUpsertWithWhereUniqueWithoutVendorInput
  >;
  deleteMany?: Maybe<OrderScalarWhereInput[] | OrderScalarWhereInput>;
  updateMany?: Maybe<
    OrderUpdateManyWithWhereNestedInput[] | OrderUpdateManyWithWhereNestedInput
  >;
}

export interface OrderUpsertWithWhereUniqueWithoutVendorInput {
  where: OrderWhereUniqueInput;
  update: OrderUpdateWithoutVendorDataInput;
  create: OrderCreateWithoutVendorInput;
}

export interface OrderUpdateManyDataInput {
  date?: Maybe<String>;
  status?: Maybe<String>;
  quantity?: Maybe<Int>;
}

export interface VendorSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<VendorWhereInput>;
  AND?: Maybe<VendorSubscriptionWhereInput[] | VendorSubscriptionWhereInput>;
  OR?: Maybe<VendorSubscriptionWhereInput[] | VendorSubscriptionWhereInput>;
  NOT?: Maybe<VendorSubscriptionWhereInput[] | VendorSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface VendorPreviousValues {
  id: ID_Output;
  name: String;
  createdAt?: DateTimeOutput;
}

export interface VendorPreviousValuesPromise
  extends Promise<VendorPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface VendorPreviousValuesSubscription
  extends Promise<AsyncIterator<VendorPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AggregateOrder {
  count: Int;
}

export interface AggregateOrderPromise
  extends Promise<AggregateOrder>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateOrderSubscription
  extends Promise<AsyncIterator<AggregateOrder>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: ProductEdge[];
}

export interface ProductConnectionPromise
  extends Promise<ProductConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductEdge>>() => T;
  aggregate: <T = AggregateProductPromise>() => T;
}

export interface ProductConnectionSubscription
  extends Promise<AsyncIterator<ProductConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductSubscription>() => T;
}

export interface OrderPreviousValues {
  id: ID_Output;
  date: String;
  status: String;
  quantity: Int;
  createdAt?: DateTimeOutput;
}

export interface OrderPreviousValuesPromise
  extends Promise<OrderPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<String>;
  status: () => Promise<String>;
  quantity: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface OrderPreviousValuesSubscription
  extends Promise<AsyncIterator<OrderPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  date: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface Product {
  id: ID_Output;
  name: String;
  price: Float;
  brand: String;
  size: Int;
  size_type: String;
  category: String;
  createdAt?: DateTimeOutput;
}

export interface ProductPromise extends Promise<Product>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  price: () => Promise<Float>;
  brand: () => Promise<String>;
  size: () => Promise<Int>;
  size_type: () => Promise<String>;
  category: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ProductSubscription
  extends Promise<AsyncIterator<Product>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  brand: () => Promise<AsyncIterator<String>>;
  size: () => Promise<AsyncIterator<Int>>;
  size_type: () => Promise<AsyncIterator<String>>;
  category: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ProductNullablePromise
  extends Promise<Product | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  price: () => Promise<Float>;
  brand: () => Promise<String>;
  size: () => Promise<Int>;
  size_type: () => Promise<String>;
  category: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface OrderEdge {
  node: Order;
  cursor: String;
}

export interface OrderEdgePromise extends Promise<OrderEdge>, Fragmentable {
  node: <T = OrderPromise>() => T;
  cursor: () => Promise<String>;
}

export interface OrderEdgeSubscription
  extends Promise<AsyncIterator<OrderEdge>>,
    Fragmentable {
  node: <T = OrderSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ProductPreviousValues {
  id: ID_Output;
  name: String;
  price: Float;
  brand: String;
  size: Int;
  size_type: String;
  category: String;
  createdAt?: DateTimeOutput;
}

export interface ProductPreviousValuesPromise
  extends Promise<ProductPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  price: () => Promise<Float>;
  brand: () => Promise<String>;
  size: () => Promise<Int>;
  size_type: () => Promise<String>;
  category: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ProductPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Float>>;
  brand: () => Promise<AsyncIterator<String>>;
  size: () => Promise<AsyncIterator<Int>>;
  size_type: () => Promise<AsyncIterator<String>>;
  category: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AggregateVendor {
  count: Int;
}

export interface AggregateVendorPromise
  extends Promise<AggregateVendor>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVendorSubscription
  extends Promise<AsyncIterator<AggregateVendor>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProductSubscriptionPayload {
  mutation: MutationType;
  node: Product;
  updatedFields: String[];
  previousValues: ProductPreviousValues;
}

export interface ProductSubscriptionPayloadPromise
  extends Promise<ProductSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductPreviousValuesPromise>() => T;
}

export interface ProductSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductPreviousValuesSubscription>() => T;
}

export interface VendorConnection {
  pageInfo: PageInfo;
  edges: VendorEdge[];
}

export interface VendorConnectionPromise
  extends Promise<VendorConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<VendorEdge>>() => T;
  aggregate: <T = AggregateVendorPromise>() => T;
}

export interface VendorConnectionSubscription
  extends Promise<AsyncIterator<VendorConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VendorEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVendorSubscription>() => T;
}

export interface AggregateProduct {
  count: Int;
}

export interface AggregateProductPromise
  extends Promise<AggregateProduct>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductSubscription
  extends Promise<AsyncIterator<AggregateProduct>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface OrderSubscriptionPayload {
  mutation: MutationType;
  node: Order;
  updatedFields: String[];
  previousValues: OrderPreviousValues;
}

export interface OrderSubscriptionPayloadPromise
  extends Promise<OrderSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = OrderPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = OrderPreviousValuesPromise>() => T;
}

export interface OrderSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<OrderSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = OrderSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = OrderPreviousValuesSubscription>() => T;
}

export interface Order {
  id: ID_Output;
  date: String;
  status: String;
  quantity: Int;
  createdAt?: DateTimeOutput;
}

export interface OrderPromise extends Promise<Order>, Fragmentable {
  id: () => Promise<ID_Output>;
  vendor: <T = VendorPromise>() => T;
  product: <T = ProductPromise>() => T;
  date: () => Promise<String>;
  status: () => Promise<String>;
  quantity: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface OrderSubscription
  extends Promise<AsyncIterator<Order>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  vendor: <T = VendorSubscription>() => T;
  product: <T = ProductSubscription>() => T;
  date: () => Promise<AsyncIterator<String>>;
  status: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface OrderNullablePromise
  extends Promise<Order | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  vendor: <T = VendorPromise>() => T;
  product: <T = ProductPromise>() => T;
  date: () => Promise<String>;
  status: () => Promise<String>;
  quantity: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface OrderConnection {
  pageInfo: PageInfo;
  edges: OrderEdge[];
}

export interface OrderConnectionPromise
  extends Promise<OrderConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<OrderEdge>>() => T;
  aggregate: <T = AggregateOrderPromise>() => T;
}

export interface OrderConnectionSubscription
  extends Promise<AsyncIterator<OrderConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<OrderEdgeSubscription>>>() => T;
  aggregate: <T = AggregateOrderSubscription>() => T;
}

export interface ProductEdge {
  node: Product;
  cursor: String;
}

export interface ProductEdgePromise extends Promise<ProductEdge>, Fragmentable {
  node: <T = ProductPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductEdgeSubscription
  extends Promise<AsyncIterator<ProductEdge>>,
    Fragmentable {
  node: <T = ProductSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Vendor {
  id: ID_Output;
  name: String;
  createdAt?: DateTimeOutput;
}

export interface VendorPromise extends Promise<Vendor>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  orders: <T = FragmentableArray<Order>>(args?: {
    where?: OrderWhereInput;
    orderBy?: OrderOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface VendorSubscription
  extends Promise<AsyncIterator<Vendor>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  orders: <T = Promise<AsyncIterator<OrderSubscription>>>(args?: {
    where?: OrderWhereInput;
    orderBy?: OrderOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface VendorNullablePromise
  extends Promise<Vendor | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  orders: <T = FragmentableArray<Order>>(args?: {
    where?: OrderWhereInput;
    orderBy?: OrderOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface VendorEdge {
  node: Vendor;
  cursor: String;
}

export interface VendorEdgePromise extends Promise<VendorEdge>, Fragmentable {
  node: <T = VendorPromise>() => T;
  cursor: () => Promise<String>;
}

export interface VendorEdgeSubscription
  extends Promise<AsyncIterator<VendorEdge>>,
    Fragmentable {
  node: <T = VendorSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface VendorSubscriptionPayload {
  mutation: MutationType;
  node: Vendor;
  updatedFields: String[];
  previousValues: VendorPreviousValues;
}

export interface VendorSubscriptionPayloadPromise
  extends Promise<VendorSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = VendorPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VendorPreviousValuesPromise>() => T;
}

export interface VendorSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VendorSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VendorSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VendorPreviousValuesSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
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
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;