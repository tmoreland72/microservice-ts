const Adapter = require('./adapter')
const firestore = require('../_mock/firestore')

module.exports = class FirestoreAdapter extends Adapter {
   constructor() {
      super()
   }

   getDocs(props) {
      return firestore.getDocs(props)
   }

   getDoc(props) {
      return firestore.getDoc(props)
   }

   createDoc(props) {
      return firestore.createDoc(props)
   }

   updateDoc(props) {
      return firestore.updateDoc(props)
   }

   deleteDoc(props) {
      return firestore.deleteDoc(props)
   }
}
