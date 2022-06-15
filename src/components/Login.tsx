import {useRef, useState} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeUser } from '../redux/userSlice'


export function Login(){
  const [username, setUsername] = useState('')
 // const userNameRef = useRef<HTMLInputElement | null>(null)
  const dispatch = useDispatch()

  function handleLogin(){
    //console.log(userNameRef.current?.value)
    //console.log(username)
    dispatch(changeUser(username))
  }

  return(
    <Form>
      <h1 className="mt-5">Login</h1>
      <Row className="align-items-center">
        <Col sm={6} className="my-1">
          {/* <input type="text" ref={userNameRef}/> */}
         <Form.Control type="text"  onChange={(e)=> setUsername(e.target.value)} />
        </Col>
        <Col>
          <Button onClick={handleLogin}>Login</Button>
        </Col>
      </Row>
    </Form>
  )
}