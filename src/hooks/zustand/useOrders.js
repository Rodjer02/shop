import { create } from "zustand";

export const useOrders = create((set) => ({
  orders: [],
  deleteOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((el) => el._id !== id),
    })),
  addToOrders: (item) =>
    set((state) => {
      console.log(item);
      if (!state.orders.find((order) => order._id === item._id)) {
        return {
          orders: [...state.orders, { ...item, count: 1 }],
        };
      } else {
        return {
          orders: state.orders.map((order) => {
            let count = order.count;

            if (order._id === item._id) {
              return {
                ...order,
                count: count + 1,
              };
            }
            return order;
          }),
        };
      }
    }),
}));
