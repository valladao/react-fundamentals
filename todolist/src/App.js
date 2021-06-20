const elements = ["Elem. 1", "Elem. 2", "Elem. 3"]

function App() {
  return (
    <ul>
      {elements.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
}

export default App
