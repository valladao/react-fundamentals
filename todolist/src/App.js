const data = {
  title: "A simple post...",
  date: "2021-06-20",
}

const BlogPost = (params) => {
  return (
    <div>
      <h1>{params.title}</h1>
      <p>{params.date}</p>
    </div>
  )
}

const Container = () => {
  return (
    <div>
      <BlogPost {...data} />
    </div>
  )
}

function App() {
  return <Container />
}

export default App
