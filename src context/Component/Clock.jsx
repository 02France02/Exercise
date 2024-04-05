import { LanguageContext } from "../App";
import { useContext, useRef } from "react";

export function Clock() {
  const { language, setLanguage } = useContext(LanguageContext);
  const refSelect = useRef(null);

  function handleTime() {
    setLanguage(
      refSelect.current.value === "ita" ? "Ora corrente" : "Ora non ita"
    );
  }

  return (
    <>
      <h1>{language}</h1>
      <select
        name="language"
        id="language"
        onChange={handleTime}
        ref={refSelect}
      >
        <option value="ita" id="it">
          IT
        </option>
        <option value="en" id="en">
          EN
        </option>
      </select>
    </>
  );
}
