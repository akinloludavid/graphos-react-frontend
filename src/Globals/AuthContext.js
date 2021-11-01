import React, {createContext} from 'react'
import axios from 'axios'


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

  const signUp = (fname, lname, email, password) => {
    const userDetails = {
      firstname: fname,
      lastname: lname,
      email: email,
      password
    }
    const res =  axios.post('/api/signup', userDetails)
    localStorage.setItem("user", JSON.stringify(res.data.data))
  }

  const signIn = (email, password) => {
    const config = {
      'Content-Type': 'application/json'
    }
    const userDetails = {
      email, password
    }
    const res =  axios.post('/api/signin', userDetails, config);
    localStorage.setItem('user', JSON.stringify(res.data.data))
  }

  const googleSignIn = (userToken)=> {
    try {
      
      const config = {
        'Content-Type': 'application/json'
      }
      const res = axios.post("/google/signin", userToken, config);
      localStorage.setItem('user', res.data.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  const values ={
    signUp,
    signIn,
    googleSignIn
  }
  return (
    <AuthContext.Provider value ={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
