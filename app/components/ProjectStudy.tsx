import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectStudy.module.css";

export type StudyFigure = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Study = {
  title: string;
  context: string;
  summary: string;
  role: string;
  skills: string;
  hero: StudyFigure;
  metrics: { value: string; label: string }[];
  sections: {
    title: string;
    paragraphs: string[];
    figures?: StudyFigure[];
    table?: { caption: string; headings: string[]; rows: string[][] };
  }[];
  credit: string;
};

function Figure({ figure, hero = false }: { figure: StudyFigure; hero?: boolean }) {
  return (
    <figure className={styles.figure}>
      <a href={figure.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${figure.alt}`}>
        <Image src={figure.src} alt={figure.alt} width={figure.width} height={figure.height}
          sizes="(max-width: 760px) calc(100vw - 40px), 960px" preload={hero} />
      </a>
      <figcaption>{figure.caption} <span>Open image ↗</span></figcaption>
    </figure>
  );
}

export default function ProjectStudy({ study }: { study: Study }) {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Project navigation">
        <Link href="/" className={styles.wordmark}>HENRY YOON</Link>
        <Link href="/#projects">All projects <span aria-hidden="true">↗</span></Link>
      </nav>
      <header className={styles.header}>
        <p className={styles.context}>{study.context}</p>
        <h1>{study.title}</h1>
        <p className={styles.summary}>{study.summary}</p>
        <dl className={styles.details}>
          <div><dt>My role</dt><dd>{study.role}</dd></div>
          <div><dt>Focus</dt><dd>{study.skills}</dd></div>
        </dl>
      </header>
      <Figure figure={study.hero} hero />
      <dl className={styles.metrics}>
        {study.metrics.map((metric) => (
          <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>
        ))}
      </dl>
      {study.sections.map((section) => (
        <section className={styles.section} key={section.title}>
          <h2>{section.title}</h2>
          <div className={styles.prose}>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {section.table && (
            <div className={styles.tableWrap}>
              <table>
                <caption>{section.table.caption}</caption>
                <thead><tr>{section.table.headings.map((heading) => <th scope="col" key={heading}>{heading}</th>)}</tr></thead>
                <tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          )}
          {section.figures?.map((figure) => <Figure key={figure.src} figure={figure} />)}
        </section>
      ))}
      <footer className={styles.footer}>
        <p>{study.credit}</p>
        <Link href="/#projects">← All projects</Link>
      </footer>
    </main>
  );
}
