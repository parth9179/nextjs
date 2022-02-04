import { Col, Image, Row } from "react-bootstrap";
import { assetImage } from "../../const/enum";

const Empowring = () => {
    return(
        <>
         <section className="empowering-main">
             <div className="custom-container">
                 <Row className="custom-row-class">
                     <Col lg={6} sm={12}>
                        <div className="empower-box">
                            <div className="text-center custom-head-part">
                                <h3 className="main-heading"><span>Empowering</span> <br/> Features</h3>
                            </div>
                            <div className="comman-box">
                                <Image src={assetImage.Img1.src} alt="img" />
                                Adding Solutions 
                            </div>
                            <div className="comman-box">
                                <Image src={assetImage.Img2.src} alt="img" />
                                Keyword Marking
                            </div>
                            <div className="comman-box">
                                <Image src={assetImage.Img3.src} alt="img" />
                                Whiteboard
                            </div>
                            <div className="comman-box">
                                <Image src={assetImage.Img4.src} alt="img" />
                                Various Question Type
                            </div>
                            <div className="comman-box">
                                <Image src={assetImage.Img5.src} alt="img" />
                                Quiz Customization
                            </div>
                        </div>
                     </Col>
                     <Col lg={6} sm={12}>
                        <div className="empower-box installation-easy">
                            <div className="text-center custom-head-part">
                                <h3 className="main-heading"><span>Integration</span> <br/>Easily</h3>
                            </div>
                            <div className="img-box">
                                <Image src={assetImage.JackettRound.src} alt="Jackett" />
                            </div>
                        </div>
                     </Col>

                 </Row>
             </div>
         </section>
        
        </>
    );
}

export default Empowring;