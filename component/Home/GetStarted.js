import { Image } from "react-bootstrap";
import { assetImage } from "../../const/enum";

const GetStarted = () => {
    return(
        <>
         <section className="get-started-main">
            <Image src={assetImage.BoardIcon.src} className="board-icon" />
            <Image src={assetImage.LeftSideGreen.src} className="left-side-green-icons" />
            <div className="custom-container">
                <Image src={assetImage.LineOneSide.src} className="line-one-img" />
                <Image src={assetImage.TideArrow.src} className="line-two-img" />
                <h5 className="custom-headings-start">Get Started with <span>Jackett.</span></h5>
                <div className="button-links-main">
                    <a href="#">
                        <Image src={assetImage.GooglePlayIcon1.src} alt="Google Play"/>
                    </a>
                    <a href="#">
                        <Image src={assetImage.AppleStoreIcon1.src} alt="Google Play"/>
                    </a>
                </div>

            </div>
         </section>
        </>
    );
}

export default GetStarted;