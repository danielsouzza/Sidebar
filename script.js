const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text")

modeSwitch.addEventListener("click",()=>{
  body.classList.toggle("dark")

    if(body.classList.contains("dark")){
      modeText.innerText = "Light Mode"
    }else{
      modeText.innerText = "Dark Mode"
    }
})

toggle.addEventListener("click",()=>{ 
  sidebar.classList.toggle("closed")
  console.log(text)
})

searchBtn.addEventListener("click",()=>{
  sidebar.classList.remove("closed")
})



function loadcontent(filename){
  let xhttp;
  let element = document.getElementById('content')
  let file = filename

  if(file){
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4){
        if(this.status == 200){
          element.innerHTML =  this.responseText

        }
        if(this.status == 404){
          element.innerHtml = "<h1> Page not found.</h1>"
        }
      }
    } 
    xhttp.open("GET",`tamplates/${file}`,true)
    xhttp.send()

    
    return;
  }
}

loadcontent("dashboard.html")