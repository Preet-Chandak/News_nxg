import React from 'react';
import slugify from 'slugify';

const NewsCard = ({ author, date, title, description, imageUrl, tags, readTime }) => {
  const slug = slugify(title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });
  
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <div className="w-full sm:w-1/3 aspect-w-4 aspect-h-3"> {/* Setting fixed aspect ratio */}
        <img src={imageUrl} alt={title} style={{ width: '100px', height: '100px' }} />
      </div>
      <div className="flex-grow p-4">
        <div className="flex items-center mb-2">
          <div className="text-sm font-medium text-gray-700">{author}</div>
          <div className="mx-2 text-gray-400">•</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
        <a href={`/${slug}`}><h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">{title}</h2></a>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 mr-2 mb-2 text-xs font-semibold text-blue-600 bg-blue-100 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span>{readTime} min read</span>
          <span className="mx-2">•</span>
          <span>Selected for you</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
