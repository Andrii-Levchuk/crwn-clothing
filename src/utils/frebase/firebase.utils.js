

import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAoVD8VJBTSozdx6lo2mrgX5vAW6U78Ycg',
	authDomain: 'crwn-clothing-4bd3b.firebaseapp.com',
	projectId: 'crwn-clothing-4bd3b',
	storageBucket: 'crwn-clothing-4bd3b.appspot.com',
	messagingSenderId: '564843586224',
	appId: '1:564843586224:web:710913acc0293a41a6d175',
}

// Initialize Firebase
const firebasApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
	if(!userAuth) return

	const userDocRef = doc(db, 'users', userAuth.uid)
	console.log(userDocRef)

	const userSnapshot = await getDoc(userDocRef)
	// if user data exists
	if (!userSnapshot.exists()) {
		// if useer does not exist
		// create / set document with the data from UserAuth in my collections
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation
			})
		} catch (error) {
			console.log('Error creating the user', error.message)
		}
	}

	// return useDocRef

	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return
	return await createUserWithEmailAndPassword(auth,email,password)
}