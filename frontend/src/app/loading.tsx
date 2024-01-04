export default async function Loading() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-screen-lg py-16 px-2.5 md:px-20">
        {[...Array(4).keys()].map((i) => (
          <div key={i}>
            <div className="flex justify-between px-4 animate-pulse">
              <div className="w-28 h-6 rounded-full bg-gray-500 mb-2.5"></div>
              <div className="bg-gray-500 h-10 w-16 sm:w-44 rounded-xl"></div>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 px-4 md:px-0 md:gap-2">
              {[...Array(4).keys()].map((i) => (
                <li className="inline-block" key={i}>
                  <div className="flex">
                    <div className="flex flex-col justify-between h-36 max-w-40 w-[calc(100%-40px)] bg-gray-600 rounded-2xl py-4 animate-pulse mb-8">
                      <div className="px-4">
                        <div className="w-4/5 h-4 rounded-full bg-gray-500 mb-2.5"></div>
                        <div className="w-2/4 h-2.5 bg-gray-500 rounded-full"></div>
                      </div>
                      <div className="h-6 bg-gray-500"></div>
                    </div>
                    <div className="inline-block flex-shrink-0 h-8 w-10 p-1"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
