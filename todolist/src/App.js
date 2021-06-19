import "./App.css"

const Button = (props) => {
  return <button>{props.text}</button>
}

const SubmitButton = () => {
  return <Button text="Submit" />
}

const LoginButton = () => {
  return <Button text="Login" />
}

function App() {
  return (
    <div>
      <SubmitButton />
      <LoginButton />
    </div>
  )
}

export default App
