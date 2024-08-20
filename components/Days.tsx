'use client'

const getDaysUntil = (date: string) => {
  const today = new Date()
  const d = new Date(date)
  const diffTime = d.getTime() - today.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export const Days = () => {
  const launchDays = getDaysUntil('2024-12-02')
  const devDoneDays = getDaysUntil('2024-10-31')
  return (
    <div className="mb-10">
      <h2 className="mb-4 text-4xl text-white">{launchDays} days until Phase 1 launch</h2>
      <h2 className="text-4xl text-white">{devDoneDays} days until Phase 1 dev complete</h2>
    </div>
  )
}
