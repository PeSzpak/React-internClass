import { useState } from "react";
import { HideOrShow } from "./components/hideOrShow";
import { Button } from "./style";
import { CounterBtn } from "./components/contador";
export function SouBotao() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <>
          <HideOrShow />
          <CounterBtn
            textup="Clique aqui e aumente o numero"
            textdown="clique aqui e diminua o numero"
          />
        </>
      )}
      <br /> <br /> <br />
      <Button onClick={() => setIsVisible(!isVisible)}>
        Hide Or Show button
      </Button>
    </>
  );
}
