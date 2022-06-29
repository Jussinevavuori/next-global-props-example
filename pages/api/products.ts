import type { NextApiRequest, NextApiResponse } from "next";

const products: Product[] = [
  {
    id: "1",
    name: "Macbook Air M2",
    price: 1199,
    slug: "macbook-air-m2",
  },
  {
    id: "2",
    name: 'Macbook Pro 13" M2',
    price: 1299,
    slug: "macbook-pro-13-m2",
  },
  {
    id: "3",
    name: 'Macbook Pro 14" M1',
    price: 1999,
    slug: "macbook-pro-14-m1",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Unimplemented" });
  }

  res.status(200).json(products);
}
