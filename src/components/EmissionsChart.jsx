const data = [
  { y: '2015', v: 36 }, { y: '2017', v: 37 }, { y: '2019', v: 38 },
  { y: '2020', v: 34 }, { y: '2022', v: 37.5 }, { y: '2024', v: 38.4 }, { y: '2026', v: 37.9 },
]

export default function EmissionsChart() {
  const max = 40
  return (
    <div className="chart">
      <svg width="300" height="180" viewBox="0 0 300 180">
        {data.map((d, i) => {
          const h = (d.v / max) * 140
          return (
            <g key={d.y}>
              <rect x={12 + i * 41} y={150 - h} width="28" height={h} fill={i === data.length - 1 ? '#e8a0a0' : '#c9d9e8'} />
              <text x={26 + i * 41} y="168" fontSize="9" textAnchor="middle" fill="#bbb">{d.y}</text>
            </g>
          )
        })}
      </svg>
      <div className="chart-legend">
        <span className="legend-swatch" style={{ background: '#c9d9e8' }} /> Histórico
        <span className="legend-swatch" style={{ background: '#e8a0a0' }} /> Previsión
      </div>
      <div className="chart-source">Fuente: elaboración propia</div>
    </div>
  )
}
