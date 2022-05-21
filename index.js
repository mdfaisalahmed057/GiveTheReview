const guideList=document.querySelector('.guides')
 const loggedOutLinks=document.querySelectorAll('.logged-out')
 const loggedInLinks=document.querySelectorAll('.logged-in')
 const  accountDetails=document.querySelector('.account-details')

const setupUI=(user)=>{
  if(user){
    db.collection('guides').doc(user.uid).get().then(()=>{
      const html=`
      <div>logged in as ${user.email}</div>
      `
       accountDetails.innerHTML=html
    })
    loggedOutLinks.forEach(item => item.style.display='none')
    loggedInLinks.forEach(item => item.style.display='block')
     // for hidding when user is logged out
  }else{
   accountDetails.innerHTML=''
   loggedInLinks.forEach(item=> item.style.display='none')
   loggedOutLinks.forEach(item=> item.style.display='block')   // for hidding when user is logged out
  }
}

const setUpGuides=(data)=>{
  if(data.length){
  let html=''
  data.forEach(doc=>{
      const guide=doc.data()
      let li=`
      <li>
      <div class="collapsible-header grey lighten-4">${guide.title}</div>
      <div class="collapsible-body white">${guide.content}</div>
      <div class="collapsible-body white">${guide.bcontent}</div>
      </li>
      `
      html+=li;
  
  });
  guideList.innerHTML=html
}else{
  guideList.innerHTML=  `
 <div class="flex-container"
 style=
 "display:flex;
 justify-content:space-between;
 flex-wrap:wrap;
 
  "
 >
 <div class="text"
 style="color: grey;
  font-family:Arial, Helvetica, sans-serif ;
  font-size: large; "
  
 >
  <h3>Join The Community</h3>
  <h3>of the student</h3>
  <button style="
  width:100px;
  height:40px;
  border:none;
  background-color:rgba(243, 243, 64, 0.932);
  border-radius:10px;
  font-size:large;
  font-weight:bold;
  color:grey;
  cursor:pointer;
   ">Join Now</button>
 </div>
 <div class="image">
  <img src="opinion.svg" style=" width: 400px;">
 
 </div>
 </div>

  `
}


}

//setup ui





document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  })