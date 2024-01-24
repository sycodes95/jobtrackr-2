import { SortingFn } from "@tanstack/react-table";

export const caseInsensitiveSort: SortingFn<any> = (rowA, rowB, columnId) => {
  console.log(columnId);
  const valueA = rowA.getValue(columnId)?.toString().toLowerCase() ?? '';
  const valueB = rowB.getValue(columnId)?.toString().toLowerCase() ?? '';

  return valueA.localeCompare(valueB);
};