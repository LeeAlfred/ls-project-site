
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
import Image from 'react-bootstrap/Image';



function App() {
  return (
    <div className="App">
    <Container fluid>
    <Menu />
      <Row style={{backgroundColor: "#DAD5AB"}}>
        <Col><Heading /></Col>
 
      </Row>
      <Row style={{backgroundColor: "#FFF"}}>
        
        <Col> <Image  className="story-picture" src="https://s6.gifyu.com/images/10.webp" alt="10" border="0"/></Col>
        <Col><Story /></Col>
      </Row>
      <Row>
      
      </Row>
      <Row style={{backgroundColor: '#FFF'}}>
        <Col><Resume /></Col>
        <Col><Penguins /></Col>
        <Col><Wandering /></Col>
        <Col><Leescartoons /></Col>
      </Row>
      <Row >
      <Col><Studies /></Col>
      <Col><Workingon /></Col>
      </Row>
     <Footer /> 
    </Container>  

    </div>
  );
}

export default App;
