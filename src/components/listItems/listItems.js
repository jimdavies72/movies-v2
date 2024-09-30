import "./listItems.css";
import { useState } from "react";
import { ItemCard } from "../itemCard/itemCard";

export const ListItem = ({ list, listHandler }) => {
  const [itemText, setItemText] = useState("");

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      addHandler();
    }
  };

  const addHandler = () => {
    if (itemText !== "") {
      const newArray = [...list];
      newArray.push(itemText);
      listHandler(newArray);
      setItemText("");
    }
  };

  const removeHandler = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    listHandler(newArray);
  };

  const editHandler = (item, update) => {
    //window.alert("So this would be an edit/update!");
    const newArray = [...list];
    const index = newArray.indexOf(item);
    if (index !== -1) {
      newArray[index] = update;
      listHandler(newArray);
    }
  };

  return (
    <div className="list-container">
      <div className="list-items">
        {list.map((listItem, index) => {
          return (
            <ItemCard
              key={index}
              index={index}
              item={listItem}
              editHandler={editHandler}
              removeHandler={removeHandler}
            />
          );
        })}
      </div>
      <div className="list-input">
        <input
          type="text"
          autoComplete="off"
          placeholder="Item"
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
          onKeyDown={keyDownHandler}
        />
        <p>
          <i className="fa fa-plus-square" onClick={addHandler}></i>
        </p>
      </div>
    </div>
  );
};
