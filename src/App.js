import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

const idGen = () => Math.random() * 1000; //Generate random Number as the ID

const App = () => {
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    if (value.length > 0) {
      const newItem = { id: idGen(), input: value };
      setTaskList([...taskList, newItem]);
    }
    setValue("");
    setIsEditing(false);
    e.preventDefault();
  };

  const handleDelete = (id) => {
    const newList = taskList.filter((task) => task.id !== id);
    setTaskList(newList);
    setValue("");
    setIsEditing(false);
  };
  const handleEdit = (id) => {
    if (value.length <= 0) {
      const textObj = taskList.find((task) => task.id === id).input;
      const newList = taskList.filter((task) => task.id !== id);
      setTaskList(newList);
      setValue(textObj);
      setIsEditing(true);
    }
  };

  const handleClear = () => {
    setTaskList([]);
    setValue("");
    setIsEditing(false);
  };
  return (
    <main>
      <h2 className="text-center text-2xl lg:text-3xl font-bold my-3 lg:my-6">
        Task Tracker
      </h2>
      <Form
        handleSubmit={handleSubmit}
        value={value}
        isEditing={isEditing}
        handleChange={handleChange}
      />
      <h3 className="text-center font-bold text-xl lg:text-2xl my-3 lg:my-5">
        Tasks List
      </h3>
      <List
        taskList={taskList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleClear={handleClear}
      />
    </main>
  );
};

export default App;
