import ContentRow from "./ContentRow";
import Footer from "./Footer";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Contentwrapper = () => {
    return (
        <div >


            <div id="content-wrapper" className="d-flex flex-column">


                <div id="content">
                    <TopBar />
                    <ContentRow />
                </div>
                <Footer />



            </div>



        </div>
    );
}

export default Contentwrapper;