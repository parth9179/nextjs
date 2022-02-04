import { Col, Image, Row } from "react-bootstrap";
import { assetImage } from "../const/enum";

function Footer () {
    return(
        <footer className="footer-part-main">
            <div className="upper-row-main">
                <div className="custom-container">
                    <Row>
                        <Col lg={3} sm={12}>
                            <div className="logo-main">
                                 <Image src={assetImage.Logo.src}  alt="Picture of the author" />
                            </div>
                        </Col>
                        <Col lg={3} sm={12}>
                            <div className="lable-name">Product</div>
                            <div className="link"> 
                               <a href="#">Features</a>
                            </div>
                            <div className="link">
                                <a href="#">Customer Stories</a>
                            </div>
                            <div className="link">
                                <a href="#">Web Apps</a>
                            </div>
                            <div className="link">
                                <a href="#">Mobile Apps</a>
                            </div>
                        </Col>
                        <Col lg={3} sm={12}>
                           <div className="lable-name">Product</div>
                            <div className="link">
                                <a href="#">Blog</a>
                            </div>
                            <div className="link">
                                <a href="#">Guides and Tutorials</a>
                            </div>
                            <div className="link">
                                <a href="#">Help Center</a>
                            </div>
                            <div className="link">
                                <a href="#">Community</a>
                            </div>
                        </Col>
                        <Col lg={3} sm={12}>
                            <div className="lable-name">Company</div>
                            <div className="link">
                                <a href="#">About Us</a>
                            </div>
                            <div className="link">
                                <a href="#">Careers</a>
                            </div>
                            <div className="link">
                                <a href="#">News</a>
                            </div>
                            <div className="link">
                                <a href="#">Talk to Sales</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="custom-container">
                <div className="last-row-main">
                    <div className="left-side-col">
                        <div className="link">
                            <a href="#">Privacy</a>
                        </div>
                        <div className="link">
                            <a href="#">Terms</a>
                        </div>
                        <div className="link">
                            <a href="#">Cookie Preferences</a>
                        </div>
                        <div className="link">
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                    <div className="right-side-col">
                        <a href="#">
                            <Image src={assetImage.Facebook.src} alt="description of img"/>
                        </a>
                        <a href="#">
                            <Image src={assetImage.Instagram.src} alt="description of img"/>
                        </a>
                        <a href="#">
                            <Image src={assetImage.Linkedin.src} alt="description of img"/>
                        </a>
                        <a href="#">
                            <Image src={assetImage.Twitter.src} alt="description of img"/>
                        </a>
                        <a href="#">
                            <Image src={assetImage.Youtube.src} alt="description of img"/>
                        </a>
                    </div>
                </div>
                <div className="copyright-line">Copyright © 2022. Jackett. All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer;