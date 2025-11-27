import { HelloWd } from "./hello";
import { SouBotao } from "./button";
import { CounterBtn } from "./components/contador";
function App() {
  return (
    <>
      <CounterBtn
        textup="Clique aqui e aumente o numero"
        textdown="clique aqui e diminua o numero"
      />
      <HelloWd />
      <br />
      <SouBotao />
    </>
  );
}

export default App;
