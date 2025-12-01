"use client";

import { useState } from "react";

interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  jobs: Job[];
}

export default function Experience({ jobs }: ExperienceProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section id="experience" aria-labelledby="experience-heading" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <h2 id="experience-heading" className="text-4xl font-bold mb-16 text-center">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" aria-hidden="true"></div>

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`relative flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                  style={{
                    transformOrigin: "left center",
                    transform: hoveredIndex === index
                      ? "scale(1.05) rotate(-2deg)"
                      : "scale(1) rotate(0deg)",
                    animation: hoveredIndex === index
                      ? "swing 1s ease-in-out infinite"
                      : "none",
                    transition: "all 0.5s"
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline dot - aligned with timeline, moves with the card */}
                  <div
                    className={`absolute left-[-2rem] top-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 ${
                      index % 2 === 0 ? 'md:right-[27rem] md:left-auto' : 'md:left-[27rem]'
                    }`}
                    aria-hidden="true"
                  ></div>

                  <div
                    className={`p-6 rounded-2xl bg-card border border-border ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}
                    style={{
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  >
                    <div className="mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{job.role}</h3>
                      <p className="text-lg text-primary font-semibold">{job.company}</p>
                      <p className="text-sm text-foreground/60 mt-1">{job.period}</p>
                    </div>

                    <p className="text-foreground/90 my-4">{job.description}</p>

                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation for swing effect */}
      <style jsx>{`
        @keyframes swing {
          0%, 100% {
            transform: scale(1.05) rotate(-2deg);
          }
          50% {
            transform: scale(1.05) rotate(2deg);
          }
        }
      `}</style>
    </section>
  );
}
