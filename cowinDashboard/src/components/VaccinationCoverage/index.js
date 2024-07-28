import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const Coverage = props => {
  const {details} = props
  const formattedData = details.map(each => ({
    vaccineDate: each.vaccine_date,
    dose1: each.dose_1,
    dose2: each.dose_2,
  }))

  const DataFormatter = number => {
    if (number < 1000) {
      return `${number.toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="barChart">
      <h1>Vaccination Coverage</h1>
      <BarChart
        width={1400}
        height={400}
        data={formattedData}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill="#fd7f0e" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default Coverage
