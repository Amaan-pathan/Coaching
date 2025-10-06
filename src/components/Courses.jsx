import React from 'react'

const Courses = () => {
  const courses = [
    {
      title: "Mathematics",
      description: "Comprehensive coverage of algebra, geometry, calculus, and statistics with problem-solving techniques.",
      features: ["Algebra & Trigonometry", "Geometry & Mensuration", "Calculus & Statistics", "Problem Solving Techniques"],
      color: "bg-blue-500",
      icon: "📐"
    },
    {
      title: "Physics",
      description: "From basic mechanics to advanced physics concepts with practical demonstrations and experiments.",
      features: ["Mechanics & Motion", "Thermodynamics", "Optics & Waves", "Modern Physics"],
      color: "bg-green-500",
      icon: "⚛️"
    },
    {
      title: "Chemistry",
      description: "Complete understanding of chemical reactions, periodic table, and laboratory techniques.",
      features: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Laboratory Techniques"],
      color: "bg-purple-500",
      icon: "🧪"
    },
    {
      title: "Biology",
      description: "Comprehensive study of living organisms, human biology, and environmental science.",
      features: ["Botany & Plant Biology", "Zoology & Animal Biology", "Human Biology", "Environmental Science"],
      color: "bg-red-500",
      icon: "🧬"
    },
    {
      title: "Languages",
      description: "English, Arabic, Marathi, and Hindi with focus on grammar, literature, and communication.",
      features: ["Grammar & Composition", "Literature Analysis", "Communication Skills", "Cultural Context"],
      color: "bg-yellow-500",
      icon: "📚"
    },
    {
      title: "Social Studies",
      description: "History, geography, and civics with emphasis on current affairs and critical thinking.",
      features: ["Indian History", "World Geography", "Civics & Constitution", "Current Affairs"],
      color: "bg-indigo-500",
      icon: "🌍"
    }
  ]

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic programs designed to help students excel in all subjects with expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`h-2 ${course.color}`}></div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 ${course.color} rounded-full mr-3`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full ${course.color} text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Course Features */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Our Courses Stand Out</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our comprehensive approach ensures students not only learn but understand and apply knowledge effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Structured Learning</h4>
              <p className="text-sm text-blue-100">Well-organized curriculum with clear learning objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Expert Faculty</h4>
              <p className="text-sm text-blue-100">Experienced teachers with proven track records</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Regular Assessments</h4>
              <p className="text-sm text-blue-100">Continuous evaluation and progress tracking</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Proven Results</h4>
              <p className="text-sm text-blue-100">High success rates and student achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
