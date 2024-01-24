import Footer from "../components/navigations/footer"
import NavBar from "../components/navigations/navBar"
import Layout from "../hocs/layout"
import PasswordConfirm from "./auth/PasswordConfirm"


function ResetPasswordConfirm(){
    return(
        <Layout>
           <NavBar/>
           <PasswordConfirm/>
           <Footer/>
        </Layout>
    )
}

export default ResetPasswordConfirm