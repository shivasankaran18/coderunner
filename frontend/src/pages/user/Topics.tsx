import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from "@/components/ui/input"
import { ArrowRight } from 'lucide-react'
import { UserNavbar } from '@/components/Navbar'

const topics = [
  { name: 'Arrays', description: 'Fundamental data structure for storing elements of the same type.' },
  { name: 'Introduction to DSA', description: 'Primer on Data Structures and Algorithms.' },
  { name: 'Binary Search', description: 'Efficient searching algorithm for sorted arrays.' },
  { name: 'Binary Search Tree', description: 'Hierarchical data structure with efficient search, insertion, and deletion operations.' },
  { name: 'Binary Tree', description: 'Tree data structure where each node has at most two children.' },
  { name: 'Bit Manipulation', description: 'Manipulating individual bits to perform operations.' },
  { name: 'C++', description: 'Powerful programming language often used for DSA implementations.' },
  { name: 'CS Core', description: 'Essential concepts in Computer Science.' },
  { name: 'Data Structures', description: 'Fundamental building blocks for organizing and storing data efficiently.' },
  { name: 'Dynamic Programming', description: 'Method for solving complex problems by breaking them down into simpler subproblems.' },
  { name: 'Graph', description: 'Non-linear data structure consisting of vertices and edges.' },
  { name: 'Greedy', description: 'Algorithmic paradigm that makes locally optimal choices at each step.' },
]

export default function TopicsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-screen top-0 absolute left-0 min-h-screen bg-gray-900 text-white">
      <UserNavbar />
      <main className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-bold mb-6">Data Structures and Algorithms</h2>

        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search Topic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-800 text-white border-gray-700 rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <div key={topic.name} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{topic.name}</h3>
              <p className="text-gray-400 mb-4">{topic.description}</p>
              <Link to="/user/dsa/subtopics" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}