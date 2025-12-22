import React from 'react';

const BlogPage = () => (
  <div>
    <section className="bg-gradient-to-r from-[#044460] to-[#00b3ab] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Blog ACTE</h1>
        <p className="text-2xl">Actualités, conseils et inspiration</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-[#044460] to-[#00b3ab]"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#044460]">💡 Inspiration ACTE</h3>
              <p className="text-gray-600">Portraits et réussites de jeunes formés par ACTE</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-[#044460] to-[#00b3ab]"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-[#044460]">🧠 Culture digitale</h3>
              <p className="text-gray-600">Actualités tech, IA, data et transformation digitale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default BlogPage;
