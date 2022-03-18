const Form = ({ handleChange, handleSubmit, isEditing, value }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="border flex flex-col p-6 border-slate-500 rounded-md w-10/12 max-w-lg mx-auto bg-slate-50"
    >
      <input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Add an item"
        className="px-3 py-2 text-base font-semibold bg-slate-200 ring-1 ring-slate-400 rounded-md outline-none focus:ring-blue-500 focus:ring-2 mb-6 text-slate-700"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className={
          isEditing
            ? "bg-green-500 uppercase font-semibold tracking-wider hover:bg-slate-100 hover:text-green-600 transition-all rounded-md px-3 py-1.5 text-slate-50 hover:border hover:border-green-500"
            : "bg-blue-500 uppercase font-semibold tracking-wider hover:bg-slate-100 hover:text-blue-600 transition-all rounded-md px-3 py-1.5 text-slate-50 hover:border hover:border-blue-500"
        }
      >
        {isEditing ? "Edit Item" : "Add item"}
      </button>
    </form>
  );
};

export default Form;
