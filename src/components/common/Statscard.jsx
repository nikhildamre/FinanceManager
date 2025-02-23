// src/components/common/StatsCard.jsx
export default function StatsCard({ title, value }) {
  return (
    <div className="card p-3 mb-3">
      <h3>{title}</h3>
      <p>${value}</p>
    </div>
  )
}