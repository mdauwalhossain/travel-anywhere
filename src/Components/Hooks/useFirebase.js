import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react"
import { useHistory } from "react-router";
import initializeAuthentication from "../../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () =>{
   
    const [user, setUser] = useState({});
    const history = useHistory();
    const auth = getAuth();
   
    
    const signInUsingGoogle = (history, from) =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            history.push(from)
        })
    }
    console.log('start')
    // const emaill = (email, password) =>{
    //     console.log(email, password)
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user)
    //         history.push('/details')
            
    //     })
        console.log('end');
        
    // }
   
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }
// observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setUser(user)
             
            }
            else{
                setUser({})
            }
          });
    },[])

    return{
        user,
        signInUsingGoogle,
        logOut
        

    }

}

export default useFirebase;