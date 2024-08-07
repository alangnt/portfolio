"use client"

import Link from "next/link"
import Image from "next/image"

import * as Icons from "@/components/ui/icons"
import { Book } from "lucide-react"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type TranslationKey = keyof typeof translations.en;
type Language = 'en' | 'fr';

const translations = {
  en: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    hi: "Hi, I'm Alan Geirnaert",
    role: "Software Engineer, Data Scientist, and Astronomy Enthusiast",
    resume: "Resume",
    hire: "Open to work",
    aboutMe: "About Me",
    aboutText1: "I am a passionate Software Engineer, Data Scientist, and Astronomy enthusiast. With a strong background in computer science and a deep fascination for the cosmos, I strive to create innovative solutions that push the boundaries of technology and explore the wonders of the universe.",
    aboutText2: "In my work, I combine my technical expertise with a creative mindset, always seeking to find new and efficient ways to tackle complex problems. I am driven by a desire to learn, grow, and contribute to the advancement of technology and scientific understanding.",
    softwareEngineering: "Software Engineering",
    softwareEngineeringDesc: "Proficient in a variety of programming languages and frameworks, with a focus on building scalable and efficient software solutions.",
    dataScience: "Data Science",
    dataScienceDesc: "Experienced in data analysis, machine learning, and data visualization, with a passion for extracting insights from complex datasets.",
    astronomy: "Astronomy",
    astronomyDesc: "Fascinated by the mysteries of the universe, I enjoy exploring the latest advancements in astronomy and contributing to citizen science projects.",
    problemSolving: "Problem-Solving",
    problemSolvingDesc: "I thrive on tackling complex challenges, leveraging my analytical skills and creative thinking to develop innovative solutions.",
    featuredProjects: "Featured Projects",
    globalWeatherAppDesc: "A weather app that provides real-time weather updates for any city around the globe. This project is part of Headstarter AI internship's week 1 Hackathon.",
    projectLotusDesc: "It is a relaxing platform designed for studying with the Pomodoro Method. Enhance your focus and productivity with soothing backgrounds and a built-in 25-minute timer.",
    olympicSagesDesc: "We analyzed historical data, visualized our results, and hypothesized how this data could be used to predict the outcomes of the 2024 Olympics and its winners.",
    workExperience: "Work Experience",
    softwareEngineerFellow: "Software Engineer Fellow",
    softwareEngineerFellowDesc1: "I got the wonderful chance to participate to a 7-weeks long Internship starting on 22nd July to 7th September 2024 with a lot of Team work.",
    softwareEngineerFellowDesc2: "Working on 5 different projects that required a deep understanding of programming languages, algorithms, and machine learning.",
    softwareEngineerFellowDesc3: "Collaborating with cross-functional teams to design and deliver innovative solutions that meet business requirements.",
    salesAssociate: "Sales Associate",
    salesAssociateDesc1: "I provided personalized customer service by helping clients select the perfect sunglasses based on their preferences and needs.",
    salesAssociateDesc2: "I maintained product displays and managed inventory, ensuring that the store was always well-stocked and visually appealing.",
    salesAssociateDesc3: "I handled transactions efficiently, utilizing point-of-sale systems, and promoted ongoing sales and promotions to enhance customer satisfaction and drive revenue.",
    getInTouch: "Get in Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
  },
  fr: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    contact: "Contact",
    hi: "Bonjour, je suis Alan Geirnaert",
    role: "Ingénieur Logiciel, Data Scientist et Passionné d'Astronomie",
    resume: "CV",
    hire: "Ouvert à l'emploi",
    aboutMe: "À propos de moi",
    aboutText1: "Je suis un ingénieur logiciel passionné, data scientist et amateur d'astronomie. Avec une solide formation en informatique et une profonde fascination pour le cosmos, je m'efforce de créer des solutions innovantes qui repoussent les limites de la technologie et explorent les merveilles de l'univers.",
    aboutText2: "Dans mon travail, je combine mon expertise technique avec un esprit créatif, cherchant toujours à trouver de nouvelles façons efficaces d'aborder des problèmes complexes. Je suis motivé par le désir d'apprendre, de grandir et de contribuer à l'avancement de la technologie et de la compréhension scientifique.",
    softwareEngineering: "Ingénierie Logicielle",
    softwareEngineeringDesc: "Compétent dans une variété de langages de programmation et de frameworks, avec un accent sur la construction de solutions logicielles évolutives et efficaces.",
    dataScience: "Science des Données",
    dataScienceDesc: "Expérimenté en analyse de données, apprentissage automatique et visualisation de données, avec une passion pour l'extraction d'insights à partir d'ensembles de données complexes.",
    astronomy: "Astronomie",
    astronomyDesc: "Fasciné par les mystères de l'univers, j'aime explorer les dernières avancées en astronomie et contribuer à des projets de science citoyenne.",
    problemSolving: "Résolution de Problèmes",
    problemSolvingDesc: "Je m'épanouis en relevant des défis complexes, en utilisant mes compétences analytiques et ma pensée créative pour développer des solutions innovantes.",
    featuredProjects: "Projets Phares",
    globalWeatherAppDesc: "Une application météo qui fournit des mises à jour météorologiques en temps réel pour n'importe quelle ville du monde. Ce projet fait partie du Hackathon de la semaine 1 du stage Headstarter AI.",
    projectLotusDesc: "C'est une plateforme relaxante conçue pour étudier avec la méthode Pomodoro. Améliorez votre concentration et votre productivité avec des arrière-plans apaisants et un minuteur intégré de 25 minutes.",
    olympicSagesDesc: "Nous avons analysé des données historiques, visualisé nos résultats et émis des hypothèses sur la façon dont ces données pourraient être utilisées pour prédire les résultats des Jeux Olympiques de 2024 et ses gagnants.",
    workExperience: "Expérience Professionnelle",
    softwareEngineerFellow: "Stagiaire Ingénieur Logiciel",
    softwareEngineerFellowDesc1: "J'ai la merveilleuse opportunité de participer à un stage de 7 semaines du 22 juillet au 7 septembre 2024 avec beaucoup de travail d'équipe.",
    softwareEngineerFellowDesc2: "Travail sur 5 projets différents nécessitant une compréhension approfondie des langages de programmation, des algorithmes et de l'apprentissage automatique.",
    softwareEngineerFellowDesc3: "Collaboration avec des équipes interfonctionnelles pour concevoir et livrer des solutions innovantes répondant aux exigences de l'entreprise.",
    salesAssociate: "Conseiller de Vente",
    salesAssociateDesc1: "J'ai fourni un service client personnalisé en aidant les clients à sélectionner les lunettes de soleil parfaites en fonction de leurs préférences et de leurs besoins.",
    salesAssociateDesc2: "J'ai maintenu les présentations de produits et géré l'inventaire, en veillant à ce que le magasin soit toujours bien approvisionné et visuellement attrayant.",
    salesAssociateDesc3: "J'ai géré efficacement les transactions, en utilisant des systèmes de point de vente, et promu les ventes et promotions en cours pour améliorer la satisfaction des clients et stimuler les revenus.",
    getInTouch: "Contactez-moi",
    name: "Nom",
    email: "Email",
    message: "Message",
    sendMessage: "Envoyer le Message",
  }
}

