import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Fascinate } from "next/font/google"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <TelescopeIcon className="h-6 w-6 text-primary" />
            <span className="font-bold">Astro Engineer</span>
          </Link>
          <nav className="flex items-center gap-4 sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="sm:hidden">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#about"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    About
                  </Link>
                  <Link
                    href="#experience"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    Experience
                  </Link>
                  <Link
                    href="#projects"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    Projects
                  </Link>
                  <Link
                    href="#contact"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>

          <nav className="hidden space-x-4 sm:flex">
            <Link
              href="#about"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">

        <section id="hero" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Hi, I&apos;m Alan Geirnaert</h1>
              <p className="text-lg text-muted-foreground">
                Software Engineer, Data Scientist, and Astronomy Enthusiast
              </p>

              <div className="flex gap-4">
                <Link
                  href="https://github.com/alangnt/"
                  target="_blank"
                  prefetch={false}
                >
                  <Button>
                    <GithubIcon className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/alan-geirnaert/"
                  target="_blank"
                  prefetch={false}
                >
                  <Button variant="outline">
                    <LinkedinIcon className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </Link>

              </div>
            </div>

            <div className="relative">
              <Image
                src="/profile-beach.jpg"
                width={400}
                height={400}
                alt="Profile"
                className="mx-auto h-[400px] w-[400px] rounded-full object-cover shadow-lg transition-all duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 rounded-full bg-primary p-2 text-primary-foreground shadow-lg">
                <TelescopeIcon className="h-6 w-6" />
              </div>
            </div>

          </div>
        </section>

        <section id="about" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="mt-4 text-muted-foreground">
                I am a passionate Software Engineer, Data Scientist, and Astronomy enthusiast. With a strong background
                in computer science and a deep fascination for the cosmos, I strive to create innovative solutions that
                push the boundaries of technology and explore the wonders of the universe.
              </p>
              <p className="mt-4 text-muted-foreground">
                In my work, I combine my technical expertise with a creative mindset, always seeking to find new and
                efficient ways to tackle complex problems. I am driven by a desire to learn, grow, and contribute to the
                advancement of technology and scientific understanding.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <CodeIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Software Engineering</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Proficient in a variety of programming languages and frameworks, with a focus on building scalable and
                  efficient software solutions.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <DatabaseIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Data Science</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Experienced in data analysis, machine learning, and data visualization, with a passion for extracting
                  insights from complex datasets.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <TelescopeIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Astronomy</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fascinated by the mysteries of the universe, I enjoy exploring the latest advancements in astronomy
                  and contributing to citizen science projects.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <PuzzleIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Problem-Solving</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I thrive on tackling complex challenges, leveraging my analytical skills and creative thinking to
                  develop innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">

            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-medium">Software Engineer Fellow</h3>
              <p className="mt-2 text-muted-foreground">Heastarter AI | July 2024 - Present</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    Participate to a 7-weeks long Internship starting on 22nd July to 7th September 2024 with a lot of Team work.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    Working on 5 different projects that required a deep understanding of programming languages, algorithms, and machine learning.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    Collaborating with cross-functional teams to design and deliver innovative solutions that meet
                    business requirements.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-medium">Sales Associate</h3>
              <p className="mt-2 text-muted-foreground">SunglassHut, Luxottica | 2022 - 2024</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    I provided personalized customer service by helping clients select the perfect sunglasses based on their preferences and needs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    I maintained product displays and managed inventory, ensuring that the store was always well-stocked and visually appealing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    I handled transactions efficiently, utilizing point-of-sale systems, and promoted ongoing sales and promotions to
                    enhance customer satisfaction and drive revenue.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </section>
        <section id="projects" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">

            <Link
              href="https://projectlotus.online/"
              className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105"
              target="_blank"
              prefetch={false}
            >
              <Image
                src="/projectlotus.png"
                width={400}
                height={225}
                alt="Project 1"
                className="h-[225px] w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-lg font-medium">Project Lotus</h3>
              <p className="mt-2 text-muted-foreground">
                It is a relaxing platform designed for studying with the Pomodoro Method. Enhance your focus and productivity with soothing backgrounds and a built-in 25-minute timer.
              </p>
              <div className="mt-4 flex gap-2">
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Full-Stack</Badge>
              </div>
            </Link>

            <Link
              href="https://2024-summer-hackathon.vercel.app/"
              className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105"
              target="_blank"
              prefetch={false}
            >
              <Image
                src="/datadruids.png"
                width={400}
                height={225}
                alt="Project 2"
                className="h-[225px] w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-lg font-medium">Olympic Sages</h3>
              <p className="mt-2 text-muted-foreground">
                We analyzed historical data, visualized our results, and hypothesized how this data could be used to predict the outcomes of the 2024 Olympics and its winners.
              </p>
              <div className="mt-4 flex gap-2">
                <Badge>Scikit</Badge>
                <Badge>Pandas</Badge>
                <Badge>Plotly</Badge>
              </div>
            </Link>

          </div>
        </section>

        <section id="contact" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
                <Textarea
                  placeholder="Message"
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MailIcon className="h-6 w-6 text-primary" />
                  <span>geirnaert.alan@icloud.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                  <span>Menton, France</span>
                </div>

                <Link
                  href="https://github.com/alangnt"
                  className="flex items-center gap-2 w-min"
                  target="_blank"
                  prefetch={false}
                >
                  <GithubIcon className="h-6 w-6 text-primary" />
                  <span className="border-transparent border-b-2 hover:border-opacity-100 hover:border-b-white">alangnt</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/alan-geirnaert/"
                  className="flex items-center gap-2 w-min"
                  target="_blank"
                  prefetch={false}
                >
                  <LinkedinIcon className="h-6 w-6 text-primary" />
                  <span className="border-transparent border-b-2 hover:border-opacity-100 hover:border-b-white">alangeirnaert</span>
                </Link>

                <Link
                  href="https://x.com/gnt_alan"
                  className="flex items-center gap-2 w-min"
                  target="_blank"
                  prefetch={false}
                >
                  <XIcon className="h-6 w-6 text-primary" />
                  <span className="border-transparent border-b-2 hover:border-opacity-100 hover:border-b-white">gnt_alan</span>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div >
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function TelescopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
      <path d="m13.56 11.747 4.332-.924" />
      <path d="m16 21-3.105-6.21" />
      <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
      <path d="m6.158 8.633 1.114 4.456" />
      <path d="m8 21 3.105-6.21" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}