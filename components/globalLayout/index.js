import Navbar from "../Navbar";
import Footer from "../Footer";

const GlobalLayout=({children})=>{
    return(
        <>
      <Navbar />
      {children}
      <Footer/>
      </>
    )
}

export default GlobalLayout; 