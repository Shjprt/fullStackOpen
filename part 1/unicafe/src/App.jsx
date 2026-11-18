import { useState } from "react"

const Statistics= (props) => { 
  if (props.good + props.neutral + props.bad === 0) 
    return (<p> No feedback given </p>)
  return (
    <table>
      <tbody>
      <Statisticline text="good" value={props.good} />
      <Statisticline text="neutral" value={props.neutral} />
      <Statisticline text="bad" value={props.bad} />
      <Statisticline text="all" value={props.good + props.neutral + props.bad} />
      <Statisticline text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad) || 0} />
      <Statisticline text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + ' %'}  />
      </tbody>
    </table>
  )}
  // reuseable components
  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

  const Statisticline = (props) => {
    return (
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
    )
  }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2> statistics </h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App