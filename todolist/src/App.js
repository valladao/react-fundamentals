import "./App.css"

const Button = (props) => {
  return <button onClick={props.onClickHandler}>{props.text}</button>
}

const LoginButton = (props) => {
  return <Button text="Login" onClickHandler={props.onClickHandler} />
}

const Container = () => {
  const onClickHandler = () => {
    alert("clicked")
  }

  return <LoginButton onClickHandler={onClickHandler} />
}

function App() {
  return <Container />
}

export default App
