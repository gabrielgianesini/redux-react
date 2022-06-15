import { useSelector } from "react-redux"
import { userSliceType } from "../redux/userSlice"


export function User(){
  const  {user}  = useSelector((state: {user: userSliceType}) => state.user)

  return(
    <div>
     <h1>User: {user}</h1>
    </div>
  )
}