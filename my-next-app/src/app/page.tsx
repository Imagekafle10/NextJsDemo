import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Manage Your Contacts Easily
            </h2>
            <p className="text-gray-600 mb-6">
              Store, organize, and access your contacts anytime, anywhere.
            </p>

            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <Image
              src="/contact.jpg"
              alt="contact manager"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">Add Contacts</h4>
            <p className="text-gray-600">
              Easily add and store all your important contacts in one place.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">Search & Filter</h4>
            <p className="text-gray-600">
              Quickly find contacts using smart search and filters.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">Secure Storage</h4>
            <p className="text-gray-600">
              Your data is सुरक्षित and accessible anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2026 ContactManager. All rights reserved.
      </footer>
    </div>
  );
}
