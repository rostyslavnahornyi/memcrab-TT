/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { initialState, reducer } from "./matrix.reducer";

import { MatrixContextProps } from "./matrix.types";

const MatrixContext = createContext<MatrixContextProps>({
  dispatch: () => "",
  matrix: [],
  M: 0,
  N: 0,
  X: 0,
  hoveredCellId: null,
  nearestCellsId: [],
});

const MatrixContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MatrixContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MatrixContext.Provider>
  );
};

const useMatrixContext = () => {
  const context = useContext(MatrixContext);

  if (!context) {
    throw new Error(
      "useMatrixContext must be used within a MatrixContextProvider"
    );
  }
  return context;
};

export { MatrixContextProvider, useMatrixContext };
