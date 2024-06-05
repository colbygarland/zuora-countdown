import { Days } from '@/components/Days'

export default function Home() {
  return (
    <main className="grid min-h-screen flex-col place-items-center bg-gray-900 p-24 text-gray-200">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-2">
        <div className="">
          <img className="max-h-[500px] w-9/12" src="/owly-wing-raised-speaking.svg" alt="" />
        </div>
        <div className="">
          <h1 className="mb-12 text-5xl font-bold">How many days until Zuora launch?</h1>
          <Days />
        </div>
      </div>
    </main>
  )
}
