import { initializeApp } from 'firebase/app';
	import { getFirestore} from 'firebase/firestore';
	
	const firebaseApp = initializeApp({
        apiKey: "AIzaSyBY5umYx1wji9xiW8krmJDOZXTBMX3Yixo",
        authDomain: "todo-222.firebaseapp.com",
        projectId: "todo-222",
        storageBucket: "todo-222.appspot.com",
        messagingSenderId: "319257497178",
        appId: "1:319257497178:web:8bc680ed5446a195cbd263",
        measurementId: "G-Y5XRKEZ3GV"
	});
	
	const db = getFirestore(firebaseApp);
	
	export { db };
