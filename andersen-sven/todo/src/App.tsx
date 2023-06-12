import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/_store/store";

import TodoList from "./pages/TodoList/TodoList";

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
