import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set ,onValue } from "firebase/database";
import app from "./firebase_config";


const auth = getAuth(app);
const database = getDatabase(app);

let signUpUser=(obj)=>{

    return  createUserWithEmailAndPassword(auth, obj.email, obj.password)
}



let insertDataDatabase = (node,obj,id) =>{

const Reff = ref(database,`${node}/${id ? id : '' }`)    
     return set(Reff,obj);
}


let getData = (node,id) =>{
const data = [];
 onValue(ref(database,`${node}/${id ? id : '' }`), (snapshot) => {

//   const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
snapshot.forEach((snap) => {
    data.push(snap.val());
})

return data;

}, {
  onlyOnce: false
});
}


export {signUpUser , insertDataDatabase , getData};