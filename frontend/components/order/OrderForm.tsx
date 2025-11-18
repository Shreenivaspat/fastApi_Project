"use client";
import { useState } from "react";
import { createOrder } from "@/features/order/order.service";
import { useSearchParams } from "next/navigation";
import { TextField, Button } from "@mui/material";

export default function OrderForm() {
  const params = useSearchParams();
  const prodId = params?.get("product_id") || "";
  const [form, setForm] = useState({
    customer_name: "",
    address: "",
    quantity: 1,
    product_id: prodId,
  });

  const submit = async () => {
    const res = await createOrder(form);
    if (res?.order_id) alert("Order placed: " + res.order_id);
  };

  return (
    <div className="max-w-xl bg-white p-6 shadow">
      <TextField
        label="Name"
        fullWidth
        className="mb-3"
        value={form.customer_name}
        onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
      />
      <TextField
        label="Address"
        fullWidth
        className="mb-3"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <TextField
        label="Quantity"
        type="number"
        fullWidth
        className="mb-3"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })}
      />
      <Button variant="contained" onClick={submit}>
        Place Order
      </Button>
    </div>
  );
}
