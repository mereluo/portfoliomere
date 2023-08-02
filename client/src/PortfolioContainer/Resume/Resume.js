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
        // console.log(props);
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
                    <div>
                        <a href={props.link} style={{ color: "#003c63" }}>
                            {props.link ? "(GitHub Link)" : ""}
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Personal Projects", logoSrc: "projects.svg" },
        { label: "Education background", logoSrc: "education.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Work Experience", logoSrc: "work-history.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React.js", ratingPercentage: 85 },
        { skill: "Node.js", ratingPercentage: 80 },
        { skill: "C++", ratingPercentage: 90 },
        { skill: "Java", ratingPercentage: 85 },
        { skill: "C#", ratingPercentage: 75 },
        { skill: "MongoDB", ratingPercentage: 70 },
        { skill: "Postgres", ratingPercentage: 70 },
        { skill: "mySQL", ratingPercentage: 80 },
    ];

    const projectsDetails = [
        {
            title: "Face Identifier",
            duration: { fromDate: "Jun. 2023", toDate: "Jul. 2023" },
            description: "Developed a secure full-stack web app that enabled user registration, login, and accurate detection of multiple faces from picture URLs using the Clarifai API; Employed PostgreSQL for efficient user data storage and retrieval; designed robust database tables and implemented a RESTful API using Express.js",
            subHeading: "Built with JavaScript, PostgreSQL, Express.js",
            link: "https://github.com/mereluo/face-identifier",
        },
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "Mar. 2023", toDate: "Apr. 2023" },
            description: "An Intuitive and interactive personal portfolio website to showcase my background; This website!",
            subHeading: "Built with React JS, Bootstrap, RxJS, Node JS",
            link: "https://github.com/mereluo/portfoliomere",
        },
        {
            title: "StoryLand (Online Story Book)",
            duration: { fromDate: "Feb. 2023", toDate: "Mar. 2023" },
            description: "A web-based application powered by OpenAI to generate personalized stories with illustrations for children of age 5-10",
            subHeading: "Built with React JS, OpenAI API",
            link: "https://github.com/mereluo/TeachMe",
        },
        {
            title: "SeattleBot",
            duration: { fromDate: "Dec. 2022", toDate: "Jan. 2023" },
            description: "A Facebook messenger bot reports real-time Seattle weather and recommends Seattle restaurants based on user cuisine preferences; Deployed and maintained the bot's functionality and security through GitHub CI/CD actions, Docker, and DigitalOcean",
            subHeading: "Built with Python, FastAPI, Docker, DigitalOcean",
            link: "https://github.com/GaryHo34/SeattleBot",
        },
    ];

    const resumeDetails = [
        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading key={index} heading={projectsDetails.title} subHeading={projectsDetails.subHeading} description={projectsDetails.description} fromDate={projectsDetails.duration.fromDate} toDate={projectsDetails.duration.toDate} link={projectsDetails.link} />
            ))}
        </div>,

        /* EDUCATION */
        <div className="resume-screen-container" key="education" id="education">
            <ResumeHeading heading={"Northeastern University-Seattle Campus"} subHeading={"Master of Science in Computer Science"} fromDate={"2023"} toDate={"2025"} description={"GPA: 4.0/4.0"} />
            <ResumeHeading heading={"Seattle University"} subHeading={"Certificate in Computer Science"} fromDate={"2022"} toDate={"2023"} description={"GPA: 4.0/4.0"} />
            <ResumeHeading heading={"University of Washington-Seattle"} subHeading={"Master in Measurement and Statistics"} fromDate={"2019"} toDate={"2022"} description={"GPA: 3.9/4.0"} />
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

        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading heading={"Teaching Assistant"} subHeading={"Seattle University"} fromDate={"2022"} toDate={"2023"} />
                <div className="experience-description">
                    <span className="resume-description-text">Teaching Assistant for CPSC 5001 and CPSC 5002: Programming Boot Camp I and II, teaching Java programming </span>
                    <br />
                    <span className="resume-description-text">- Provided thorough and constructive feedback on assignments, maintaining consistent grading standards</span>
                    <br />
                    <span className="resume-description-text">- Conducted individual and group tutoring sessions, clarifying programming concepts and troubleshooting coding challenges</span>
                </div>
            </div>
            <div className="experience-container">
                <ResumeHeading heading={"Graduate Research Assistant"} subHeading={"University of Washington"} fromDate={"2020"} toDate={"2022"} />
                <div className="experience-description">
                    <span className="resume-description-text">Collaborated with UW Computer Science department and Educational Testing Service (ETS) on math and programming education research </span>
                    <br />
                    <span className="resume-description-text">- Analyzed extensive keystroke data from 220 undergraduate students‘ programming assignments</span>
                    <br />
                    <span className="resume-description-text">- Utilized data visualization tools, such as Python libraries (e.g., Matplotlib, Seaborn), to facilitate easier interpretation and communication of findings</span>
                </div>
            </div>
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
