import { create } from "zustand";

export const UseSearchProduct = create((set) => ({
  searchValue: "",
  setSearchValue: (value) =>
    set(() => ({
      searchValue: value,
    })),
}));
