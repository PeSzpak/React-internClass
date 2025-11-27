import { useState } from "react";
import { Button } from "../style";

interface ButtonCount {
  textup: string;
  textdown: string
}
    export function CounterBtn(props: ButtonCount) {
      const [counter, setCounter] = useState(0)
      const increment = () => setCounter(counter + 1)
      const decrement = () => { setCounter(prevCounter => Math.max(0, prevCounter - 1)) }
    return (
        <>
        <h1>Você clicou no botão <strong>{counter}</strong> vezes </h1>
      <button onClick={increment}>{props.textup}</button>
     {counter > 0 && (<Button onClick={decrement}>{props.textdown}</Button>)}
    </>
  );
}