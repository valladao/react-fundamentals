import "./App.css"

const CurrentSwitcher = (props) => {
  return (
    <button onClick={props.handleChangeCurrency}>
      Current currency is {props.currency}. Change it!
    </button>
  )
}

function App() {
  const changeCurrency = () => {
    alert("Changing currency...")
  }

  return (
    <CurrentSwitcher currency="BRL" handleChangeCurrency={changeCurrency} />
  )
}

export default App
