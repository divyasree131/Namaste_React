

const parent=React.createElement("parent",{id:"heading"},
[React.createElement("h1",{id:"heading1"},"I am h1 element"),
React.createElement("h2",{id:"heading2"},"I am h2 element")])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)