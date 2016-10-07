
// Initialize Firebase
 /*var config = {
    piKey: "AIzaSyDSCXu8esxECHnAImamHddP4g28qpNIkd4",
    authDomain: "test-d3cea.firebaseapp.com",
    databaseURL: "https://test-d3cea.firebaseio.com",
    storageBucket: "test-d3cea.appspot.com", 
    messagingSenderId: "376630577028"
  };
  firebase.initializeApp(config);
        

// Get Elements //
const txtEmail = document.getElementById('txtEmail')
const txtPassword = document.getElementById('txtPassword')
const btnLogin = document.getElementById('btnLogin')

//add login event //
btnLogin.addEventListener('click',e =>{
  const email = txtEmail.value;
  const password = txtPassword;
  const auth = firebase.auth();

  //sign in //
      const promise = auth.singInWithEmailAndPassword(email,pasword);
      promise.catch(e => console.log(e.message));


})


