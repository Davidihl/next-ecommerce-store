import ProductList from '../components/ProductList';

export const metadata = {
  title: 'Product Overview',
  description: 'Explore the products of PULSE',
};

export default function ProductsPage() {
  return (
    <section>
      <h1>ProductList</h1>
      <ProductList />
    </section>
  );
}
