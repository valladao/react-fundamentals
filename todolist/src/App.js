import "./App.css"

const Link = (props) => {
  return (
    <p>
      <a href={props.link}>{props.title}</a>
    </p>
  )
}

const Sidebar = (props) => {
  return <aside>{props.children}</aside>
}

const Container = () => {
  return (
    <Sidebar>
      <Link title="First link" link="/first" />
      <Link title="Second link" link="/second" />
    </Sidebar>
  )
}

function App() {
  return <Container />
}

export default App
