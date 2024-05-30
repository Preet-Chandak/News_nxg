import React from 'react';
import slugify from 'slugify';

const NewsCard = ({ author, date, title, description, imageUrl, tags, readTime }) => {
  const slug = slugify(title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });

  return (
    <div className="flex flex-col lg:flex-row border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="w-full lg:w-1/3 h-48 lg:h-auto overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow p-4 lg:p-6">
        <div className="flex items-center mb-2">
          <div className="text-sm font-medium text-gray-700">{author}</div>
          <div className="mx-2 text-gray-400">•</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
        <a href={`/${slug}`} className="block">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{title}</h2>
        </a>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 mr-2 mb-2 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
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
