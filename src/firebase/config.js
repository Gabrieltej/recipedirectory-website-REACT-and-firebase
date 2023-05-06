import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-8NxlQGnP3pbqMWhCBt_M8FvJM1ViloQ',
  authDomain: 'cooking-ninja-site-a4893.firebaseapp.com',
  projectId: 'cooking-ninja-site-a4893',
  storageBucket: 'cooking-ninja-site-a4893.appspot.com',
  messagingSenderId: '72088290918',
  appId: '1:72088290918:web:f8a3fd20df3452d77c8fa7',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
