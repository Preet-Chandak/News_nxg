import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/3 p-4">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Recommended topics</h3>
        <div className="flex flex-wrap">
          {['NLP', 'Economics', 'World', 'DevOps', 'Ethereum', 'Product Management', 'Data Visualization'].map((topic, index) => (
            <span key={index} className="px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Recent Posts</h3>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
          {/* Add more recent posts */}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Popular Tags</h3>
        <div className="flex flex-wrap">
          {['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'MongoDB', 'Python'].map((tag, index) => (
            <span key={index} className="px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Useful Links</h3>
        <ul>
          <li><a href="https://example.com">Example Website</a></li>
          <li><a href="/about">About Us</a></li>
          {/* Add more useful links */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
