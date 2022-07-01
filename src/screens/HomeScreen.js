import React, { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button, Col, Container, Row } from "react-bootstrap"
import { logout } from "../actions/userActions"

const HomeScreen = () => {
  const loginUser = useSelector((state) => state.loginUser)
  const { userInfo } = loginUser

  const navigate = useNavigate()
  const dispatch=useDispatch()

  useEffect(() => {
    if (!userInfo) {
      navigate("/login")
    }
  }, [userInfo, navigate])

  const logoutHandler=(e)=>{    
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <Container>
      <Row>
        {userInfo &&
         <Col>
          <h1>{userInfo.name}</h1>
          <h4>{userInfo.address}</h4>
        </Col>}
        <Col>
        <Button onClick={logoutHandler} className="btn btn-dark" type="submit">Log Out</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen
