import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">

        <div className="section-title">
          <h2>Education</h2>
          <span>My Academic Journey</span>
        </div>

        <div className="timeline">

          <motion.div
            className="timeline-item left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="content">
              <FaGraduationCap className="icon" />
              <h3>Secondary School</h3>

              <h4>Shree Sankat Mochan D.R. Sec. School</h4>

              <span>2077 - 2078</span>

              <p>
                Successfully completed Secondary Schooling with
                <strong> 3.35 GPA</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="content">
              <FaGraduationCap className="icon" />
              <h3>Diploma in Computer Engineering</h3>

              <h4>Neel Arjun Engineering College</h4>

              <span>2022 - 2025</span>

              <p>
                Successfully completed Diploma in Computer Engineering with
                <strong> 72.12%</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="content">
              <FaUniversity className="icon" />

              <h3>BSc CSIT</h3>

              <h4>Rajarshi University</h4>

              <span>Currently Preparing</span>

              <p>
                Preparing for the BSc CSIT entrance examination while improving
                my programming and web development skills.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;
