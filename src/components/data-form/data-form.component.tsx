import { FC, FormEvent, useState } from "react";
import { Button } from "../button";
import { Input } from "../input";
import styles from "./styles.module.css";
import { useMatrixContext } from "../../contexts";

const DataForm: FC = () => {
  const [M, setM] = useState<number>();
  const [N, setN] = useState<number>();
  const [X, setX] = useState<number>();

  const { dispatch } = useMatrixContext();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!M || !N || !X) {
      return;
    }

    if (!(M >= 0 && M <= 100)) {
      return alert("M should contain value from 0 to 100");
    }
    if (!(N >= 0 && N <= 100)) {
      return alert("N should contain value from 0 to 100");
    }
    if (!(X >= 0 && X <= M * N)) {
      return alert(`X should contain value from 0 to ${M & N}`);
    }

    dispatch({ type: "GENERATE_MATRIX", payload: { M, N, X } });
  };

  return (
    <form className={styles.dataForm} onSubmit={submitHandler}>
      <Input
        placeholder="Enter M..."
        value={M}
        onChange={(mValue) => setM(+mValue)}
        type="number"
      />
      <Input
        placeholder="Enter N..."
        value={N}
        onChange={(nValue) => setN(+nValue)}
        type="number"
      />
      <Input
        placeholder="Enter X..."
        value={X}
        onChange={(xValue) => setX(+xValue)}
        disabled={!M || !N}
      />
      <Button disabled={!M || !N}>Generate Matrix</Button>
    </form>
  );
};

export { DataForm };
