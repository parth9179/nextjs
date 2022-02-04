import { Col, Image, Row } from "react-bootstrap";
import { assetImage } from "../../const/enum";

const RealImpact = () => {
    return(
        <>
            <section className="give-me-real-imapact">
                <div className="custom-container">
                    <Row className="align-items-center">
                        <Col lg={6} sm={12}>
                            <div className="box-impact">
                                <div className="title-board">GIVE REAL IMPACT</div>
                                <div className="second-title">We’ve helped <span className="font-weight">1000+ teachers</span> and students to learn together in an easy and engaging way.</div>
                                <div className="links-down">
                                    <a href="#">
                                        See more about Jackett  
                                        <Image src={assetImage.GreenArrow.src} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="boxed-impacting">
                                <div className="first-row">
                                    <div className="left-img">
                                        <Image src={assetImage.Bindupuri.src} alt="description of img" className="img-fluid"/>
                                    </div>
                                    <div className="right-col">
                                        <div className="name-title">Bindu Puri</div>
                                        <div className="name-designation">Class 8-12 Math Teacher</div>
                                    </div>
                                </div>
                                <div className="messge-row">
                                    “Jackett is a great way to measure student understanding and get feedback right away. I would recommend Jackett to any teacher looking to engage their students in the learning process.”
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
}

export default RealImpact;