import { Image } from "react-bootstrap";
import NotificationIcon from "../../assets/Icon/NotificationIcon";
import SmartScalicon from "../../assets/Icon/SmartScalicon";
import Smartscan from "../../assets/Icon/SmartScan";
import { assetImage } from "../../const/enum";


const ValuebleFeatureUnique = () => {
    return(
        <>
        <section className="main-value-section green-section-main">
            <div className="custom-container">
                <div className="inner-box">
                    <div className="right-side-box">
                        <Image src={assetImage.MockupImg.src} alt="title of description" className="img-fluid" />
                    </div>
                    <div className="left-side-box">
                        <h2 className="main-heading">
                            Valuable feature that <br/> make us <span className="valuble-color">unique</span>
                        </h2>
                        <div className="main-box-area">
                            <div className="left-side-icon">
                                <Smartscan />
                            </div>
                            <div className="right-side-content">
                                <div className="small-title">Smartscan</div>
                                <p>Having physical format of questions that you want to use? Great! just scan it.</p>
                            </div>
                        </div>
                        <div className="main-box-area">
                            <div className="left-side-icon">
                                <SmartScalicon />
                            </div>
                            <div className="right-side-content">
                                <div className="small-title">Smartscale</div>
                                <p>Auto-generated quiz that also let you adjust questions difficulties level.</p>
                            </div>
                        </div>
                        <div className="main-box-area">
                            <div className="left-side-icon">
                                <NotificationIcon />
                            </div>
                            <div className="right-side-content">
                                <div className="small-title">Notification</div>
                                <p>Up to date with all assessments received back from students.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
}

export default ValuebleFeatureUnique;