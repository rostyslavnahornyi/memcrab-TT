import { Dispatch } from "react";

interface MatrixContextProps extends State {
  readonly dispatch: Dispatch<Action>;
}

type State = {
  matrix: Cell[][];
  M: number;
  N: number;
  X: number;
};

type Action =
  | { type: "GENERATE_MATRIX"; payload: { M: number; N: number } }
  | { type: "INCREMENT_CELL"; payload: { row: number; col: number } }
  | { type: "ADD_ROW" }
  | { type: "REMOVE_ROW"; payload: { row: number } };

type Cell = {
  id: number;
  amount: number;
};

export type { Action, MatrixContextProps, State };
