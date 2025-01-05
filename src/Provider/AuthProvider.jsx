import { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import toast, { Toaster } from 'react-hot-toast'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loding, setLoding] = useState(true)

  console.log(loding)

  // create new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signout previus signed user
  const logOut = () => {
    return signOut(auth, toast.success('succesfully signed up user'))
  }
  //update user profile
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser,updateData);

  }
  // longin availavle user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  //   Set an authentication state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoding(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loding,
    setUser,
    createNewUser,
    updateUserProfile,
    logOut,
    signInUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <Toaster></Toaster>
    </AuthContext.Provider>
  )
}

export default AuthProvider
