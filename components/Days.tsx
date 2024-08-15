'use client'

export const Days = () => {
  const launchDate = new Date('2024-12-02')
  const today = new Date()
  const diffTime = launchDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return <h2 className="text-4xl text-white">{diffDays} days until Phase 1 launch</h2>
}
