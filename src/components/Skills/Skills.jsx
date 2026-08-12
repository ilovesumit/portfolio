import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 70 },
  { name: "Git & GitHub", level: 85 },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="section-title">
          <h2>My Skills</h2>
          <span>Technologies I Work With</span>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <div className="skill-header">

                <h3>{skill.name}</h3>

                <span>{skill.level}%</span>

              </div>

              <div className="progress" role="progressbar" aria-label={`${skill.name} proficiency`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={skill.level}>

                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
