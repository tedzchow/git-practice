import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./components/store";
import { Provider } from "react-redux";

import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
