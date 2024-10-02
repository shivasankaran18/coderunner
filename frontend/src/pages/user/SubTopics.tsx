'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from "@/components/ui/input"
import { ArrowRight, ChevronRight, Search } from 'lucide-react'
import { UserNavbar } from '@/components/Navbar'

const arrayProblems = [
  {
    title: "Introduction to Arrays",
    description: "Learn what arrays are and how they are used to store multiple elements of the same type.",
    example: "Example: int[] numbers = {1, 2, 3, 4, 5};"
  },
  {
    title: "Accessing Array Elements",
    description: "Understand how to access individual elements in an array using index notation.",
    example: "Example: Accessing the third element: numbers[2]"
  },
  {
    title: "Array Traversal",
    description: "Learn how to iterate through all elements of an array using loops.",
    example: "Example: for (int i = 0; i < numbers.length; i++) { ... }"
  },
  {
    title: "Modifying Array Elements",
    description: "Explore how to change the values of array elements after initialization.",
    example: "Example: numbers[0] = 10; // Changes the first element to 10"
  },
  {
    title: "Finding the Length of an Array",
    description: "Understand how to determine the number of elements in an array.",
    example: "Example: int length = numbers.length;"
  }
]

const arraySubtopics = [
  "Basics", "Indexing", "Traversal", "Modification", "Length", "Simple Operations"
]

export default function SubTopicsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProblems = arrayProblems.filter(problem =>
    problem.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="w-screen top-0 left-0 absolute min-h-screen bg-gray-900 text-white">
      <UserNavbar/>

      <main className="container mx-auto mt-8 px-4">
        <nav className="text-sm mb-4">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/user/dsa/learn" className="text-blue-400 hover:text-blue-300">Learn</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
            </li>
            <li className="flex items-center">
              <Link to="/user/dsa/topics" className="text-blue-400 hover:text-blue-300">DSA</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
            </li>
            <li className="text-gray-400">Arrays</li>
          </ol>
        </nav>
        <h2 className="text-3xl font-bold mb-6">Arrays</h2>

        <div className="mb-6 relative">
          <Input
            type="text"
            placeholder="Search array topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-800 text-white border-gray-700 rounded-md pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {arraySubtopics.map((subtopic) => (
              <Link 
                key={subtopic} 
                to={`/user/dsa/arrays/${subtopic.toLowerCase().replace(' ', '-')}`}
                className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors whitespace-nowrap"
              >
                {subtopic}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredProblems.map((problem) => (
            <div key={problem.title} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-400 mb-2">{problem.description}</p>
              <p className="text-gray-400 mb-4">{problem.example}</p>
              <Link to={`/learn/dsa/arrays/${problem.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}