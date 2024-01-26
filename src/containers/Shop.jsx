import Footer from "../components/navigations/footer"
import NavBar from "../components/navigations/navBar"
import Layout from "../hocs/layout"
import Categorias from "./categories/categoria"



function Home(){
    return(
        <Layout>
           <NavBar/>
           <Categorias/>
           <Footer/>
        </Layout>
    )
}

export default Home