"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Church Poster",
    description: "Project 1 description",
    image: "/images/projects/4.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Church Poster",
    description: "Project 2 description",
    image: "/images/projects/2.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Church Poster",
    description: "Project 3 description",
    image: "/images/projects/3.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Church Logo",
    description: "Project 4 description",
    image: "/images/projects/1.jpg",
    tag: ["All", "Logo"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Church Poster",
    description: "Church Poster",
    image: "/images/projects/5.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Church Poster",
    description: "Project 5 description",
    image: "/images/projects/6.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Church Poster",
    description: "Project 3 description",
    image: "/images/projects/7.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Church Poster",
    description: "Project 3 description",
    image: "/images/projects/8.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Church Poster",
    description: "Project 3 description",
    image: "/images/projects/10.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Church Poster",
    description: "Project 3 description",
    image: "/images/projects/9.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Church Poster",
    description: "Project 3 description",
    image: "/images/projects/11.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Church Poster",
    description: "Project 3 description",
    image: "/images/projects/6.jpg",
    tag: ["All", "Poster"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Poster"
          isSelected={tag === "Poster"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Logo"
          isSelected={tag === "Logo"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
