import { Image } from "react-bootstrap";
import GraphIcon from "../../assets/Icon/GraphIcon";
import Note from "../../assets/Icon/Note";
import SmartScalicon from "../../assets/Icon/SmartScalicon";
import { assetImage } from "../../const/enum";


const MainValueFeature = () => {
    return(
        <>
        <section className="main-value-section">
            <div className="custom-container">
                <div className="inner-box">
                    <div className="left-side-box">
                        <h2 className="main-heading">
                            Main <span className="valuble-color">valuable</span> <br/> features
                        </h2>
                        <div className="main-box-area">
                            <div className="left-side-icon">
                                <SmartScalicon />
                            </div>
                            <div className="right-side-content">
                                <div className="small-title">Smartscale</div>
                                <p>Auto-generated quiz that help teachers create quiz in seconds.</p>
                            </div>
                        </div>
                        <div className="main-box-area">
                            <div className="left-side-icon">
                                <GraphIcon />
                            </div>
                            <div className="right-side-content">
                                <div className="small-title">Quiz Analytics</div>
                                <p>Enough of spending tons of hours sitting analyzing students score manually.</p>
                            </div>
                        </div>
                        <div className="main-box-area">
                            <div className="left-side-icon">
                                <Note />
                            </div>
                            <div className="right-side-content">
                                <div className="small-title">Quiz Creation</div>
                                <p>Freely create your quiz, we also provide 50,000+ questions for them to choose from.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-box">
                        <Image src={assetImage.MockupImg.src} alt="title of description" className="img-fluid" />
                    </div>

                </div>
            </div>
        </section>
        
        </>
    );
}

export default MainValueFeature;