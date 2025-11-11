import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Globe, Rocket, Search, PenTool, Sparkles, Mail, Phone, Github, Linkedin } from 'lucide-react'

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg" />
          <span className="font-semibold tracking-tight text-gray-900">Flames Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => scrollTo('services')} className="text-gray-700 hover:text-gray-900 transition-colors">Services</button>
          <button onClick={() => scrollTo('work')} className="text-gray-700 hover:text-gray-900 transition-colors">Work</button>
          <button onClick={() => scrollTo('about')} className="text-gray-700 hover:text-gray-900 transition-colors">About</button>
          <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-gray-900 transition-colors">Contact</button>
        </nav>
        <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="hidden md:inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors shadow-sm">
          Let’s talk <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="absolute top-20 -left-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            <Sparkles className="h-3.5 w-3.5" /> Modern • Playful • Interactive
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            I build delightful digital experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Portfolio and studio offering website development, SEO, digital marketing, and logo design. Clean code, sharp design, and results that move the needle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors shadow">
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" onClick={(e)=>{e.preventDefault();document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-md border border-gray-200 hover:border-gray-300 transition-colors">
              Explore services
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600 pt-2">
            <div className="flex items-center gap-2"><Globe className="h-4 w-4" /> Web • SEO • Brand</div>
            <div className="flex items-center gap-2"><Rocket className="h-4 w-4" /> Growth-driven</div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[540px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/30" />
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'High-performance, responsive websites that feel fast and look stunning on every device.'
  },
  {
    icon: Search,
    title: 'SEO Services',
    desc: 'Technical SEO, keyword strategy, and on-page optimization to boost your organic visibility.'
  },
  {
    icon: Rocket,
    title: 'Digital Marketing',
    desc: 'Campaigns that convert. Paid ads, funnels, email, and analytics to scale your growth.'
  },
  {
    icon: PenTool,
    title: 'Logo & Brand Design',
    desc: 'Memorable logos and brand systems that express who you are and why you matter.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">End-to-end solutions crafted to elevate your brand and business.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-md">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold text-gray-900 text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 text-indigo-600 text-sm font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const projects = [
    { title: 'SaaS Landing', tag: 'Web Design', gradient: 'from-indigo-500 to-sky-500' },
    { title: 'E‑commerce', tag: 'Web App', gradient: 'from-rose-500 to-orange-500' },
    { title: 'Brand Kit', tag: 'Identity', gradient: 'from-purple-500 to-pink-500' },
  ]

  return (
    <section id="work" className="relative py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="mt-3 text-gray-600">A peek at recent projects. More on request.</p>
          </div>
          <a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
            Book a walkthrough <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-44 bg-gradient-to-br ${p.gradient}`} />
              <div className="p-5">
                <span className="inline-flex text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{p.tag}</span>
                <h3 className="mt-2 font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">Conversion-focused, accessible, and fast.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl p-1 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
          <div className="rounded-2xl bg-white p-8">
            <h3 className="text-2xl font-bold text-gray-900">Design + Engineering</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              I blend product thinking, clean design, and modern engineering to ship experiences that feel polished and purposeful. I obsess over performance, accessibility, and details that delight.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li>Responsive Design</li>
              <li>Next‑gen Frontend</li>
              <li>CMS & E‑commerce</li>
              <li>Brand Systems</li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
            <h4 className="font-semibold text-gray-900">Process</h4>
            <p className="mt-2 text-gray-600 text-sm">Discovery → Strategy → Design → Build → Launch → Iterate. Transparent communication and measurable outcomes at every step.</p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
            <h4 className="font-semibold text-gray-900">Tooling</h4>
            <p className="mt-2 text-gray-600 text-sm">React, Tailwind, SEO tooling, analytics, automations, and modern creative suites.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Tell me about your project</h3>
              <p className="mt-3 text-gray-600">I usually respond within 24 hours. Share a bit about your goals, timeline, and budget.</p>

              <form onSubmit={(e)=>e.preventDefault()} className="mt-6 space-y-4">
                <input className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" required />
                <input type="email" className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" required />
                <input className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Company / Brand (optional)" />
                <textarea rows={4} className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="What are you looking to build?" />
                <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                  Send inquiry <Mail className="h-4 w-4" />
                </button>
              </form>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Prefer email or a quick call?</h4>
                <div className="flex items-center gap-3 text-gray-700"><Mail className="h-5 w-5 text-indigo-600" /> hello@flames.studio</div>
                <div className="flex items-center gap-3 text-gray-700"><Phone className="h-5 w-5 text-indigo-600" /> +1 (555) 123‑4567</div>

                <div className="pt-6">
                  <p className="text-sm text-gray-600">Follow along:</p>
                  <div className="mt-2 flex items-center gap-3">
                    <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-10 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flames Studio — All rights reserved.</p>
        <div className="text-sm text-gray-600">Made with care and a dash of creativity.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
