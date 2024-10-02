import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, CheckCircle2, Search } from "lucide-react"
import {UserNavbar} from "@/components/Navbar"
import { useNavigate } from "react-router-dom"

export  function DsaProblems() {
  const navigate=useNavigate();
  const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", tags: ["Array", "Hash Table"], solved: true },
    { id: 2, title: "Add Two Numbers", difficulty: "Medium", tags: ["Linked List", "Math"], solved: false },
    { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", tags: ["String", "Sliding Window"], solved: true },
    { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard", tags: ["Array", "Binary Search"], solved: false },
    { id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", tags: ["String", "Dynamic Programming"], solved: false },
  ]

  const difficultyColors = {
    Easy: "bg-green-600",
    Medium: "bg-yellow-600",
    Hard: "bg-red-600"
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 w-screen absolute left-0 top-0">
      <UserNavbar />
      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Problem Set</h1>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <Input placeholder="Search problems..." className="bg-gray-800 border-gray-700 text-gray-100" />
            </div>
            <div className="flex space-x-4">
              <Select>
                <SelectTrigger className="w-full sm:w-[180px] bg-gray-800 border-gray-700 text-gray-100">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-gray-100">
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="bg-gray-800 border-gray-700 text-gray-100">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Sort
              </Button>
            </div>
          </div>
          <div className="grid gap-6">
            {problems.map((problem) => (
              <Card key={problem.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6">
                  <div className="flex-1 mb-4 sm:mb-0 w-full">
                    <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 p-0 pb-2">
                      <div className="flex items-center space-x-2">
                        {problem.solved && (
                          <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                        )}
                        <CardTitle className="text-xl text-white font-bold">{problem.title}</CardTitle>
                      </div>
                      <Badge className={`${difficultyColors[problem.difficulty]} text-gray-100 mt-2 sm:mt-0`}>
                        {problem.difficulty}
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {problem.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                  <Button onClick={()=>{navigate("/user/dsa/problem")}}className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white mt-4 sm:mt-0">
                    {problem.solved ? "Solve Again" : "Solve Challenge"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}