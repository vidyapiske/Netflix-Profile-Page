const users = ["abc","cde","efg","hij","klm"];
const memberDiv = document.querySelector(".memberDiv");
const addIcon = document.querySelector(".addIcon");

const userIcons = () => {
    users.map((curElem)=>{
        memberDiv.insertAdjacentHTML("afterbegin",`
        <button class="btn"><span>${curElem}</span></button>
        `)
    })    
}
addIcon.addEventListener("click",()=>{
        let username = prompt("Please enter your username");
        if(username !== null && !users.includes(username)){
            users.push(username);
            console.log(users);
            memberDiv.insertAdjacentHTML('afterbegin',`
            <button class="btn"><span>${username}</span></button>
            `)
        }
        else{
            alert("Username aleardy exists");
        }
    
    })
userIcons();
