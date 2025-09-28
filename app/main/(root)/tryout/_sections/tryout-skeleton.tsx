
export default function TryoutSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-8 lg:px-12 my-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-sm border p-6">
          <div className="w-full h-32 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  )
}