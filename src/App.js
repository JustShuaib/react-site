import { useState } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

const idGen = () => Math.floor(Math.random() * 500);

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
    e.preventDefault();
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };
  const handleEdit = (e) => {
    e.preventDefault();
  };
  const handleClear = () => {
    setTaskList([]);
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
