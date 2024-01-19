import { Provider } from "react-redux";
import store from "./store";
// En App.js
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Error from "./containers/errors/Error404";
import Home from "./containers/Home";
import Registration from "./containers/auth/registration";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<Error/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        {/* Authentication */}
        <Route path="/registration" element={<Registration/>}></Route>

      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
