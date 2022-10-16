import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setInputvalue] = useState("");
  const handleKeydown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please dont enter a number");
      e.preventDefault();
    }
    e.keyCode === 13 && setInputvalue("");
  };

  const handleAreaPaste = (e) => {
    e.target.style.border = "2px solid red";
    e.target.value = e.clipboardData.getData("text").toLocaleUpperCase();
    e.preventDefault();
  };

  const handleDelete = (e) => {
    e.keyCode === 13 && alert("delete clicked");
    // e.preventDefault();

    // e.target.style.border = e.target.style.border = "";
  };

  return (
    <div className="container text-center">
      <h1>CLIPBOARD EVENTS</h1>
      <input
        className="form-control"
        type="text"
        value={inputValue}
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputvalue(e.target.value);
        }}
        onKeyDown={handleKeydown}
      />
      <p className="text-start mt-4">{inputValue}</p>

      <textarea
        className="form-control"
        name="area"
        id="area"
        rows="10"
        onPaste={handleAreaPaste}
        onKeyDown={handleDelete}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
