import React from 'react'
import { TestCategory } from '../page';

export default function CategoryProgress({ categories }: { categories: TestCategory[] }) {
  return (
    <section className="px-6 sm:px-8 lg:px-12 my-6">
      <h3 className="text-xl font-semibold mb-4">Detail Skor Anda</h3>
      <div className="space-y-4 py-4 px-6 bg-white rounded-2xl shadow-lg">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-md font-medium text-gray-900">{category.name}</span>
              <span className="text-md space-x-2 font-medium">
                <span className="text-sapphire-normal">{category.percentage}%</span>
                <span className="text-gray-900">-</span>
                <span className="text-salmon-normal">{category.score}</span>
              </span>
            </div>
            <div className="w-full rounded-full h-4">
              <div
                className="bg-sapphire-normal h-4 rounded-full transition-all duration-300"
                style={{ width: `${category.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
