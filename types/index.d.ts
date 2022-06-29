type Product = {
  name: string;
  id: string;
  price: number;
  slug: string;
};

type GlobalProps = {
  products: Product[];
};
