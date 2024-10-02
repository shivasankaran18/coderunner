import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code2, BrainCircuit, BarChart3, Users, Zap, BookOpen, ChevronRight } from "lucide-react"
import { Link, useNavigate } from 'react-router-dom'

export  function Landing() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate=useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col w-screen absolute top-0 left-0 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <header className={`sticky top-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : ''}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center space-x-2" to="#">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">CodeRunner</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <Link key={item} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" to="#">
                {item}
              </Link>
            ))}
          </nav>
          <Button className="hidden md:inline-flex bg-indigo-600 hover:bg-indigo-600" onClick={()=>navigate("/user/home")}>Onboard</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                  Master <span className="text-indigo-600">DSA</span>, <span className="text-purple-600">APT</span>, and <span className="text-blue-600">Analytics</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Elevate your problem-solving skills with our comprehensive platform. Practice, learn, and excel in
                  your college coursework and beyond.
                </p>
                <div className="flex space-x-4">
                  <Button variant={"purple"}>
                    Get Started
                  </Button>
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full transition-transform hover:scale-105">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full filter blur-3xl opacity-30"></div>
                  <img src="/placeholder.svg?height=400&width=400" alt="Platform Preview" className="relative rounded-lg shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: BrainCircuit, title: "Data Structures & Algorithms", description: "Master the core concepts of DSA with our curated problem sets and interactive tutorials." },
                { icon: Zap, title: "Aptitude Training", description: "Sharpen your logical and analytical skills with our APT challenges and timed quizzes." },
                { icon: BarChart3, title: "Analytics Problems", description: "Dive into real-world analytics scenarios and develop your data interpretation skills." }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold">Why Choose Our Platform?</h2>
                <p className="text-xl text-gray-600">
                  Our platform is designed to give you the edge in your academic and professional journey.
                </p>
                <ul className="grid gap-4 md:grid-cols-2">
                  {[
                    { icon: Users, text: "Collaborative Learning" },
                    { icon: BookOpen, text: "Comprehensive Resources" },
                    { icon: Zap, text: "Personalized Challenges" },
                    { icon: BarChart3, text: "Progress Tracking" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 bg-indigo-50 p-3 rounded-lg">
                      <item.icon className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Join Now</h3>
                  <p className="text-gray-600 mb-6">Start your journey to mastery today!</p>
                  <form className="space-y-4">
                    <Input placeholder="Enter your email" type="email" className="w-full" />
                    <Button className="w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white">Sign Up</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Alex Johnson", role: "Computer Science Student", quote: "CodeCampus has significantly improved my problem-solving skills. The DSA section is particularly helpful!" },
                { name: "Samantha Lee", role: "Data Science Major", quote: "The analytics problems on this platform are challenging and relevant. It's great preparation for real-world scenarios." },
                { name: "Michael Chen", role: "Software Engineering Intern", quote: "Thanks to the APT training on CodeCampus, I aced my technical interviews. Highly recommended!" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-indigo-800 p-6 rounded-xl">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-indigo-300">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already enhancing their skills and preparing for successful careers.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg transition-transform hover:scale-105">
              Start Your Journey Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">CodeCampus</h3>
              <p className="text-gray-400">Empowering students with cutting-edge problem-solving skills.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
                  <li key={item}><Link to="#" className="text-gray-400 hover:text-white transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Blog', 'Tutorials', 'FAQ', 'Support'].map((item) => (
                  <li key={item}><Link to="#" className="text-gray-400 hover:text-white transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((item) => (
                  <Link key={item} to="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{item}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2023 CodeCampus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}