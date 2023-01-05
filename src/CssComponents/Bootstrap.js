import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tabs, Tab } from "react-bootstrap";

function Bootstrap() {
  return (
    <div>
      <h3>Bootstrap Komponentleri</h3>
      <Button variant="success">Test</Button>
      <Tabs defaultActiveKey="profile" id="tab-example" className="">
        <Tab eventKey="home" title="Home">
          Home
        </Tab>
        <Tab eventKey="test" title="test">
          Test
        </Tab>
      </Tabs>
    </div>
  );
}
export default Bootstrap;
