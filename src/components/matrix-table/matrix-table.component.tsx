import { CellId, useMatrixContext } from "../../contexts";
import {
  calculateColumnPercentile,
  calculateRowSum,
  findNearestCellsId,
} from "../../helpers";
import { Button } from "../button";
import styles from "./styles.module.css";

const MatrixTable = () => {
  const { N, X, matrix, nearestCellsId, dispatch } = useMatrixContext();

  const handleCellClick = (row: number, col: number) => {
    dispatch({ type: "INCREMENT_CELL", payload: { col, row } });
  };

  const handleMouseEnter = (rowIndex: number, colIndex: number) => {
    const hoveredCell = matrix[rowIndex][colIndex];

    dispatch({
      type: "SET_HOVERED_CELL",
      payload: { hoveredCellId: hoveredCell.id },
    });

    const nearestCellsId = findNearestCellsId(X, matrix, hoveredCell);

    dispatch({
      type: "SET_NEAREST_CELLS",
      payload: { nearestCellsId },
    });
  };

  const handleMouseLeave = () => {
    dispatch({ type: "SET_HOVERED_CELL", payload: { hoveredCellId: null } });
  };

  const isCellHighlighted = (cellId: CellId) => {
    return nearestCellsId?.includes(cellId);
  };

  if (!matrix.length) return null;

  return (
    <main>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {Array.from({ length: N + 1 }, (_, index) => (
                <th key={index}>{index ? `N = ${index}` : ""}</th>
              ))}

              <th>Row Sum</th>
            </tr>
          </thead>

          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>M = {rowIndex + 1}</td>

                {row.map((cell, colIndex) => (
                  <td
                    key={cell.id}
                    onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    className={`${
                      isCellHighlighted(cell.id) ? styles.highlight : ""
                    } ${styles.cell}`}
                  >
                    {cell.amount}
                  </td>
                ))}
                <td>{calculateRowSum(row)}</td>

                <td>
                  <Button
                    dangerous
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_ROW",
                        payload: { row: rowIndex },
                      })
                    }
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}

            <tr>
              <td>50%</td>

              {Array.from({ length: N }, (_, colIndex) => (
                <td key={colIndex}>
                  {calculateColumnPercentile(matrix, colIndex)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <Button onClick={() => dispatch({ type: "ADD_ROW" })}>Add Row</Button>
    </main>
  );
};

export { MatrixTable };
