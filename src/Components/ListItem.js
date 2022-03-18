const ListItem = ({ handleDelete, input, handleEdit }) => {
  return (
    <li className="flex justify-between w-10/12 lg:w-full border rounded-md border-slate-500 mx-auto py-3 my-4 px-4">
      <div>{input}</div>
      <div>
        <button
          className="text-slate-50 mr-2 bg-green-500 p-1 rounded-sm font-bold transition-all hover:text-green-500 hover:bg-slate-200 hover:border-green-500 hover:border"
          type="button"
        >
          {"E "}
          <i className="fas fa-edit"></i>
        </button>
        <button
          type="button"
          className="bg-red-500 text-white p-1 rounded-sm  font-bold transition-all hover:text-red-500 hover:bg-slate-200 hover:border-red-500 hover:border"
        >
          <i className="fas fa-trash"></i>
          {"D "}
        </button>
      </div>
    </li>
  );
};

export default ListItem;
// onClick={() => handleEdit(id)}
// onClick={() => handleDelete(id)}
