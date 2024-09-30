import "./itemCard.css";
import { useState } from "react";

export const ItemCard = ({ index, item, editHandler, removeHandler }) => {
  const [inEdit, setInEdit] = useState(false);
  const [updateText, setUpdateText] = useState(item);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      updateItem();
    }
  };

  const updateItem = () => {
    setInEdit(false);
    editHandler(item, updateText);
  };

  return (
    <div className="item-card">
      {inEdit ? (
        <input
          type="text"
          autoComplete="off"
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
          onKeyDown={keyDownHandler}
        />
      ) : (
        <h3 className="item">{updateText}</h3>
      )}
      <div className="icons">
        <p>
          {!inEdit ? (
            <i className="fa fas fa-edit " onClick={() => setInEdit(true)}></i>
          ) : (
            <i className="fa fas fa-edit " onClick={() => updateItem()}></i>
          )}
        </p>
        <p>
          <i className="fa fa-trash" onClick={() => removeHandler(index)}></i>
        </p>
      </div>
    </div>
  );
};
