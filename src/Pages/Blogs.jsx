import React from 'react';
import blogData from '../Data/blog.json';
console.log(blogData);

const Blogs = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-20 bg-gray-50 rounded-lg">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">Latest From Blog</h2>
      <p className="max-w-md mx-auto text-gray-500 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolore.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {
          blogData.map((blog, index) => (
            <div key={index} className="bg-white overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <img src={blog.imageUrl} alt="" className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h6 className="text-lg font-bold text-gray-600">{blog.subtitle}</h6>
                <h4 className="text-sm font-semibold text-gray-800 mt-2">{blog.title}</h4>
                <p className="text-gray-400 mt-2">{blog.date}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Blogs;
