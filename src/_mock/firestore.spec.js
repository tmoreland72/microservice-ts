const firestore = require('./firestore')

describe('Test Mock Firestore', () => {
   test('getDocs returns array', () => {
      const response = firestore.getDocs({ collection: 'foo' })
      expect(Array.isArray(response)).toBe(true)
   })

   test('getDoc returns object', () => {
      const response = firestore.getDoc({
         collection: 'foo',
         id: 'a',
      })
      expect(response).toEqual({})
   })

   test('createDoc returns true', () => {
      const response = firestore.createDoc({
         collection: 'foo',
         doc: { name: 'h' },
      })
      expect(response).toBe(true)
   })

   test('updateDoc returns true', () => {
      const response = firestore.updateDoc({
         collection: 'foo',
         id: 'a',
         updates: { name: 'h' },
      })
      expect(response).toBe(true)
   })

   test('deleteDoc returns true', () => {
      const response = firestore.deleteDoc({
         collection: 'foo',
         id: 'a',
      })
      expect(response).toBe(true)
   })
})