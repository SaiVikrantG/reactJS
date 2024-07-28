import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {details} = props

  return (
    <div className="pieChart">
      <h1>Vaccination by gender</h1>
      <PieChart width={1400} height={400}>
        <Pie
          cx="50%"
          cy="40%"
          data={details}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="80%"
          dataKey="count"
        >
          <Cell name="Male" fill="#fecba6" />
          <Cell name="Female" fill="#b3d23f" />
          <Cell name="Others" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
