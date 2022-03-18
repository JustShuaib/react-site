import ListItem from "./ListItem";

// import { useState } from "react";
const List = ({ handleDelete, handleClear, handleEdit, taskList }) => {
  // const [input, setInput] = useState('');
  return (
    <ul className="w-full max-w-lg mx-auto text-center">
      {taskList.map((task) => {
        return (
          <ListItem
            key={task.id}
            input={task.input}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
      {/* <ListItem></ListItem> */}
      <button
        onClick={handleClear}
        className="bg-red-500 text-slate-50 uppercase tracking-wider font-semibold rounded-md py-2 px-3 w-10/12 mt-4 lg:w-full hover:text-red-500 hover:bg-slate-200 hover:border hover:border-red-500 transition-all"
        type="button"
      >
        clear tasks
      </button>
    </ul>
  );
};

export default List;