export default function LandingPage() {
  const [lang, setLang] = useState<Language>('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const t = (key: TranslationKey) => translations[lang][key];

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
                    {t('about')}
                  </Link>
                  <Link
                    href="#experience"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    {t('experience')}
                  </Link>
                  <Link
                    href="#projects"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    {t('projects')}
                  </Link>
                  <Link
                    href="#contact"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    {t('contact')}
                  </Link>
                  <button
                    onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                    className="flex items-center gap-4 mt-4 px-2.5 text-muted-foreground hover:text-foreground justify-start bg-transparent text-lg"
                  >
                    {lang === 'en' ? 'Français' : 'English'}
                  </button>
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
              {t('about')}
            </Link>
            <Link
              href="#experience"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              {t('experience')}
            </Link>
            <Link
              href="#projects"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              {t('projects')}
            </Link>
            <Link
              href="#contact"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              {t('contact')}
            </Link>
            <Button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              size="sm"
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t('hi')}</h1>
              <p className="text-lg text-muted-foreground">
                {t('role')}
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
                <Link
                  href="/resume/cv_Alan_en.pdf"
                  target="_blank"
                  prefetch={false}
                >
                  <Button variant="outline">
                    <Book className="mr-2 h-5 w-5" />
                    {t('resume')}
                  </Button>
                </Link>
              </div>

              <div>
                <Badge>{t('hire')}</Badge>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/profile-beach.jpg"
                width={400}
                height={400}
                alt="Profile"
                className="mx-auto h-[400px] w-[400px] rounded-full object-cover shadow"
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
              <h2 className="text-3xl font-bold tracking-tight">{t('aboutMe')}</h2>
              <p className="mt-4 text-muted-foreground">
                {t('aboutText1')}
              </p>
              <p className="mt-4 text-muted-foreground">
                {t('aboutText2')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <Icons.CodeIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">{t('softwareEngineering')}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t('softwareEngineeringDesc')}
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <Icons.DatabaseIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">{t('dataScience')}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t('dataScienceDesc')}
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <Icons.TelescopeIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">{t('astronomy')}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t('astronomyDesc')}
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 transition-all duration-300 hover:scale-105">
                <Icons.PuzzleIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">{t('problemSolving')}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t('problemSolvingDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">{t('featuredProjects')}</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Link
              href="https://weather-app-six-self-61.vercel.app/"
              className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105"
              target="_blank"
              prefetch={false}
            >
              <Image
                src="/weather-app.png"
                width={400}
                height={225}
                alt="Project 1"
                className="h-[225px] w-full rounded-lg object-cover"
              />
              <h3 className="mt-4 text-lg font-medium">Global Weather App</h3>
              <p className="mt-2 text-muted-foreground">
                {t('globalWeatherAppDesc')}
              </p>
              <div className="mt-4 flex gap-2">
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Full-Stack</Badge>
                <Badge>PostgreSQL</Badge>
              </div>
            </Link>

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
                {t('projectLotusDesc')}
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
                {t('olympicSagesDesc')}
              </p>
              <div className="mt-4 flex gap-2">
                <Badge>Scikit</Badge>
                <Badge>Pandas</Badge>
                <Badge>Plotly</Badge>
              </div>
            </Link>
          </div>
        </section>

        <section id="experience" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">{t('workExperience')}</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-medium">{t('softwareEngineerFellow')}</h3>
              <p className="mt-2 text-muted-foreground">Headstarter AI | July 2024 - Present</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>{t('softwareEngineerFellowDesc1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>{t('softwareEngineerFellowDesc2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>{t('softwareEngineerFellowDesc3')}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-medium">{t('salesAssociate')}</h3>
              <p className="mt-2 text-muted-foreground">SunglassHut, Luxottica | 2022 - 2024</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>{t('salesAssociateDesc1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>{t('salesAssociateDesc2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icons.CheckIcon className="h-5 w-5 text-primary" />
                  <span>{t('salesAssociateDesc3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">{t('getInTouch')}</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-muted p-6 transition-all duration-300 hover:scale-105">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('name')}
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('email')}
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  required
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('message')}
                  className="w-full rounded-lg bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  required
                />
                <Button type="submit" className="w-full">
                  {t('sendMessage')}
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
    </div>
  )
}