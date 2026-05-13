import { cvData } from '../data/cv'
import styles from '../styles/cv.module.css'
import NeuralBackground from './NeuralBackground'

export default function CVPage() {
  const { personal, skills, certifications, experience, projects, languages, education, tools } = cvData

  return (
    <>
      <NeuralBackground />
      <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>{personal.firstName[0]}{personal.lastName[0]}</div>
          <span>{personal.firstName} {personal.lastName}</span>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
      </nav>

      <main>
        <section id="about" className={styles.hero}>
          <img src="/profile.jpg" alt={personal.firstName} className={styles.profileImage} />
          <span className={styles.tagline}>{personal.tagline}</span>
          <h1 className={styles.name}>
            {personal.firstName} <span>{personal.lastName}</span>
          </h1>
          <p className={styles.title}>{personal.title}</p>
          <p className={styles.bio}>{personal.bio}</p>
          <div className={styles.contactBar}>
            <a href={`mailto:${personal.email}`} className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              {personal.email}
            </a>
            <span className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              {personal.location}
            </span>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <span className={styles.contactIcon}>🔗</span>
              LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <span className={styles.contactIcon}>💻</span>
              GitHub
            </a>
          </div>
        </section>

        {projects && projects.length > 0 && (
          <section id="projects" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📊</span>
              <h2 className={styles.sectionTitle}>Projects</h2>
            </div>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <div className={styles.projectLinks}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>GitHub</a>
                      )}
                      {project.link && project.link !== '#' && project.link !== null && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Demo</a>
                      )}
                    </div>
                  </div>
                  <p className={styles.projectDesc}>{project.description}</p>
                  {project.metrics && (
                    <div className={styles.projectMetrics}>
                      {project.metrics.map((metric, i) => (
                        <span key={i} className={styles.metricTag}>{metric}</span>
                      ))}
                    </div>
                  )}
                  <div className={styles.projectStack}>
                    {project.stack.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills && (
          <section id="skills" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>⚡</span>
              <h2 className={styles.sectionTitle}>Technical Skills</h2>
            </div>
            <div className={styles.skillsGrid}>
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className={styles.skillCategory}>
                  <h3 className={styles.skillCategoryTitle}>{category}</h3>
                  <div className={styles.skillTags}>
                    {skillList.map((skill, index) => (
                      <span key={index} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tools && tools.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🛠</span>
              <h2 className={styles.sectionTitle}>Tools & Technologies</h2>
            </div>
            <div className={styles.toolsGrid}>
              {tools.map((tool, index) => (
                <div key={index} className={styles.toolCard}>
                  <span className={styles.toolName}>{tool.name}</span>
                  <span className={`${styles.toolLevel} ${styles[`toolLevel${tool.level}`]}`}>
                    {tool.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {experience && experience.length > 0 && (
          <section id="experience" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>💼</span>
              <h2 className={styles.sectionTitle}>Work Experience</h2>
            </div>
            <div className={styles.experienceTimeline}>
              {experience.map((exp, index) => (
                <div key={index} className={styles.experienceItem}>
                  <span className={styles.experienceDate}>{exp.date}</span>
                  <div className={styles.experienceContent}>
                    <div className={styles.experienceHeader}>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <p className={styles.company}>
                        {exp.company}
                        {exp.location && <span className={styles.companyLocation}> · {exp.location}</span>}
                      </p>
                    </div>
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className={styles.highlights}>
                        {exp.highlights.map((highlight, i) => (
                          <p key={i} className={styles.highlight}>{highlight}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {languages && languages.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🌍</span>
              <h2 className={styles.sectionTitle}>Languages</h2>
            </div>
            <div className={styles.languagesGrid}>
              {languages.map((lang, index) => (
                <div key={index} className={styles.languageCard}>
                  <span className={styles.languageFlag}>{lang.flag}</span>
                  <div className={styles.languageInfo}>
                    <h3 className={styles.languageName}>{lang.language}</h3>
                    <p className={styles.languageLevel}>{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {certifications && certifications.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🏆</span>
              <h2 className={styles.sectionTitle}>Certifications</h2>
            </div>
            <div className={styles.certificationsGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certificationCard}>
                  <div className={styles.certificationIcon}>🎓</div>
                  <div className={styles.certificationInfo}>
                    <h3 className={styles.certificationName}>{cert.name}</h3>
                    <p className={styles.certificationMeta}>{cert.issuer}</p>
                  </div>
                  <span className={styles.certificationYear}>{cert.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {education && education.length > 0 && (
          <section id="education" className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🎓</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>
            <div className={styles.educationList}>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationItem}>
                  <div className={styles.educationIcon}>🎖</div>
                  <div className={styles.educationInfo}>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>
                    {edu.location && <p className={styles.educationLocation}>{edu.location}</p>}
                    {edu.description && <p className={styles.educationDescription}>{edu.description}</p>}
                  </div>
                  <span className={styles.educationYear}>{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} {personal.firstName} {personal.lastName} · Built with Next.js</p>
      </footer>
    </div>
    </>
  )
}