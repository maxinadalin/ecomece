import { Provider } from "react-redux";
import store from "./store";
// En App.js
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Error from "./containers/errors/Error404";
import Home from "./containers/Home";
import Registro from "./containers/registro";
import Activacion from "./containers/Activar";
import Logueo from "./containers/Loguear";
import RecoverPass from "./containers/auth/recoverPass";
import ResetPasswordConfirm from "./containers/PasswordConfirm";
import Categoria from "./containers/categories/categoria";


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<Error/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        {/* Authentication */}
        <Route path="/registration" element={<Registro/>}></Route>
        <Route path="/activate/:uid/:token" element={<Activacion/>}></Route>
        <Route path="/Login" element={<Logueo/>}></Route>
        <Route path="/Recuperacion" element={<RecoverPass/>}></Route>
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}></Route>

        {/* categorias */}
        <Route path="/categories" element={<Categoria/>}></Route>



      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
