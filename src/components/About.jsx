import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen container mx-auto px-4 md:px-20 pt-28">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-center">
            About <span className="text-pink-500">BookStore</span>
          </h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300">
            Your friendly neighborhood bookstore, now online.
          </p>

          <div className="space-y-6 text-lg leading-relaxed">
            <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-3 text-pink-500">Our Mission</h2>
              <p>
                At BookStore, our mission is to foster a universal passion for reading by making books accessible and affordable for everyone. We believe in the power of stories to connect people, expand minds, and build a better world. We are committed to curating a diverse collection that reflects a multitude of voices and experiences.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-3 text-pink-500">Our Story</h2>
              <p>
                Founded in 2024, BookStore started as a small passion project to share our love for literature. What began as a simple online platform has grown into a vibrant community of readers and learners. We've built this space not just to sell books, but to create a hub where knowledge is celebrated, and new ideas can flourish.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm dark:border-gray-700">
              <h2 className="text-2xl font-semibold mb-3 text-pink-500">Our Collection</h2>
              <p>
                From timeless classics to the latest bestsellers, our shelves are stocked with a wide array of genres. We offer both free and premium courses to supplement your learning journey, providing resources that go beyond the page. Every book is carefully selected to ensure it offers value, inspiration, or pure entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;