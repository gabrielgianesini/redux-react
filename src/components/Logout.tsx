
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/userSlice'

export function Logout(){
  const dispatch = useDispatch()

  function hadleLogout(){
    dispatch(logout())
  }
  return(
    <div>
      <Button onClick={hadleLogout}>Logout</Button>
    </div>
  )
}