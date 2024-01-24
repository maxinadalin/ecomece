import Footer from "../components/navigations/footer"
import NavBar from "../components/navigations/navBar"
import Layout from "../hocs/layout"
import Registration from "./auth/Registration"



function Registro(){
    return(
        <Layout>
           <NavBar/>
           <Registration/>
           <Footer/>
        </Layout>
    )
}

export default Registro