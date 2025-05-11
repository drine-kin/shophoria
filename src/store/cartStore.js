import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist(
        (set, get) => ({
            items: [],
            addToCart: (item) => {
                const existing = get().items.find((i) => i.id === item.id);
                if (existing) {
                    set({
                        items: get().items.map((i) =>
                            i.id === item.id
                                ? {
                                      ...i,
                                      cartQty: i.cartQty + item.cartQty,
                                  }
                                : i
                        ),
                    });
                } else {
                    set({
                        items: [...get().items, item],
                    });
                }
            },
            removeFromCart: (id) => {
                set({
                    items: get().items.filter((i) => i.id !== id),
                });
            },
            clearCart: () => set({ items: [] }),
        }),
        {
            name: "carts",
        }
    )
);

export default useCartStore;
