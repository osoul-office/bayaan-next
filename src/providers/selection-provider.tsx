"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type SelectionContextType = {
  selectedIds: Set<string>;
  toggleSelect: (id: string) => void;
  clearSelection: () => void;
  selectAll: (ids: string[]) => void;
};

const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined,
);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  useEffect(() => console.log(selectedIds), [selectedIds]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const clearSelection = () => setSelectedIds(new Set());

  const selectAll = (ids: string[]) => setSelectedIds(new Set(ids));

  return (
    <SelectionContext.Provider
      value={{ selectedIds, toggleSelect, clearSelection, selectAll }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context)
    throw new Error("useSelection must be used within SelectionProvider");
  return context;
};
