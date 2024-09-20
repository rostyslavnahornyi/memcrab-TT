import { useMatrixContext } from "../../contexts";
import { calculateColumnPercentile, calculateRowSum } from "../../helpers";
import { Button } from "../button";
import styles from "./styles.module.css";

const MatrixTable = () => {
  const { N, matrix, dispatch } = useMatrixContext();

  const handleCellClick = (row: number, col: number) => {
    dispatch({ type: "INCREMENT_CELL", payload: { col, row } });
  };

  if (!matrix.length) return null;

  return (
    <main>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              {Array.from({ length: N + 1 }, (_, index) => {
                if (!index) return <th></th>;

                return <th key={index}>N = {index}</th>;
              })}
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
                    onClick={() => handleCellClick(rowIndex, colIndex)}
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
