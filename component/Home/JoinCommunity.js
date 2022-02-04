import { Image } from "react-bootstrap";
import { assetImage } from "../../const/enum";

const JoinCommunity = () => {
    return(
        <>
        <section className="join-community-main">
            <div className="custom-container">
                <h4 className="custom-headings">Join Our <span>Community</span> <Image src={assetImage.Line.src} alt="img" className="img-fluid" /></h4>
                <div className="second-row-main">
                    <div className="left-side-main">
                        <Image src={assetImage.VideoCover.src} alt="video-cover" />
                        <div className="play-btn">
                            <Image src={assetImage.PlayBtn.src} alt="play" />
                        </div>
                        <div className="jackett-story-line">
                            <Image src={assetImage.JackettStoryLine.src} alt="img" />
                        </div>
                    </div>
                    <div className="right-side-main">
                        <div className="jackett-first-line">Excellent files by and for <br/> our community</div>
                        <div className="image-row-main">
                            <Image src={assetImage.ComVector1.src}  alt="img" />
                            <Image src={assetImage.ComVector2.src}  alt="img" />
                        </div>
                        <div className="link-group-row">
                            <Image src={assetImage.GroupPic.src}  alt="img" />
                            <div className="links-down">
                                    <a href="#">
                                        Join them now 
                                        <Image src={assetImage.GreenArrow.src} />
                                    </a>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </section>
        
        </>
    )
}

export default JoinCommunity;