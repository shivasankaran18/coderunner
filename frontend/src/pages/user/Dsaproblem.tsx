"use client"

import { useState, useEffect } from 'react'
import { UserNavbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from 'framer-motion'
import Editor from '@monaco-editor/react'
import { Loader2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function DsaProblem() {
  const [problemContent, setProblemContent] = useState('')
  const [code, setCode] = useState('// Write your code here\n')
  const [language, setLanguage] = useState('java')

  const languageOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
  ]

  useEffect(() => {
    fetch('/two-sum.md')
      .then(response => response.text())
      .then((text) => {
        console.log(text)
        setProblemContent(text)
      })
  }, [])

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value)
    }
  }

  const handleLanguageChange = (value: string) => {
    console.log(value)
    setLanguage(value)

    // Reset code when language changes
    setCode('// Write your code here\n')
  }

  const handleRun = () => {
    console.log('Running code:', code)
    // Implement run logic here
  }

  const handleSubmit = () => {
    console.log('Submitting code:', code)
    // Implement submit logic here
  }

  return (
    <div className=" bg-gray-900 text-gray-100 w-full ">
      <UserNavbar />
      <motion.div 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row gap-8 ">
          <motion.div 
            className="lg:w-1/2 bg-gray-800 rounded-lg shadow-lg p-6 overflow-y-auto "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ReactMarkdown className="prose prose-invert max-w-none " remarkPlugins={[remarkGfm]}>
              {problemContent}
            </ReactMarkdown>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-gray-700 p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Code Editor</h2>
              <Select onValueChange={handleLanguageChange} value={language}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  {languageOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Editor
              height="calc(100vh - 340px)"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={handleEditorChange}
              loading={<Loader2 className="animate-spin" />}
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
            <div className="flex justify-end space-x-4 p-4 bg-gray-700">
              <Button onClick={handleRun} className="bg-green-600 hover:bg-green-700 transition-colors">
                Run
              </Button>
              <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 transition-colors">
                Submit
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}