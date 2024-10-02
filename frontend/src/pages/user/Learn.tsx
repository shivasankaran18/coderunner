import { UserNavbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"

export default function LearnPage() {
    const navigate = useNavigate();
  const languages = [
    { name: 'C', description: 'Learn the fundamentals of C programming' },
    { name: 'Python', description: 'Master Python programming language' },
    { name: 'SQL', description: 'Understand database querying with SQL' },
    { name: 'C++', description: 'Dive into object-oriented programming with C++' },
    { name: 'Java', description: 'Explore Java programming language' },
  ]
  const topics = ['Data Structures', 'Algorithms', 'Databases']

  return (
    <div className="w-screen top-0 absolute left-0 min-h-screen bg-gray-900 text-white">
        <UserNavbar />
      <main className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-bold mb-6">Learn</h2>
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Prepare by Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topics.map((topic) => (
              <Card key={topic} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">{topic}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={()=>{navigate("/user/dsa/topics")}}>Start Learning</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <Card key={lang.name} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-400">Learn {lang.name}</CardTitle>
                  <CardDescription className="text-gray-400">{lang.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={()=>{navigate(`/user/dsa/topics/`)}}>Start Roadmap</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}