"use client";

import { useSelection } from "@/providers";

export interface ColumnDefinition<T> {
  key: keyof T;
  header: string;
}

interface TableProps<T> {
  data: T[];
  columns: ColumnDefinition<T>[];
}

export const Table = <T,>({ data, columns }: TableProps<T>) => {
  const { selectedIds, toggleSelect, selectAll } = useSelection();
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)}>
              {col.key === "id" ? (
                <input
                  type="checkbox"
                  checked={
                    selectedIds ===
                    new Set(data.map((item) => item[col.key] as string))
                  }
                  onChange={() =>
                    selectAll(data.map((item) => item[col.key] as string))
                  }
                />
              ) : (
                col.header
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={String(col.key)}>
                {col.key === "id" ? (
                  <input
                    type="checkbox"
                    checked={selectedIds.has(item[col.key] as string)}
                    onChange={() => toggleSelect(String(item[col.key]))}
                  />
                ) : (
                  (item[col.key] as React.ReactNode)
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
