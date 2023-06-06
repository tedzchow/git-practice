import { Provider } from "react-redux";
import "./App.css";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Todo from "./components/Todo";
import store from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
