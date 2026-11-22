"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./CareerTimeline.module.css";

type Milestone = {
  id: string;
  date: string;
  label: string;
  title: string;
  description?: string;
  bullets?: string[];
  images?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    unoptimized?: boolean;
  }[];
};

const milestones: Milestone[] = [
  {
    id: "pre-grad",
    date: "Pre-grad",
    label: "Harriton",
    title: "Harriton High School",
    bullets: ["Graduated in June 2024."],
    images: [
      {
        src: "/images/harriton-graduation.jpeg",
        alt: "Harriton High School graduation group",
        width: 1024,
        height: 768,
      },
      {
        src: "/images/pre-grad-keyboard.png",
        alt: "Working on a keyboard project before graduation",
        width: 686,
        height: 790,
      },
    ],
  },
  {
    id: "cornell-cuauv",
    date: "Fall 2024 – Spring 2025",
    label: "Cornell",
    title: "Starting at Cornell",
    description: "Started my first semester at Cornell in August and joined CUAUV in November.",
    images: [
      {
        src: "/images/cuauv-electrical-subteam.png",
        alt: "CUAUV electrical subteam group during first year",
        width: 768,
        height: 1024,
      },
      {
        src: "/images/cuauv-sub-in-water.jpeg",
        alt: "CUAUV submarine submerged in a pool",
        width: 768,
        height: 1024,
      },
    ],
  },
  {
    id: "summer-2025",
    date: "Summer 2025",
    label: "LISC + CUAUV",
    title: "LISC + CUAUV",
    bullets: ["LISC research", "Tour guiding", "CUAUV summer activities and competition"],
    images: [
      {
        src: "/images/lisc-vr-demo.png",
        alt: "VR demonstration at LISC",
        width: 1080,
        height: 644,
      },
      {
        src: "/images/cuauv-robosub-2025.png",
        alt: "CUAUV team at RoboSub 2025",
        width: 1153,
        height: 768,
      },
    ],
  },
  {
    id: "fall-2025-spring-2026",
    date: "Fall 2025 – Spring 2026",
    label: "Cornell",
    title: "Sophomore year",
    description: "Testing the Battery Management Board.",
    images: [
      {
        src: "/images/bmb-testing-slim.png",
        alt: "Battery management board during testing",
        width: 748,
        height: 444,
      },
    ],
  },
  {
    id: "summer-2026",
    date: "Summer 2026",
    label: "HavocAI + CUAUV",
    title: "Long Beach, California",
    description: "Interned at HavocAI with two other AUV students and competed with CUAUV again.",
    images: [
      {
        src: "/images/summer-mount-baldy-hike.jpeg",
        alt: "Hiking Mount Baldy during the HavocAI summer",
        width: 1024,
        height: 768,
      },
      {
        src: "/images/summer-round-table-pizza.jpeg",
        alt: "Sharing Round Table Pizza during the HavocAI summer",
        width: 1024,
        height: 768,
      },
    ],
  },
  {
    id: "fall-2026",
    date: "Fall 2026",
    label: "Cornell",
    title: "Junior year",
    description: "In Progress...",
  },
  {
    id: "apple-2027",
    date: "Spring/Summer 2027",
    label: "Apple",
    title: "Incoming AirPods Systems EE",
    description: "Electrical Engineering internship at Apple.",
    images: [
      {
        src: "/images/apple-logo.gif",
        alt: "Apple logo",
        width: 800,
        height: 600,
        unoptimized: true,
      },
    ],
  },
];

export default function CareerTimeline() {
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const activeMilestone =
    milestones.find((milestone) => milestone.id === previewId) ??
    milestones.find((milestone) => milestone.id === selectedId);

  return (
    <section id="career" className={styles.section} aria-labelledby="career-title">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>Then, now & what’s next</p>
          <h2 id="career-title">A little timeline<span>…</span></h2>
        </div>
      </div>

      <ol className={styles.timeline} aria-label="Career milestones">
        {milestones.map((milestone) => {
          const isActive = activeMilestone?.id === milestone.id;

          return (
            <li className={styles.timelineEntry} key={milestone.id}>
              <button
                className={styles.timelineButton}
                type="button"
                aria-controls="career-detail"
                aria-expanded={isActive}
                onMouseEnter={() => setPreviewId(milestone.id)}
                onFocus={() => setPreviewId(milestone.id)}
                onClick={() => {
                  setPreviewId(null);
                  setSelectedId(selectedId === milestone.id ? null : milestone.id);
                }}
              >
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.date}>{milestone.date}</span>
                <span className={styles.label}>{milestone.label}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div
        id="career-detail"
        className={`${styles.detail} ${activeMilestone ? "" : styles.detailHidden}`}
        aria-live="polite"
      >
        {activeMilestone ? (
          <>
            <div className={styles.detailCopy}>
              <p className={styles.detailDate}>{activeMilestone.date}</p>
              <h3>{activeMilestone.title}</h3>
              {activeMilestone.description && <p>{activeMilestone.description}</p>}
              {activeMilestone.bullets && (
                <ul className={styles.detailBullets}>
                  {activeMilestone.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </div>
            {activeMilestone.images && (
              <div
                className={`${styles.photos} ${activeMilestone.id === "pre-grad" ? styles.compactPhotos : ""} ${activeMilestone.id === "cornell-cuauv" ? styles.largerPhotos : ""}`}
              >
                {activeMilestone.images.map((image) => (
                  <Image
                    className={styles.photo}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    unoptimized={image.unoptimized}
                    sizes="(max-width: 700px) 100vw, 40vw"
                    key={image.src}
                  />
                ))}
              </div>
            )}
          </>
        ) : null}
      </div>
    </section>
  );
}
