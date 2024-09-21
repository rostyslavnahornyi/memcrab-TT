import { Dispatch } from "react";

interface MatrixContextProps extends State {
  readonly dispatch: Dispatch<Action>;
}

type State = {
  matrix: Cell[][];
  M: number;
  N: number;
  X: number;
  hoveredCellId: CellId | null;
  nearestCellsId: CellId[];
};

type Action =
  | {
      type: "GENERATE_MATRIX";
      payload: { M: State["M"]; N: State["N"]; X: State["X"] };
    }
  | { type: "INCREMENT_CELL"; payload: { row: number; col: number } }
  | { type: "ADD_ROW" }
  | { type: "REMOVE_ROW"; payload: { row: number } }
  | {
      type: "SET_HOVERED_CELL";
      payload: { hoveredCellId: State["hoveredCellId"] };
    }
  | {
      type: "SET_NEAREST_CELLS";
      payload: { nearestCellsId: State["nearestCellsId"] };
    };

export type { Action, MatrixContextProps, State };

/**
 * Common types
 */
export type CellId = number;
export type CellValue = number;

export type Cell = {
  id: CellId;
  amount: CellValue;
};
