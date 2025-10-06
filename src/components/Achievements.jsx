import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Perfect Scores",
      description: "Since 2015, over 30 of our students have achieved a perfect 100/100 in subjects like Maths, Science, and Arabic in the SSC Board Exams—demonstrating the highest standards of academic excellence.",
      highlight: "30+ Students",
      subtext: "Perfect 100/100 Scores"
    },
    {
      icon: "📖",
      title: "Successful Careers",
      description: "Many of our past students are now pursuing prestigious careers in MBBS, BHMS, BUMS, BDS, BAMS, and Engineering, a testament to the expert guidance and unwavering support they received at our institute.",
      highlight: "Prestigious Careers",
      subtext: "MBBS, Engineering & More"
    },
    {
      icon: "🌟",
      title: "Proven Excellence",
      description: "With a proven track record of outstanding results, we are dedicated to nurturing your child's potential, helping them achieve both academic brilliance and a successful future.",
      highlight: "Outstanding Results",
      subtext: "Since 2015"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Our Proud Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating years of academic excellence and student success stories that speak volumes about our commitment to quality education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Icon and Highlight */}
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{achievement.icon}</div>
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                    {achievement.highlight}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-500">{achievement.subtext}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-center">
                  {achievement.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-indigo-100 rounded-full opacity-50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">9+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
              <div className="text-sm text-gray-500">Since 2015</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">30+</div>
              <div className="text-gray-600 font-medium">Perfect Scores</div>
              <div className="text-sm text-gray-500">100/100 Achievements</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">1000+</div>
              <div className="text-gray-600 font-medium">Students Taught</div>
              <div className="text-sm text-gray-500">Successful Careers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-600">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
              <div className="text-sm text-gray-500">Board Exam Results</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Story?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Be part of our legacy of excellence. Let us help your child achieve their academic dreams and build a successful future.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
