import initializationAuthentication from "../Firebase/Firebase.init";
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";



initializationAuthentication();

const useFirebase=()=>{
    const [user,setUser] = useState({})
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [error,setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    

    //handleGoogleSignIn
    const handleGoogleSignIn =()=>{
       setIsLoading(true);
      return signInWithPopup(auth,googleProvider)
        
        .catch((error) => {
          const errorMessage = error.message;
        setError(errorMessage);
        })
        .finally(() => setIsLoading(false));
        

    }
    

    //Create new user or Register
    const handleEmail =(e)=>{
        setEmail(e.target.value)

    }
    const handleName =(e)=>{
        setName(e.target.value)

    }
    const handlePassword=(e)=>{
    setPassword(e.target.value)
    }
    //update user name
    const handleUserName =()=>{
      updateProfile(auth.currentUser, {
        displayName:name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        const errorMessage = error.message;
      setError(errorMessage);
      });
    }

   const handleSignup=()=>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      handleUserName();
      const user = result.user
      setUser(user)
    })
    .catch((error) => {
      const errorMessage = error.message;
    setError(errorMessage);
    })
    .finally(() => setIsLoading(false));

   }

   //handle user login

   const handleLogin=()=>{
    setIsLoading(true);
   return signInWithEmailAndPassword(auth, email, password)
   
    .catch((error) => {
      const errorMessage = error.message;
    setError(errorMessage);
    })
    .finally(() => setIsLoading(false));
   }
    

    //observe user state change
    useEffect(()=>{
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {     
            setUser(user) 
             
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    },[]);

    //logout handle
   const logout=()=>{

    signOut(auth)
    .then(() => {
      setIsLoading(true)
        setUser({})
      })
      .catch((error) => {
        const errorMessage = error.message;
      setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
   }


    return{
        user,
        isLoading,
        error,
        handleGoogleSignIn,
        logout,
        handleEmail,
        handlePassword,
        handleSignup,
        handleLogin,
        handleName,
    }
 


}
export default useFirebase;