import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";
import { useCallback, useState } from "react";
const TodoInsert = (values: any) => {
  const [value, setValue] = useState("");
  const { onInsert } = values;
  const onChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}></input>
      <button
        type="button"
        onClick={(e) => {
          onInsert(value);
          e.preventDefault();
        }}>
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
