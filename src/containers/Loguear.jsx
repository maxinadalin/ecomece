import Footer from "../components/navigations/footer"
import NavBar from "../components/navigations/navBar"
import Layout from "../hocs/layout"
import Login from "./auth/login"


function Logueo(){
    return(
        <Layout>
           <NavBar/>
           <Login/>
           <Footer/>
        </Layout>
    )
}

export default Logueo