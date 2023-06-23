import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import "./Resume.css";

function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? <div className="heading-date">{props.fromDate + " - " + props.toDate}</div> : <div></div>}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work Experience", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 85 },
        { skill: "C++", ratingPercentage: 90 },
        { skill: "Java", ratingPercentage: 85 },
        { skill: "C#", ratingPercentage: 75 },
        { skill: "Node JS", ratingPercentage: 70 },
        { skill: "MongoDB", ratingPercentage: 70 },
    ];

    const projectsDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "Mar. 2023", toDate: "Apr. 2023" },
            description: "An Intuitive and interactive personal portfolio website to showcase my background",
            subHeading: "Built with React JS, Bootstrap, RxJS, Node JS, Heroku",
        },
        {
            title: "StoryLand (Online Story Book)",
            duration: { fromDate: "Feb. 2023", toDate: "Mar. 2023" },
            description: "A web-based application powered by OpenAI to generate personalized stories with illustrations for children of age 5-10",
            subHeading: "Built with React JS, OpenAI API",
        },
        {
            title: "SeattleBot",
            duration: { fromDate: "Dec. 2022", toDate: "Jan. 2023" },
            description: "A Facebook messenger bot reports real-time Seattle weather and recommends Seattle restaurants based on user cuisine preferences",
            subHeading: "Built with Python, FastAPI, Docker, DigitalOcean",
        },
        {
            title: "CapitolCraving",
            duration: { fromDate: "Oct. 2022", toDate: "Nov. 2022" },
            description: "A relational database system that manages and analyzes data on local cookie bakeries",
            subHeading: "Built with mySQL, Java",
        },
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading heading={"Northeastern University-Seattle Campus"} subHeading={"Master of Science in Computer Science"} fromDate={"2023"} toDate={"2025"} />

            <ResumeHeading heading={"Seattle University"} subHeading={"Certificate in Computer Science"} fromDate={"2022"} toDate={"2023"} />
            <ResumeHeading heading={"University of Washington-Seattle"} subHeading={"Master in Measurement and Statistics"} fromDate={"2019"} toDate={"2022"} />
        </div>,

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading heading={"Seattle University"} subHeading={"Teaching Assistant"} fromDate={"2022"} toDate={"2023"} />
                <div className="experience-description">
                    <span className="resume-description-text">Teaching assitant for Java Introduction Classes</span>
                    <span className="resume-description-text">Assisting instructor with in-class activities, grading assignments, and leading group tutoring</span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">- Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .</span>
                    <br />
                    <span className="resume-description-text">- Integrated the web app with backend services to create new user onboarding application with dynamic form content. </span>
                    <br />
                    <span className="resume-description-text">- I stretch my mental capacity to develope UI as per the given designs.</span>
                    <br />
                </div>
            </div>
        </div>,

        /* PROGRAMMING SKILLS */
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar"></div>
                    </div>
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading key={index} heading={projectsDetails.title} subHeading={projectsDetails.subHeading} description={projectsDetails.description} fromDate={projectsDetails.duration.fromDate} toDate={projectsDetails.duration.toDate} />
            ))}
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 600;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onClick={() => handleCarousal(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
                <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="B" />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div style={carousalOffsetStyle.style} className="resume-details-carousal">
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div className="resume-container screen-container " id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Background and Projects"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    );
}
export default Resume;
