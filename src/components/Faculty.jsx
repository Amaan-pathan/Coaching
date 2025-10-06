import React from 'react'

const Faculty = () => {
  const facultyMembers = [
    {
      name: "MOSIN SHAIKH",
      subject: "Mathematics",
      experience: "14 years",
      description: "Founder and Head of Mathematics Department. Expert in calculus, algebra, and geometry with proven track record of student success.",
      color: "bg-blue-500"
    },
    {
      name: "SHAHID SIR",
      subject: "Physics",
      experience: "7 years",
      description: "Specialized in mechanics, thermodynamics, and modern physics. Makes complex concepts easy to understand.",
      color: "bg-green-500"
    },
    {
      name: "SAGIR SIR",
      subject: "Chemistry",
      experience: "7 years",
      description: "Expert in organic, inorganic, and physical chemistry. Known for innovative teaching methods and practical demonstrations.",
      color: "bg-purple-500"
    },
    {
      name: "IMTIYAZ SIR",
      subject: "Biology",
      experience: "8 years",
      description: "Specialized in botany, zoology, and human biology. Creates engaging learning experiences for students.",
      color: "bg-red-500"
    },
    {
      name: "MUZAMMIL SIR",
      subject: "English & Arabic",
      experience: "8 years",
      description: "Expert in language teaching with focus on grammar, literature, and communication skills.",
      color: "bg-yellow-500"
    },
    {
      name: "WAJID SIR",
      subject: "Marathi & Hindi",
      experience: "14 years",
      description: "Veteran language teacher with expertise in literature, grammar, and cultural aspects of both languages.",
      color: "bg-indigo-500"
    },
    {
      name: "MUZAMMIL SIR",
      subject: "Social Studies",
      experience: "7 years",
      description: "Specialized in history, geography, and civics. Makes social sciences interesting and relevant to students.",
      color: "bg-pink-500"
    }
  ]

  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of experienced educators who are committed to your academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 ${member.color}`}></div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.subject}</p>
                  <p className="text-sm text-gray-500">{member.experience} Experience</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">14+</div>
              <div className="text-gray-600">Max Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Subjects Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Dedicated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faculty
