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
  guideList.innerHTML= window.location=' indexi.html';
}


}

//setup ui





document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  })