import Article1 from "./Article1.tsx";
import Nav from "./Nav.tsx";
import Sidebar from "./Sidebar.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";



export default function Blog() {



   return (
    <>
        <Header/>

        <Nav/>
        <Article1 h2={"Optimizing Your Car Sound System"} p1={"Explore tips and tricks to enhance your car audio experience."} p2={"Tag: Car Audio"}/>
        <Article1 h2={"Choosing the Right Car Stereo"} p1={"Guidance on selecting the perfect car stereo for your needs."} p2={"Tag: Audio Equipment"}/>
        <Article1 h2={"DIY Car Speaker Installations"} p1={"Step-by-step instructions for installing speakers in your vehicle."} p2={"Tag: Installation"}/>


        <Sidebar/>

        <Footer/>
    </>
   )
}