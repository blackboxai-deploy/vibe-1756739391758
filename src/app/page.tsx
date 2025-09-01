export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent animate-pulse">
            Hello World!
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 font-light max-w-md mx-auto">
            Welcome to your new Next.js application
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="bg-yellow-100/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-yellow-200/50">
            <span className="text-sm font-medium text-amber-800">Built with Next.js</span>
          </div>
          <div className="bg-yellow-100/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-yellow-200/50">
            <span className="text-sm font-medium text-amber-800">Styled with Tailwind</span>
          </div>
        </div>
        
        <div className="pt-8">
          <div className="inline-block animate-bounce">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </main>
  )
}