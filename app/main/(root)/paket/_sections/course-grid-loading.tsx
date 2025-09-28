export default function CourseGridLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-8 lg:px-12 my-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse h-48 bg-gray-200 rounded-lg"></div>
      ))}
    </div>
  )
}