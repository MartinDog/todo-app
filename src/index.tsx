import ReactDOM from "react-dom/client";
import "./index.css";
import TodoTemplate from "./TodoTemplate";
import reportWebVitals from "./reportWebVitals";
import TodoInsert from "./Insert/TodoInsert";
import TodoList from "./TodoList/TodoList";
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App></App>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
