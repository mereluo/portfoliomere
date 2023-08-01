import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./AboutMe.css";

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        description: "As a driven Master's student in Computer Science at Northeastern University, ",
        description1: "I am proficient in object-oriented programming, data structures, algorithms, and practical experience in C++, React/Next with JavaScript. ",
        description2: "I am eager to join a team where I can make a tangible impact and help shape the future of technology.",
        highlights: {
            bullets: ["Full Stack web development", "Interactive Front End", "React/Next.js", "Building RESTful API", "Managing database"],
            heading: "Here are a Few Highlights:",
        },
    };
    const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
            <div className="highlight" key={i}>
                <div className="highlight-blob"></div>
                <span>{value}</span>
            </div>
        ));
    };

    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Reasons for choosing me"} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details">
                        <div className="about-me-description">
                            {SCREEN_CONSTSANTS.description}
                            {SCREEN_CONSTSANTS.description1} <br />
                            {SCREEN_CONSTSANTS.description2}
                        </div>
                        <div className="about-me-highlights">
                            <div className="highlght-heading">
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">
                            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                {" "}
                                Hire Me{" "}
                            </button>

                            <a href="ResumeMeredithLuo.pdf" download="Meredith Luo.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
