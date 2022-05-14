import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
apiKey: 'AIzaSyBMS7cnVMppKvjOKH1_XKsoEeUkYzepSags',
authDomain: 'veri-hot-burgers.firebaseapp.com',
projectId: "very-hot-burgers-16923",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

//apiKey: "AIzaSyD196cc31SvW-IH38h5QCTs_LMfnuhB_2w",
//authDomain: "very-hot-burgers-16923.firebaseapp.com",
//projectId: "very-hot-burgers-16923",
//storageBucket: "very-hot-burgers-16923.appspot.com",
//messagingSenderId: "107285252697",
//appId: "1:107285252697:web:79c6f452d91586b7c17f48"


//apiKey: "AIzaSyD5fsMjmXZN9GUMZIW3pp5kS8x4uP5BbHs",
//authDomain: "very-hot-burgers-3ef92.firebaseapp.com",
//projectId: "very-hot-burgers-3ef92",
//storageBucket: "very-hot-burgers-3ef92.appspot.com",
//messagingSenderId: "955259701102",
//appId: "1:955259701102:web:c9d16214caa0af1cf9a37f"