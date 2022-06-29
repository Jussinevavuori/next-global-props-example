import { z } from "zod";

export const productsApi = {
  productSchema: z.object({
    name: z.string(),
    id: z.string(),
    price: z.number(),
  }),
  isProduct(arg: any): arg is Product {
    return this.productSchema.safeParse(arg).success;
  },
  isProducts(arg: any): arg is Product[] {
    return z.array(this.productSchema).safeParse(arg).success;
  },
  async getAll() {
    const result = await fetch("http://localhost:3000/api/products").then((r) =>
      r.json()
    );
    if (this.isProducts(result)) return result;

    console.log("Invalid products");
    return [];
  },
};
