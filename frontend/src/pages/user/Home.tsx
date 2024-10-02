import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"


export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen py-40 bg-gray-900 text-gray-100 w-screen absolute top-0 left-0">
   
      <motion.div 
        className="container mx-auto px-4 py-16 flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-500 mb-4">Welcome to CodeCampus</h1>
          <p className="text-xl sm:text-2xl text-gray-300">Enhance your skills in DSA, Aptitude, and Analytics</p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl"
          variants={containerVariants}
        >
          {[
            { title: "Data Structures & Algorithms", to: "/user/dsa/problems" },
            { title: "Aptitude", to: "/aptitude" },
            { title: "Analytics", to: "/analytics" }
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link to={item.to} >
                <Button 
                  className="w-full h-24 bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {item.title}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}