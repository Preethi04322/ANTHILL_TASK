import React from "react";
import "./AboutUs.css";
import { Star, Award, Users, Heart } from "lucide-react";
import CarspaceHeader from '../Components/CarspaceHeader';
import Footer from '../Components/Footer';

const AboutUs = () => {
    const stats = [
        { number: "200+", label: "Happy Customers" },
        { number: "10k+", label: "Properties For Clients" },
        { number: "16+", label: "Years of Experience" },
    ];

    const values = [
        {
            icon: Star,
            title: "Trust",
            description: "Trust is the cornerstone of every successful real estate transaction.",
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We set the bar high for ourselves. From the properties we list to the service we provide.",
        },
        {
            icon: Users,
            title: "Client-Centric",
            description: "Your dreams and needs are at the center of our attention. We focus, understand.",
        },
        {
            icon: Heart,
            title: "Our Commitment",
            description: "We are dedicated to providing you with the highest level of service, professionalism.",
        },
    ];

    const teamMembers = [
        {
            name: "Max Mitchell",
            role: "Founder",
            image: "/MarkM.png",
        },
        {
            name: "Sarah Johnson",
            role: "Chief Real Estate Officer",
            image: "/Saraha.png",
        },
        {
            name: "David Brown",
            role: "Head of Property Management",
            image: "/David.png",
        },
        {
            name: "Michael Turner",
            role: "Legal Counsel",
            image: "/Michale.png",
        },
    ];

    return (
        <>
            <CarspaceHeader />
            <div className="complete-page-container">
                {/* Our Journey Section */}
                <section className="journey-section">
                    <div className="journey-content">
                        <div className="section-heading">
                            <div className="red-line"></div>
                            <h2>Our Journey</h2>
                        </div>
                        <p className="journey-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="journey-image">
                        <img src="/about.png" alt="Car speedometer" />
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="values-section">
                    <div className="section-heading">
                        <div className="red-line"></div>
                        <h2>Our Values</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.
                            </p>
                        </div>
                        <div className="value-list">
                            {values.map((value, index) => (
                                <div key={index} className="value-item">
                                    <div className="value-header">
                                        <div className="icon-box">
                                            <value.icon className="icon" />
                                        </div>
                                        <h3>{value.title}</h3>
                                    </div>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Meet Our Team Section */}
                <section className="team-section">
                    <div className="section-heading">
                        <div className="red-line"></div>
                        <h2>Meet Our Team</h2>
                    </div>
                    <p className="team-description">
                        At Homyhof, our success is driven by the dedication and expertise of our team.
                    </p>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-img-wrapper">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
