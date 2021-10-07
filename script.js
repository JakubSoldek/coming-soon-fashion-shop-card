
const inputForm = document.querySelector(".input");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email) => emailRegex.test(email);

inputForm.onsubmit = (e) => {
  e.preventDefault();
  const userEmail = e.target.email.value;
  if (userEmail && validateEmail(userEmail)) {
    e.target.classList.remove("error");
    window.location.reload();
    console.log(userEmail);
    
    
  } else {
    // console.log(userEmail);
    e.target.classList.add("error");
    

  }
  
};