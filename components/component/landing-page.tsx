"use client"

import Link from "next/link"
import Image from "next/image"

import * as Icons from "@/components/ui/icons"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Fascinate } from "next/font/google"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {

      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      alert('Form submitted successfully');

    } else {
      alert('Failed to submit the form');
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Icons.TelescopeIcon className="h-6 w-6 text-primary" />
            <span className="font-bold">Astro Engineer</span>
          </Link>
          <nav className="flex items-center gap-4 sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <Icons.MenuIcon className="h-6 w-6" />
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
                    <Icons.GithubIcon className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/alan-geirnaert/"
                  target="_blank"
                  prefetch={false}
                >
                  <Button variant="outline">
                    <Icons.LinkedinIcon className="mr-2 h-5 w-5" />
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
                <Icons.TelescopeIcon className="h-6 w-6" />
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
                <Icons.CodeIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Software Engineering</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Proficient in a variety of programming languages and frameworks, with a focus on building scalable and
                  efficient software solutions.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <Icons.DatabaseIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Data Science</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Experienced in data analysis, machine learning, and data visualization, with a passion for extracting
                  insights from complex datasets.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <Icons.TelescopeIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Astronomy</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fascinated by the mysteries of the universe, I enjoy exploring the latest advancements in astronomy
                  and contributing to citizen science projects.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <Icons.PuzzleIcon className="h-8 w-8 text-primary" />
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
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    I got the wonderful chance to participate to a 7-weeks long Internship starting on 22nd July to 7th September 2024 with a lot of Team work.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    Working on 5 different projects that required a deep understanding of programming languages, algorithms, and machine learning.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
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
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    I provided personalized customer service by helping clients select the perfect sunglasses based on their preferences and needs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>
                    I maintained product displays and managed inventory, ensuring that the store was always well-stocked and visually appealing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  required
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  required
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Icons.MailIcon className="h-6 w-6 text-primary" />
                  <span>geirnaert.alan@icloud.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <Icons.MapPinIcon className="h-6 w-6 text-primary" />
                  <span>Menton, France</span>
                </div>

                <Link
                  href="https://github.com/alangnt"
                  className="flex items-center gap-2 w-min"
                  target="_blank"
                  prefetch={false}
                >
                  <Icons.GithubIcon className="h-6 w-6 text-primary" />
                  <span className="border-transparent border-b-2 hover:border-opacity-100 hover:border-b-white">alangnt</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/alan-geirnaert/"
                  className="flex items-center gap-2 w-min"
                  target="_blank"
                  prefetch={false}
                >
                  <Icons.LinkedinIcon className="h-6 w-6 text-primary" />
                  <span className="border-transparent border-b-2 hover:border-opacity-100 hover:border-b-white">alangeirnaert</span>
                </Link>

                <Link
                  href="https://x.com/gnt_alan"
                  className="flex items-center gap-2 w-min"
                  target="_blank"
                  prefetch={false}
                >
                  <Image
                    src="/xicon.png"
                    height={24}
                    width={24}
                    alt="x icon"
                    className="h-6 w-6 text-primary"
                  />
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