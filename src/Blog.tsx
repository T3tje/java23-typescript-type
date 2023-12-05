import Article1 from "./Article1.tsx";
import Article2 from "./Article2.tsx";
import Article3 from "./Article3.tsx";
import Nav from "./Nav.tsx";
import Sidebar from "./Sidebar.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
export default function Blog() {
   return (
    <>
        <Header/>

        <Nav/>

        <Article1/>
        <Article2/>
        <Article3/>

        <Sidebar/>

        <Footer/>
    </>
   )
}