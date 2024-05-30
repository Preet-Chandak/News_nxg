import React from 'react';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import newsData from '../data/newsData.json';

const NewsSection = () => {
  return (
    <div className="max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 lg:flex lg:space-x-8">
      <main className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {newsData.map(news => (
            <NewsCard 
              key={news.id}
              author={news.author}
              date={news.date}
              title={news.title}
              description={news.description}
              imageUrl={news.imageUrl}
              tags={news.tags}
              readTime={news.readTime}
            />
          ))}
        </div>
      </main>
      <Sidebar />
    </div>
  );
};

export default NewsSection;
