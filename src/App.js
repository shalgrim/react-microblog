import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Posts from "./components/Posts";
import Body from "./components/Body";

export default function App() {
  return (
      <Container fluid className="App">
        <Header/>
        <Container>
          <Body sidebar>
            <Posts />
          </Body>
        </Container>
      </Container>
  );
}
