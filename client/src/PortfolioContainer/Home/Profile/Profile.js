import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/yu-meredith-luo/">
                                <i className="fa fa-linkedin-square" />
                            </a>
                            <a href="https://github.com/mereluo">
                                <i className="fa fa-github-square" />
                            </a>
                            <a href="https://www.instagram.com/mere.kozy/">
                                <i className="fa fa-instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello, I'm <span className="highlighted-text">Meredith</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                <Typical loop={Infinity} steps={["Passionate Coder 🚀", 2000, "Full stack Developer 💻", 2000, "C++ Enthusiast 💡", 2000]} />
                            </h1>
                            <span className="profile-role-tagline">Proficient in building apps with integrated front-end and back-end functionalities</span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}
