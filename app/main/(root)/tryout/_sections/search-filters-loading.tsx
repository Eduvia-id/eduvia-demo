export default function SearchFiltersLoading() {
  return (
    <div className="my-8 px-6 sm:px-8 lg:px-12">
      <div className="animate-pulse flex flex-col sm:flex-row gap-4">
        <div className="flex-1 h-10 bg-gray-200 rounded-full"></div>
        <div className="flex space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-10 w-20 bg-gray-200 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  )
}