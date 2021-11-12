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
    const [admin,setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    

    //handleGoogleSignIn
    const handleGoogleSignIn =(location,history)=>{
       setIsLoading(true);
      // return signInWithPopup(auth,googleProvider)
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email,user.displayName,'PUT')
        
        const destination = location?.state?.from || '/'
        history.replace(destination);
    
        
      })
      
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
      }).catch((error) => {
        const errorMessage = error.message;
      setError(errorMessage);
      });
    } 

   const handleSignup=(history,location)=>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      handleUserName(); 
      const user = result.user
      setUser(user);
      const destination = location?.state?.from || '/'
      history.replace(destination)
      //save customer info datbase
      saveUser(user.email,name,'POST');
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
   };

   //dataload for check admin or not

   useEffect(()=>{
     fetch(`https://peaceful-reef-33113.herokuapp.com/users/${user.email}`)
     .then(res=>res.json())
     .then(data =>setAdmin(data.admin))
      
   },[user.email])

   //save user in database

   const saveUser = (email,displayName,method)=>{
     const user = {email,displayName}
     fetch('https://peaceful-reef-33113.herokuapp.com/users',{
       method:method,
       headers:{
         'content-type':'application/json'
       },
       body:JSON.stringify(user)
     })
     .then(res=>res.json())
     .then()
   };
   


    return{
        user,
        isLoading,
        error,
        admin,
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