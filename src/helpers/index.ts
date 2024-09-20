import { MatrixContextProps } from "../contexts/matrix/matrix.types";

export const calculateRowSum = (row: { amount: number }[]) => {
  return row.reduce((sum, cell) => sum + cell.amount, 0);
};

export const calculateColumnPercentile = (
  matrix: MatrixContextProps["matrix"],
  colIndex: number
) => {
  console.log({ matrix, colIndex });
  const colValues = matrix.map((row) => row[colIndex].amount / 2);

  const sumColValues = colValues.reduce((acc, currVal) => acc + currVal, 0);

  return sumColValues;
};
