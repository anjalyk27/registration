// const name = document.getElementsByClassName('first-name')
// const name = document.getElementsByClassName('last-name')
document.querySelector('.signup-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.fname.value);
    console.log(event.target.lname.value);
    console.log(event.target.db.value);
    console.log(event.target.gender.value);
    console.log(event.target.email.value);
    console.log(event.target.newpassword.value);
    console.log(event.target.repassword.value);
    
    
    



})
