import { useState } from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { assetImage } from "../const/enum";

function Header() {
    const [isActive, setActive] = useState(true);
    const toggleClass = () => {
        setActive(!isActive);
    };
    const Navmenu = [
        {
            text: 'Why Jackett',
            link: '/'
        },
        {
            text: 'Features',
            link: '/'
        },
        {
            text: 'Community',
            link: '/'
        }
    ];
    return (
        <>
        <div className={isActive ? 'blue-line active': 'blue-line'} >
                <div className="text-line">Announcing our $250M fundraise to empower teachers and students. Read the announcement <a href="#">here.</a></div>
                <div className="link-close"  onClick={toggleClass}>
                    <Image src={assetImage.CloseIcon.src} alt="close" />
                </div>
        </div>
        <header className="header-main">
            <div className="custom-container">
                <div className="inner-header">
                    <div className="logo-main">
                        <Image src={assetImage.Logo.src}  alt="Picture of the author" />
                    </div>
                    <div className="menu-item-custom">
                        <Navbar bg="white" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    {Navmenu.map((item, i) => {
                                        // var isActive = router.pathname === item.link
                                        // var className = isActive ? 'active' : '';
                                        return (
                                            <Nav.Link key={i} href={item.link}>{item.text}</Nav.Link>
                                        )
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className="last-col-main">
                        <a href="#" className="comman-btn talk-to-sale">Talk to sale</a>
                        <a href="#" className="comman-btn get-started">Get Started</a>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;