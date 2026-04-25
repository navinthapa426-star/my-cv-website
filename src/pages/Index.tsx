import { Mail, Phone, MapPin, ArrowRight, Briefcase, GraduationCap, Sparkles, Languages, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    role: "Cleaner",
    company: "S&R Siivous",
    location: "Finland",
    period: "Sep 2025 – Jan 2026",
    points: [
      "Delivered high-quality cleaning across office, residential and commercial environments.",
      "Performed floor care, sanitization and compliance with health & safety regulations.",
      "Demonstrated reliability working independently and within a team.",
    ],
  },
  {
    role: "Logistics Assistant",
    company: "Amazon Logistics",
    location: "Dubai",
    period: "Oct 2022 – Jan 2023",
    points: [
      "Managed project timelines, reducing delivery times by 30%.",
      "Adopted new engineering software, improving project accuracy by 15%.",
      "Collaborated cross-functionally to lift project success rates by 10%.",
    ],
  },
  {
    role: "Customer Service",
    company: "Western Union Service",
    location: "Dubai",
    period: "Feb 2022 – Jan 2023",
    points: [
      "Promoted money transfer services and explained fees & exchange rates clearly.",
      "Assisted customers in completing transactions accurately and efficiently.",
      "Lifted satisfaction scores by resolving queries with friendly guidance.",
    ],
  },
  {
    role: "IT / Operations Assistant",
    company: "Packerovers Logistics",
    location: "Dubai",
    period: "Feb 2022 – Sep 2022",
    points: [
      "Managed product data entry and shipment coordination with accuracy.",
      "Generated shipment labels via DHL, Aramex and UPS; used Shopify and Business Central.",
      "Ensured timely dispatch of 200+ shipments per week.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering, Information Technology",
    school: "Metropolia University of Applied Sciences, Karamalmi Campus",
    year: "2025 – present",
    detail: "Coursework in Software Engineering, Database Management and Web Development.",
  },
  {
    degree: "Diploma in Computing IT",
    school: "",
    year: "",
    detail: "Core IT skills: computer hardware, software installation and end-user support.",
  },
  {
    degree: "Certificate of Higher Education, Computer Science",
    school: "Caspian Valley College",
    year: "",
    detail: "Computer Science, Physics, Chemistry and Mathematics.",
  },
];

const skills = [
  "Computer hardware installation",
  "Basic troubleshooting (Windows)",
  "Microsoft Office proficiency",
  "Active listening",
  "Reliability & punctuality",
  "Adaptability",
  "Instruction adherence",
  "Safety awareness",
];

const interests = ["Coding", "Traveling", "Basketball", "Music", "Public Speaking", "Photography", "Learning Finnish"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            Navin<span className="text-accent">.</span>
          </a>
          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">About</a>
            <a href="#experience" className="text-muted-foreground transition-colors hover:text-foreground">Experience</a>
            <a href="#education" className="text-muted-foreground transition-colors hover:text-foreground">Education</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </div>
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90">
            <a href="#contact">Get in touch</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-20 md:py-28 lg:py-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center animate-fade-up">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground shadow-card">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for Summer Internship 2026
            </span>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Hi, I'm <span className="italic text-accent">Navin Thapa</span> — an IT student building hands-on support skills.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Studying Information Technology at Metropolia University of Applied Sciences. I care about reliable systems, helpful service and turning small details into smooth experiences for end users.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href="#contact">
                  Hire me <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#experience">View experience</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Kauniainen, Espoo</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> thapanavin656@gmail.com</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +358 41 318 1275</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">About</div>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">A few words about me.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-2">
            <p>
              I'm a dedicated IT student at <span className="text-foreground">Metropolia University</span> with a strong interest in technical support and IT services. I'm known for reliability and attention to detail, with foundational knowledge of computer hardware, software installation and end-user support.
            </p>
            <p>
              Right now I'm seeking a <span className="text-foreground">summer internship</span> where I can develop practical skills inside a real IT environment — helping people, learning fast and contributing where I can.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-secondary/40 py-20 md:py-28">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              <Briefcase className="h-4 w-4" /> Experience
            </div>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Where I've worked.
            </h2>
          </div>

          <div className="relative space-y-6">
            {experiences.map((exp) => (
              <article
                key={exp.role + exp.company}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft md:p-8"
              >
                <div className="flex flex-col gap-2 border-b border-border pb-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{exp.role}</h3>
                    <p className="text-muted-foreground">
                      {exp.company} · <span className="text-foreground/70">{exp.location}</span>
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2 text-muted-foreground">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="container py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <GraduationCap className="h-4 w-4" /> Education
          </div>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Academic background.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((ed) => (
            <div key={ed.degree} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-soft">
              {ed.year && <div className="mb-2 text-sm text-accent">{ed.year}</div>}
              <h3 className="font-display text-xl font-semibold leading-snug">{ed.degree}</h3>
              {ed.school && <p className="mt-2 text-sm text-muted-foreground">{ed.school}</p>}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{ed.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills + Languages + Interests */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-4 w-4" /> Skills
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">What I bring to a team.</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                <Languages className="h-4 w-4" /> Languages
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="font-display text-xl font-semibold">English</div>
                  <div className="text-sm text-muted-foreground">Fluent</div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="font-display text-xl font-semibold">Finnish</div>
                  <div className="text-sm text-muted-foreground">Basics · improving daily</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                <Heart className="h-4 w-4" /> Outside of work
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span key={i} className="rounded-full bg-card px-4 py-2 text-sm text-muted-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-20 md:py-28">
        <div className="overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-background shadow-soft md:px-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Let's talk</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Looking for a reliable summer intern?
            </h2>
            <p className="mt-6 text-lg text-background/70">
              I'd love to hear about your team and how I can contribute. The fastest way to reach me is by email or phone.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="mailto:thapanavin656@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Email me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground">
                <a href="tel:+358413181275">
                  <Phone className="mr-2 h-4 w-4" /> Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Navin Thapa. All rights reserved.</div>
          <a href="mailto:thapanavin656@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
            <Mail className="h-4 w-4" /> thapanavin656@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
