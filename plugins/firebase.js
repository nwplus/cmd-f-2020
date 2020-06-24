import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBppAYPBZ6WxWdErM3smh6t9BEJPUM_NHU',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: 'nwhacks-2019-dev',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: 'G-CL002TYWPV',
    appId: '1:98283589440:web:523bfe26d5bf6bc85d34a5'
  }
  firebase.initializeApp(config)
}
const db = firebase.firestore()
const storage = firebase.storage()
const webCollection = 'Website_content'
const WebDocument = process.env.WEBSITE_NAME
firebase.analytics()

const fireDb = {
  get: async (collection = WebDocument) => {
    if (collection === WebDocument) {
      const ref = db.collection(webCollection).doc(WebDocument)
      const data = await ref.get()
      return data.data()
    }
    const ref = db
      .collection(webCollection)
      .doc(WebDocument)
      .collection(collection)
    return (await ref.get()).docs.map(doc => doc.data())
  },
  getImageUrl: async (imageref) => {
    try {
      const image = storage.ref(`${WebDocument}/${imageref}`)
      const url = await image.getDownloadURL()
      return url
    } catch (e) {
      return ''
    }
  },
  submitApplication: async (app) => {
    // Get a reference to the hacker collection
    const ref = db.collection('hacker_info_2020')
    // get a reference to the security collection (only holds emails)
    const secureRef = db.collection('hacker_email_2020')
    const doc = await secureRef.doc(app.email).get()
    if (doc.exists) return false
    await ref.doc(app.email).set(app)
    await secureRef.doc(app.email).set({ email: app.email })
    return true
  }
}

export default fireDb
