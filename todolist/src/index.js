import React from "react"
import ReactDOM from "react-dom"
//import App from "./App"
import reportWebVitals from "./reportWebVitals"

const rows = [{ text: "Text 1" }, { text: "Text 2" }, { text: "Text 3" }]

ReactDOM.render(
  <table>
    {rows.map((row, i) => {
      return <tr>{row.text}</tr>
    })}
  </table>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
