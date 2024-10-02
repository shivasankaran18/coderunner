import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import ReactMarkdown from 'react-markdown'
import { UserNavbar } from '@/components/Navbar'

const arraySubtopics = [
  { name: "Introduction to Arrays", content: "# Introduction to Arrays\n\nArrays are fundamental data structures that store multiple elements of the same type in contiguous memory locations...", problems: [
    { id: 1, title: "Create an Array", completed: false },
    { id: 2, title: "Print Array Elements", completed: true },
  ]},
  { name: "Array Indexing", content: "# Array Indexing\n\nArray indexing refers to the process of accessing individual elements in an array using their position or index...", problems: [
    { id: 3, title: "Access nth Element", completed: false },
    { id: 4, title: "Modify Array Element", completed: false },
  ]},
  { name: "Array Traversal", content: "# Array Traversal\n\nArray traversal involves visiting each element of an array in a specific order, typically from the first element to the last...", problems: [
    { id: 5, title: "Sum of Array Elements", completed: false },
    { id: 6, title: "Find Maximum Element", completed: false },
  ]},
  { name: "Array Operations", content: "# Array Operations\n\nCommon array operations include insertion, deletion, and searching for elements...", problems: [
    { id: 7, title: "Insert Element at Position", completed: false },
    { id: 8, title: "Remove Element from Array", completed: false },
  ]},
]

export default function ArraysPage() {
  const [selectedTopic, setSelectedTopic] = useState(arraySubtopics[0])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <UserNavbar />
      <main className="container mx-auto mt-8 px-4 flex">
        <aside className="w-64 pr-8">
          <h2 className="text-2xl font-bold mb-4">Arrays</h2>
          <nav>
            <ul className="space-y-2">
              {arraySubtopics.map((topic) => (
                <li key={topic.name}>
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                      <Button 
                        variant="ghost" 
                        className={`justify-start ${selectedTopic.name === topic.name ? 'bg-blue-500' : ''}`}
                        onClick={() => setSelectedTopic(topic)}
                      >
                        {topic.name}
                      </Button>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="pl-4 mt-2 space-y-2">
                        {topic.problems.map((problem) => (
                          <li key={problem.id} className="flex items-center">
                            <Button variant="ghost" className="justify-start text-sm">
                              {problem.title}
                            </Button>
                            {problem.completed && <Check className="h-4 w-4 ml-2 text-green-500" />}
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="flex-1">
          <nav className="text-sm mb-4">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/user/dsa/learn" className="text-blue-400 hover:text-blue-300">Learn</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <Link to="/user/dsa/problem" className="text-blue-400 hover:text-blue-300">DSA</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <Link to="/user/dsa/interview" className="text-blue-400 hover:text-blue-300">Arrays</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="text-gray-400">{selectedTopic.name}</li>
            </ol>
          </nav>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <ReactMarkdown className="prose prose-invert max-w-none">
              {selectedTopic.content}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  )
}