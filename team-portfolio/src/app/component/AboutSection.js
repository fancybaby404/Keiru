"use client"
import Image from "next/image";
import TabButton from "./TabButton"
import React, { useTransition, useState } from "react";

const data = [
    {
        title: "Skills",
        id: "skills",
        content : (
            <ul className="list-disc pl-2">
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NodeJS</li>
                <li>Figma</li>
                <li>MongoDB</li>
                <p>and many more...</p>
            </ul>
        ),
    },
    {
        title: "Education",
        id : "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Cavite State University - Main</li>
                <li>Youtube Courses</li>
                <li>Online Documentation</li>
            </ul>
        ),
    },
]


const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
          setTab(id);
        });
    };


    return (
        <section className="text-white" id ="about">
            <div className="md:grid 
                            md:grid-cols-2 
                            gap-8 
                            items-center 
                            py-8 
                            px-4 
                            xl:gap-16 
                            sm:py-16 
                            xl:px-16">
                <Image src="/images/pic1.jpg" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
                            <p className="text-base lg:text-lg">
                                Welcome to our portfolio website! 
                                We are a group of passionate aspiring IT professionals specializing in full-stack development, graphic design, and more.
                                Explore our website to discover the diverse talents within our team. 
                                Let's collaborate and create exceptional work together!
                            </p>

                            <div className="flex flex-row justify-start mt-8">
                                <TabButton
                                    selectTab={() => handleTabChange("skills")}
                                    active={tab === "skills"}
                                >
                                    {" "}
                                    Skills{" "}
                                </TabButton>

                                <TabButton
                                    selectTab={() => handleTabChange("education")}
                                    active={tab === "education"}
                                >
                                    {" "}
                                    Education{" "}
                                </TabButton>
                            </div>

                            <div className="mt-8">
                                {data.find((t) => t.id === tab).content}
                            </div>
                </div>
            </div>
        </section>
    )
};

export default AboutSection