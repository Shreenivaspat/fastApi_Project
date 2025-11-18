"use client";
import Link from "next/link";
import { Card, CardContent, Button } from "@mui/material";

export default function ProductCard({ product }: any) {
  return (
    <Card>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover"
        />
      )}
      <CardContent>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="font-bold">₹{product.price}</div>
          <Link href={`/orders?product_id=${product._id}`}>
            <Button variant="contained" size="small">
              Order
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
