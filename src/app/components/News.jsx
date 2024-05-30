import React from 'react';

const News = () => {
  return (
    <section className="max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col">
          <div className="flex flex-grow">
            <div className="triangle"></div>
            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
              <div>
                <a href="#"
                   className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Reliable Schemas</a>
                <a href="#"
                   className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                  What Zombies Can Teach You About Food
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi
                  aperiam, amet cupiditate?
                </p>
              </div>
              <div>
                <a href="#"
                   className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                  More </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-grow">
            <div className="triangle"></div>
            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
              <div>
                <a href="#"
                   className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Client-based
                  Adoption</a>
                <a href="#"
                   className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                  Old School Art
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.
                </p>
              </div>
              <div>
                <a href="#"
                   className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                  More </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-grow">
            <div className="triangle"></div>
            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
              <div>
                <a href="#"
                   className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Intellectual
                  Capital</a>
                <a href="#"
                   className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                  5 Things To Do About Rain
                </a>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
                </p>
              </div>
              <div>
                <a href="#"
                   className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                  More </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
