const head = document.querySelector('.header')
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    head.innerHTML=data
})


const nav = document.querySelector('.nav')
fetch('/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})


const foot = document.querySelector('.footer')
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    foot.innerHTML=data
})


/*let is_CEO = true
document.getElementById("CEO_BTN").onclick = function() {myFunction()};
      
function myFunction() {
    if(is_CEO == true){
        is_CEO = false
        
        document.getElementById("CEO_HD").innerHTML = "MD";
        document.getElementById("CEO_DES").innerHTML="Our Managing Director Eiichiro Oda has been a valuable asset to the team, he has great direction and dedication. He has been working on large scale projects for multiple years, he knows how to push forward and lead our team through any project.";
        document.getElementById("CEOimg").src="https://pbs.twimg.com/media/EfBD-KIUcAA47cC.jpg";
        document.getElementById("CEO_BTN").value="MD";
    }
    else{
        is_CEO = true;
        document.getElementById("CEO_HD").innerHTML = "CEO";
        document.getElementById("CEO_DES").innerHTML="Our CEO Eiichiro Oda has been a valuable asset to the team, he has great direction and dedication. He has been working on large scale projects for multiple years, he knows how to push forward and lead our team through any project.";
        document.getElementById("CEOimg").src="https://via.placeholder.com/750x500";
        document.getElementById("CEO_BTN").value="CEO";
    }

}

document.getElementById("Con_Heading").onmouseover = function() {myFunction1()};
function myFunction1(){        
    document.getElementById("Con_Heading").style="color:red; font-size:100px";
}*/

/*document.getElementById("Con_Heading").onclick=function(){click()};
        function click(){        
          document.getElementById("Con_Heading").style="color:red; font-size:100px";
        }
    
    */