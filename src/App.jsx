import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoInput from "./Components/Todo/TodoInput";
import TodoDetails from "./Components/Todo/TodoDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoInput />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
