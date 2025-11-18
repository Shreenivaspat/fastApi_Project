import { api } from "@/lib/api";
export async function createOrder(payload: any) {
  const res = await api.post("/orders", payload);
  return res.data;
}
