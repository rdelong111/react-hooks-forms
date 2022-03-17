import React from "react";

function Form({firstName, lastName, handleFNChange, handleLNChange}) {
  return (
    <form>
      <input type="text" onChange={handleFNChange} value={firstName} />
      <input type="text" onChange={handleLNChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
