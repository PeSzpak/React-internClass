import { useEffect, useState } from "react";

export function HideOrShow() {
  const [value, setValue] = useState("Tudo começa aqui!");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("builded (componente apareceu)");

    return () => {
      console.log("Destroyed (componente destruido)");
    };
  }, []);
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </>
  );
}
