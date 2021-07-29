
import './App.css';
// Components
import Menu from './Components/Menu';
import Heading from './Components/Heading';
import Story from './Components/Story';
import Resume from './Components/Resume';
import Penguins from './Components/Penguins';
import Wandering from './Components/Wandering';
import Footer from "./Components/Footer";
import Studies from './Components/Studies';
import Leescartoons from './Components/Leescartoons';
import Workingon from './Components/Workingon';



// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <div className="App">
    <Container fluid>
    <Menu />
      <Row>
        <Heading />
      </Row>
      <Row>
        <Col><Story /></Col>
      </Row>
      <Row>
      <Col><Workingon /></Col>
      </Row>
      <Row>
        <Col><Resume /></Col>
        <Col><Penguins /></Col>
        <Col><Wandering /></Col>
        <Col><Leescartoons /></Col>
      </Row>
      <Row>
        <Col>
          <Studies />
        </Col>
      </Row>
     <Footer /> 
    </Container>  

    </div>
  );
}

export default App;
