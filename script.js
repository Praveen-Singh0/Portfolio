var x = window.matchMedia("(max-width: 700px)")
myFunction(x);
x.addListener(myFunction);
function myFunction(x) {
  if (x.matches) { // If media query matches
    



    document.querySelector(".education").style.cssText = `opacity:1; margin: 20px 15%;`;
    document.querySelector(".education1").style.cssText = `opacity:1; margin: 15px 15%;`;

    document.querySelector(".skl").style.opacity = 1;
    document.querySelector(".skl").style.padding = "20px"

    document.querySelector(".repos").style.opacity = "1";
    document.querySelector(".frm").style.marginRight = "0px";


  } else {

    window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if ( document.documentElement.scrollTop > 50) {

        document.getElementById("profile").style.opacity = 1;
        document.getElementById("profile").style.marginRight =  "13rem"; 
    
  } else {
    document.getElementById("profile").style.marginRight =  "0rem"; 
    document.getElementById("profile").style.opacity = 0;

  }

  if ( document.documentElement.scrollTop > 200){

    document.querySelector(".education").style.cssText = `opacity:1; margin: 20px 15%;`;
    document.querySelector(".education1").style.cssText = `opacity:1; margin: 15px 15%;`;


  } else{
    document.querySelector(".education").style.cssText = `opacity: 0; margin:115 15%`;
    document.querySelector(".education1").style.opacity = 0;

  }

  if(document.documentElement.scrollTop > 600){
    document.querySelector(".skl").style.opacity = 1;
    document.querySelector(".skl").style.padding = "20px"
  }else{
    document.querySelector(".skl").style.paddingTop = "200px"
    document.querySelector(".skl").style.opacity = 0;

  }

  if(document.documentElement.scrollTop > 1000){
    document.querySelector(".repos").style.opacity = "1";
  }else{
    document.querySelector(".repos").style.opacity = "0";

  }

  if(document.documentElement.scrollTop > 1600){
    document.querySelector(".frm").style.marginRight = "0px";
  }else{
    document.querySelector(".frm").style.marginRight = "300px";

  }

}
   
  }
}

//*****************************************8 */

const apiURL = "https://api.github.com/users/";



const main = document.querySelector('.repos');


getUser("PraveenSingh001");


// //************ */

async function getUser(username){
  const resp = await fetch(apiURL + username);
  const respData = await resp.json();
  
  createUserCard(respData);

  getRepo(username);

  // console.log(respData);
}

async function getRepo(username){
    const resp = await fetch(apiURL + username + "/repos");
    const respData = await resp.json();
      
      getRepocard(respData);
    }


function createUserCard(username){
  
  const {avatar_url, login, bio, public_repos, followers, following, repos_url, html_url} = username;
    
   main.innerHTML = `
   <h4 style="font-size: 32px; margin: 10px"><i class="fa-brands fa-js"></i> Projects</h4>
        <p style="font-size: 15px; width: 100%; text-align: center; margin-top: 0; color: rgb(0, 0, 0);">Development is the way you can understand how to build something and face real challenges</p>
 
  
  <div class="repo"></div>`;
}

//**************************** */

function getRepocard(repos){

  repos.forEach((repo)=>{

    const userIMG = `https://api.github.com/repos/PraveenSingh001/${repo.name}/contents/`;

    async function userimg(){
      const resp1 = await fetch(userIMG);
      const respData1 = await resp1.json();
      imgDisplay(respData1);
    
    }
    userimg();

    function imgDisplay(data1){ 
      const reposEl = document.querySelector(".repos");
      const repoEl = document.createElement('div');
      repoEl.innerHTML = `<div class="column">
      <img src="${data1[0].download_url}">
      <div>${repo.name}<a href="https://github.com/Praveen-Singh0/${repo.name}" target= "_blank" id="btn" >Git-Code</a></div> 
      </div>`;
    
      reposEl.appendChild(repoEl);
      
      const click = document.getElementById("btn");
      click.addEventListener("click", ()=>{

       if(repo.name == "Password-Generator"){

      }
      })
  
      
    }
    
  });

  
  
}

































