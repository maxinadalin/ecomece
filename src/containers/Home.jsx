import Footer from "../components/navigations/footer"
import NavBar from "../components/navigations/navBar"
import Layout from "../hocs/layout"



function Home(){
    return(
        <Layout>
           <NavBar/>
           <Footer/>
        </Layout>
    )
}

export default Home