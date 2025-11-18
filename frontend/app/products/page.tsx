import ProductCard from "@/components/product";
import { fetchProducts } from "@/features/product/product.service";

export default async function ProductsPage() {
  const products = await fetchProducts();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
