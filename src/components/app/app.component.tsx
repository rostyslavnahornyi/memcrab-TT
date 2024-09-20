import { FC } from "react";
import { MatrixContextProvider } from "../../contexts";
import { DataForm } from "../data-form";
import { MatrixTable } from "../matrix-table";

const App: FC = () => {
  return (
    <MatrixContextProvider>
      <DataForm />
      <MatrixTable />
    </MatrixContextProvider>
  );
};

export { App };
