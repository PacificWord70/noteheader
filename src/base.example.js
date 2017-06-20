import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
        apiKey: "YOUR API KEY",
        authDomain: "YOUR DOMAIN.firebaseapp.com",
        databaseURL: "https://YOUR_URL.firebaseio.com",
        projectId: "YOUR PROJECT ID",
        storageBucket: "YOUR APP.appspot.com",
        messagingSenderId: "YOUR SENDER ID"
})

const db = databse(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

export default Rebase.createClass(db)