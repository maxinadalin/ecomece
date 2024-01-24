import Footer from "../components/navigations/footer"
import NavBar from "../components/navigations/navBar"
import Layout from "../hocs/layout"
import Activate from "./auth/activate"


function Activacion(){
    return(
        <Layout>
           <NavBar/>
           <Activate/>
           <Footer/>
        </Layout>
    )
}

export default Activacion