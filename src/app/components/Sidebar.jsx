import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/3 p-4 lg:p-6 bg-gray-50">
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Recommended Topics</h3>
        <div className="flex flex-wrap">
          {['NLP', 'Economics', 'World', 'DevOps', 'Ethereum', 'Product Management', 'Data Visualization'].map((topic, index) => (
            <span key={index} className="px-3 py-1 mr-2 mb-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full transition-colors hover:bg-blue-200">
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <ul className="space-y-2">
          <li className="text-gray-800 hover:text-blue-600 transition-colors"><a href="#">Post 1</a></li>
          <li className="text-gray-800 hover:text-blue-600 transition-colors"><a href="#">Post 2</a></li>
          <li className="text-gray-800 hover:text-blue-600 transition-colors"><a href="#">Post 3</a></li>
          {/* Add more recent posts */}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap">
          {['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'MongoDB', 'Python'].map((tag, index) => (
            <span key={index} className="px-3 py-1 mr-2 mb-2 text-sm font-semibold text-green-700 bg-green-100 rounded-full transition-colors hover:bg-green-200">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Useful Links</h3>
        <ul className="space-y-2">
          <li className="text-gray-800 hover:text-blue-600 transition-colors"><a href="https://example.com">Example Website</a></li>
          <li className="text-gray-800 hover:text-blue-600 transition-colors"><a href="/about">About Us</a></li>
          {/* Add more useful links */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
