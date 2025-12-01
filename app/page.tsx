import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { jobs } from "@/lib/portfolio-data";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Julieta Habif',
    jobTitle: 'Product Manager & Full Stack Developer',
    description: 'Product Manager and Full Stack Developer specializing in Next.js, React, and modern web technologies',
    url: 'https://portfinal-nlcw0gx9a-julihabifs-projects.vercel.app',
    sameAs: [
      'https://linkedin.com/in/julietahabif',
      'https://github.com/julietahabif',
      'https://twitter.com/julietahabif',
    ],
    knowsAbout: [
      'Product Management',
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Full Stack Development',
      'UI/UX Design',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Your University', // Update with your actual university
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen relative z-10">
        <Hero />

      <main id="main-content">
        <AboutMe />

        <Experience jobs={jobs} />
        <Contact />
        
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-foreground/60">
          <p>© 2024 Julieta Habif. All rights reserved.</p>
          <div className="flex gap-6 justify-center mt-4">
            <a href="https://linkedin.com/in/julietahabif" aria-label="Visit Julieta Habif's LinkedIn profile" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/julietahabif" aria-label="Visit Julieta Habif's GitHub profile" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://twitter.com/julietahabif" aria-label="Follow Julieta Habif on Twitter" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
