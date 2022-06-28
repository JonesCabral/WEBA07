import { collection, getDocs, onSnapshot, query, addDoc, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"

export default class FirebaseProfessorService {
    static unscribe = null

    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'professor'))
            .then((querySnapshot) => {
                let professors = []
                querySnapshot.forEach(
                    (doc) => {
                        const { name, university, degree } = doc.data()
                        professors.push({ _id: doc.id, name, university, degree })
                    }
                )
                callback(professors)
            })
            .catch((error) => console.log(error))
    }

  
    static create = (firestore, callback, data) => {
        addDoc(collection(firestore, 'professor'), data)
            .then(
                (doc) => {
                    console.log("CREATE:" + doc.id)
                    callback()
                }
            )
            .catch((error) => console.log(error))
    }


    static retrieve = async(firestore, callback, _id) => {

        const docRef = doc(firestore, "professor", _id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
           
            callback(docSnap.data())
        } else {
            console.log("No such document!");
        }
        
    }

   

    static update = (firestore,callback,_id,body) => {
        const docRef = doc(firestore, "professor", _id);
        updateDoc(docRef,body)
        .then(
            ()=>{
                callback()
            }
        )
        .catch((error)=>console.log(error))
    }
    
    static delete = (firestore,callback,_id) => {
        const docRef = doc(firestore, "professor", _id);
        deleteDoc(docRef)
        .then(
            ()=>{
                callback()
            }
        )
        .catch((error)=>console.log(error))
    }
}