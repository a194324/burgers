import React from "react";
import {render} from "react-dom";
import Router from './components/Router';
import './css/style.css';

render (<Router/>,document.querySelector('#root'));


//const firebaseConfig = {
   //apiKey: "AIzaSyBMS7cnVMppKvjOKH1_XKsoEeUkYzepSag",
   //authDomain: "veri-hot-burgers.firebaseapp.com",
   //projectId: "veri-hot-burgers",
   //storageBucket: "veri-hot-burgers.appspot.com",
   //messagingSenderId: "864752214319",
   //appId: "1:864752214319:web:4eaceb3dbb366c556301da"
//};
//
//  Initialize Firebase
////const app = initializeApp(firebaseConfig);