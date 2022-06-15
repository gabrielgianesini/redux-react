import { Container } from "react-bootstrap";
import { Login } from "./components/Login"
import { User } from "./components/User";
import { Logout } from "./components/Logout";


function App() {

  return (
    <div className="App">
      <Container>
        <Login />
        <br />
        <User />
        <br />
        <Logout />
      </Container>
    </div>
  )
}

export default App
