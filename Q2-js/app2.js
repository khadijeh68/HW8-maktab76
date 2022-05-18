function userInfo(){ 
   let userName = document.getElementById('Username').value;
   let passWord = document.getElementById('Password').value;
 
    localStorage.setItem(userName,passWord); 
}


