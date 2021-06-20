//const autoescape = <p>&copy; A paragraph</p>

const AutoEscape = () => {
  return (
    <p>
      {
        // I want to create comments here
      }
      Something becomes this
      {/* Also here... */}
    </p>
  )
}

function App() {
  return <AutoEscape />
}

export default App
