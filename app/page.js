'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Section = ({ children, className }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`py-20 ${className}`}
  >
    {children}
  </motion.section>
)

const PricingPlan = ({ title, price, features, recommended }) => (
  <div className={`bg-white p-8 rounded-lg shadow-xl ${recommended ? 'border-4 border-blue-500' : ''}`}>
    {recommended && <div className="bg-blue-500 text-white py-1 px-4 rounded-full inline-block mb-4">Recommended</div>}
    <h3 className="text-2xl font-playfair font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-lg font-normal">/month</span></p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 rounded-lg transition duration-300 ${recommended ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
      Choose Plan
    </button>
  </div>
)

export default function Home() {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div className="bg-gray-100 font-lato">
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">Scripture Spark</h1>
          <p className="text-2xl md:text-3xl italic mb-8">"Your word is a lamp for my feet, a light on my path." - Psalm 119:105</p>
          <p className="text-xl mb-8">Ignite your Bible study with AI-powered flashcards</p>
          <Link href="/register" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300">
            Start Your Journey
          </Link>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Why Choose Scripture Spark?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-playfair font-bold mb-4">AI-Powered Learning</h3>
              <p>Our advanced AI technology generates personalized flashcards tailored to your learning style and progress, ensuring an efficient and effective Bible study experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-playfair font-bold mb-4">Comprehensive Coverage</h3>
              <p>From individual verses to entire chapters and themes, Scripture Spark covers a wide range of biblical topics, helping you gain a deeper understanding of God's Word.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-playfair font-bold mb-4">Progress Tracking</h3>
              <p>Monitor your learning journey with detailed analytics and progress reports. Set goals, track your achievements, and stay motivated in your spiritual growth.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingPlan
              title="Basic"
              price={9.99}
              features={[
                "100 AI-generated flashcards/month",
                "Basic progress tracking",
                "5 custom decks",
                "Email support"
              ]}
            />
            <PricingPlan
              title="Pro"
              price={19.99}
              features={[
                "Unlimited AI-generated flashcards",
                "Advanced progress analytics",
                "Unlimited custom decks",
                "Priority support",
                "Verse audio pronunciation"
              ]}
              recommended={true}
            />
            <PricingPlan
              title="Church"
              price={49.99}
              features={[
                "Everything in Pro plan",
                "Up to 50 user accounts",
                "Group study features",
                "Custom branding",
                "Dedicated account manager"
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How does Scripture Spark work?", a: "Scripture Spark uses advanced AI to generate personalized flashcards based on Bible passages. You can study these cards, create your own, and track your progress over time." },
              { q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period." },
              { q: "What Bible translations are available?", a: "We currently support major English translations like NIV, ESV, KJV, and NKJV. We're working on adding more translations and languages in the future." },
              { q: "Is there a mobile app available?", a: "Yes, Scripture Spark is available as a web app and native mobile apps for both iOS and Android devices, allowing you to study on the go." },
              { q: "Can I share my progress with others?", a: "Absolutely! You can share your progress, favorite verses, and study streaks on social media or with friends directly through the app." }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                >
                  <h3 className="text-xl font-bold">{faq.q}</h3>
                </button>
                {activeTab === index && (
                  <div className="px-6 pb-6">
                    <p>{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold mb-4">Ready to Spark Your Bible Study?</h2>
          <p className="text-xl mb-8">Join thousands of believers enhancing their Scripture knowledge with Scripture Spark.</p>
          <Link href="/register" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300">
            Start Your Free Trial
          </Link>
        </div>
      </Section>
    </div>
  )
}
