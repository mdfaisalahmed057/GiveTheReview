// db.collection('guides').onSnapshot(snapshot=>{
//   setUpGuides(snapshot.docs)
// })
auth.onAuthStateChanged(user=>{
  if(user){
    db.collection('guides').onSnapshot(snapshot=>{
      setUpGuides(snapshot.docs)
      setupUI(user)
    },err=>{
      console.log(err.message)
    })
   }else{
    setupUI()
    setUpGuides([])
    
  }
})


const sign=document.querySelector('#signup-form')
sign.addEventListener('click',(e)=>{

  e.preventDefault()
  const email=sign['signup-email'].value;
  const password=sign['signup-password'].value;
  auth.createUserWithEmailAndPassword(email, password)

  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .then(()=>{
    const modal=document.querySelector('#modal-signup')
    M.Modal.getInstance(modal).close()
    sign.reset()
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    // ..
  });
})

//  /ADDING THE GUIDE INTO THE FIREBASE

const addguide=document.querySelector('#create-form')
addguide.addEventListener('submit',(e)=>{
  e.preventDefault()

  db.collection('guides').add({
    title:addguide['title'].value,
    content:addguide['content'].value,
    bcontent:addguide['bcontent'].value
  }).then(()=>{
    const modal=document.querySelector('#modal-create')
    M.Modal.getInstance(modal).close()
    addguide.reset()

  })
})
 
  //logout
  const logout=document.querySelector('#logout')
  logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
      console.log("user logout")

    })
    // console.log("user logout")
  })



//login form
const login=document.querySelector('#login-form')
login.addEventListener('click',(e)=>{
    e.preventDefault()

const email=login['login-email'].value;
const password=login['login-password'].value
auth.signInWithEmailAndPassword(email, password).then(cred=>{
    const modal=document.querySelector('#modal-login')
    M.Modal.getInstance(modal).close()
    login.reset()
})
});