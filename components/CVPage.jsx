import { cvData } from '../data/cv'
import styles from '../styles/cv.module.css'

export default function CVPage() {
  const { personal, skills, experience, projects, languages, education } = cvData

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <span className={styles.logo}>CAL</span>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="about" className={styles.hero}>
          <p className={styles.tagline}>{personal.title}</p>
          <h1 className={styles.name}>
            {personal.firstName} <span className={styles.highlight}>{personal.lastName}</span>
          </h1>
          <p className={styles.bio}>{personal.bio}</p>
          <p className={styles.location}>{personal.location}</p>
          <p className={styles.contactInfo}>
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </p>
        </section>

        <section className={styles.skills}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillTags}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
        </section>

        {languages && languages.length > 0 && (
          <section className={styles.languages}>
            <h2 className={styles.sectionTitle}>Languages</h2>
            <div className={styles.languageList}>
              {languages.map((lang, index) => (
                <div key={index} className={styles.languageItem}>
                  <span className={styles.languageName}>{lang.language}</span>
                  <span className={styles.languageLevel}>{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {education && education.length > 0 && (
          <section className={styles.education}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.educationList}>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationItem}>
                  <div className={styles.educationYear}>{edu.year}</div>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <p className={styles.institution}>{edu.institution}, {edu.location}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="experience" className={styles.experience}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            {experience.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{exp.date}</div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className={styles.projects}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectStack}>
                  {project.stack.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                {project.link && project.link !== '#' && (
                  <a href={project.link} className={styles.projectLink}>View project →</a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.cta}>Available for opportunities and projects.</p>
          <div className={styles.contactLinks}>
            <a href={`mailto:${personal.email}`} className={styles.contactLink}>Email</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>GitHub</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} {personal.firstName} {personal.lastName}</p>
      </footer>
    </div>
  )
}