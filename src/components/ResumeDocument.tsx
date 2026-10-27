import { resume } from "@/content/resume";

type Props = {
  /** Nível do título do nome. Na página /curriculo é o h1; dentro da janela, um h2. */
  headingLevel?: 1 | 2;
};

export function ResumeDocument({ headingLevel = 2 }: Props) {
  const Name = headingLevel === 1 ? "h1" : "h2";
  const Section = headingLevel === 1 ? "h2" : "h3";
  const Item = headingLevel === 1 ? "h3" : "h4";

  return (
    <article className="paper" lang="pt-BR">
      <Name className="cv-name">{resume.name}</Name>
      <p className="cv-title">{resume.title}</p>
      <ul className="cv-contact">
        <li>{resume.location}</li>
        <li>{resume.email}</li>
        <li>
          <a href={resume.linkedin.href}>{resume.linkedin.label}</a>
        </li>
        <li>
          <a href={resume.github.href}>{resume.github.label}</a>
        </li>
      </ul>

      <Section>Resumo</Section>
      {resume.summary.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <Section>Experiência</Section>
      {resume.experience.map((job) => (
        <div className="job" key={job.meta}>
          <Item>{job.role}</Item>
          <p className="jm">{job.meta}</p>
          <ul>
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      <Section>Habilidades</Section>
      <dl className="skills">
        {resume.skills.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <Section>Idiomas</Section>
      <p>{resume.languages}</p>

      <Section>Formação</Section>
      {resume.education.map((course) => (
        <div className="job" key={course.course}>
          <Item>{course.course}</Item>
          <p className="jm">{course.meta}</p>
          {"note" in course && course.note ? <p>{course.note}</p> : null}
        </div>
      ))}

      <Section>Prêmios</Section>
      <div className="job">
        <Item>{resume.awards.title}</Item>
        <p className="jm">{resume.awards.meta}</p>
        <ul>
          {resume.awards.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
