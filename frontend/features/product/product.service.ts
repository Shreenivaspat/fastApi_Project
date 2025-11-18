import { api } from "@/lib/api";
export async function fetchProducts() {
  const res = await api.get("/products");
  return res.data || [];
}
