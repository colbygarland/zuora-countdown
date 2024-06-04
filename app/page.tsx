export default function Home() {
  const launchDate = new Date('2024-11-12')
  const today = new Date()
  const diffTime = launchDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return (
    <main className="grid min-h-screen flex-col place-items-center bg-gray-900 p-24 text-gray-200">
      <div className="grid grid-cols-2">
        <div className="">
          <img className="max-h-[500px] w-9/12" src="/owly-wing-raised-speaking.svg" alt="" />
        </div>
        <div className="">
          <h1 className="mb-12 text-5xl font-bold">How many days until Zuora launch?</h1>
          <h2 className="text-4xl text-white">{diffDays} days until 🚀</h2>
        </div>
      </div>
    </main>
  )
}
