import { Col, Image, Row } from "react-bootstrap";
import { assetImage } from "../../const/enum";

const Banner = () => {
    return (
        <>
            <section className="banner-main">
                <Image src={assetImage.BoardIcon.src} className="board-icon" />
                <Image src={assetImage.GraphIcon.src} className="graph-icon" />
                <div className="custom-container">
                    <Image src={assetImage.HashIcons.src} className="hash-icon" />
                    <Image src={assetImage.SignalIcons.src} className="signal-icon" />
                    <Row>
                        <Col lg={6} sm={12}>
                            <h1 className="banner-heading">Unlock Every <br/> Students <span className="change-color">Potential</span></h1>
                            <p>All-in-one digital assessments platform, gain real-time insights into student understanding, build assessments 10X faster 🚀</p>
                            <div className="download-btn">
                                <a href="#">DOWNLOAD FOR FREE</a>
                            </div>
                            <div className="download-btns-store">
                                <div className="lable-available">Available on:</div>
                                <a href="#">
                                    <Image src={assetImage.PlayStoreIcon.src} />
                                </a>
                                <a href="#">
                                    <Image src={assetImage.AppleStoreIcon.src} />
                                </a>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="image-items">
                                Img
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        </>
    )
}

export default Banner;