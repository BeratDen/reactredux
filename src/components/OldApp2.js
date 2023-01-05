import { Fragment, useState } from "react";
import "./css/tailwind.css";
import Button from "./components/Button";
import Tab from "./components/Tab";
import Test from "./Home/Test";
import UseRef from "./components/UseRef";

function App() {
  const todos = ["todo1", "todo2", "todo3"];

  const [activeTab, setActiveTab] = useState(1);

  /*const h1 = createElement("h1", null, "Berat");
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => createElement("li", null, todo))
  );
  return createElement(
    "main",
    {
      className: "test",
      id: 1,
    },
    h1,
    ul
  );*/

  const [show, stateShow] = useState(false);

  return (
    <Fragment>
      <div style={{ padding: 20 }}>
        <Button onClick={() => setActiveTab(2)}>Aktif Tabı Değiştir</Button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profil">1. tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
        </Tab>
      </div>
      <div style={{ padding: 20 }}>
        <Button>Button Örneği</Button>
        <Button variant="success">Children</Button>
        <Button variant="danger">Test</Button>
        <Button variant="warning">Test 2</Button>
      </div>
      <h1>berat</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => stateShow((show) => !show)}>
        {show ? "gizle" : "göster"}
      </button>
      {show && <Test></Test>}
      <div className="mt-10"></div>

      <UseRef></UseRef>
      <div className="mb-10"></div>
    </Fragment>
  );
}

export default App;
