import create from "zustand";

type CartItem = { productId: string; qty: number };

type State = {
  items: CartItem[];
  add: (p: string, qty?: number) => void;
};

export const useCart = create<State>((set) => ({
  items: [],
  add: (p, qty = 1) =>
    set((s) => ({ items: [...s.items, { productId: p, qty }] })),
}));
