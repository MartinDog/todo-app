import "./TodoListItem.scss";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
const TodoListItem = ({ content, onRemove, onToggle }: any) => {
  const { text, checked } = content;
  return (
    <>
      <div className="TodoListItem">
        <div
          className={"checkbox"}
          onClick={() => {
            onToggle(content.id);
          }}>
          {content.checked ? (
            <MdCheckBox></MdCheckBox>
          ) : (
            <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
          )}
          <div className="text">{content.text}</div>
        </div>
        <div
          className="remove"
          onClick={() => {
            onRemove(content.id);
          }}>
          <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
      </div>
    </>
  );
};
export default TodoListItem;
