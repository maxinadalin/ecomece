import Footer from "../components/navigations/footer"
import NavBar from "../components/navigations/navBar"
import Layout from "../hocs/layout"
import recoverPass from "./auth/recoverPass"


function RecoverPass(){
    return(
        <Layout>
           <NavBar/>
           <recoverPass/>
           <Footer/>
        </Layout>
    )
}

export default RecoverPass