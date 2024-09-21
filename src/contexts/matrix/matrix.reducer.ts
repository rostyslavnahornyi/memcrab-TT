import { Action, State } from "./matrix.types";

const initialState: State = {
  matrix: [],
  M: 0,
  N: 0,
  X: 0,
  hoveredCellId: null,
  nearestCellsId: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GENERATE_MATRIX": {
      const { M, N, X } = action.payload;

      const matrix = Array.from({ length: M }, (_, rowIndex) =>
        Array.from({ length: N }, (_, colIndex) => ({
          id: rowIndex * N + colIndex + 1,
          amount: Math.floor(Math.random() * 90),
        }))
      );

      return { ...state, matrix, M, N, X };
    }

    case "INCREMENT_CELL": {
      const { col, row } = action.payload;

      const updatedMatrix = state.matrix.map((rowMatrix, rowIndex) =>
        rowMatrix.map((cell, colIndex) =>
          rowIndex === row && colIndex === col
            ? { ...cell, amount: cell.amount + 1 }
            : cell
        )
      );
      return { ...state, matrix: updatedMatrix };
    }

    case "ADD_ROW": {
      const { matrix, N } = state;

      const newRow = Array.from({ length: N }, (_, colIndex) => ({
        id: matrix.length * N + colIndex + 1,
        amount: Math.floor(100 + Math.random() * 900),
      }));

      return { ...state, matrix: [...matrix, newRow] };
    }

    case "REMOVE_ROW": {
      const reducedMatrix = state.matrix.filter(
        (_, idx) => idx !== action.payload.row
      );

      return { ...state, matrix: reducedMatrix };
    }

    case "SET_HOVERED_CELL":
      return {
        ...state,
        hoveredCellId: action.payload.hoveredCellId,
      };
    case "SET_NEAREST_CELLS":
      return {
        ...state,
        nearestCellsId: action.payload.nearestCellsId,
      };

    default:
      return state;
  }
};

export { initialState, reducer };
