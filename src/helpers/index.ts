import {
  Cell,
  MatrixContextProps,
  State,
} from "../contexts/matrix/matrix.types";

export const calculateRowSum = (row: { amount: number }[]) => {
  return row.reduce((sum, cell) => sum + cell.amount, 0);
};

export const calculateColumnPercentile = (
  matrix: State["matrix"],
  colIndex: number
) => {
  const colValues = matrix.map((row) => row[colIndex].amount / 2);

  const sumColValues = colValues.reduce((acc, currVal) => acc + currVal, 0);

  return sumColValues;
};

export const findNearestCellsId = (
  X: State["X"],
  matrix: State["matrix"],
  hoveredCell: Cell
) => {
  const allCells = matrix.flat();

  const sortedByDifference = allCells
    .filter((cell) => cell.id !== hoveredCell.id)
    .sort(
      (a, b) =>
        Math.abs(a.amount - hoveredCell.amount) -
        Math.abs(b.amount - hoveredCell.amount)
    );

  return sortedByDifference.slice(0, X).map((cell) => cell.id);
};
