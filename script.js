var total=document.querySelector("#total")
var moins=document.querySelectorAll("#moins")
var plus=document.querySelectorAll("#plus")
var quantité=document.querySelectorAll("#quantité")
var prix=document.querySelectorAll("#prix")
var heart=document.querySelectorAll("#heart")
var panier=document.querySelector(".offcanvas-body")
var cards=document.querySelectorAll(".card")
var switchs=document.querySelector(".input")
var basket=document.querySelectorAll("#panier")

console.log(cards[0].firstElementChild.currentSrc);

function totalprice(){
    var s=0
    for (let i= 0; i < quantité.length; i++) {
        s+=quantité[i].innerHTML *prix[i].innerHTML
        
    }
    return total.innerHTML=s
}


for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click",function add(){
        quantité[i].innerHTML++
        totalprice()
    })
    
}
for (let i = 0; i < moins.length; i++) {
    moins[i].addEventListener("click",function soust(){
        if(quantité[i].innerHTML>0){
        quantité[i].innerHTML--}
        else{
            quantité[i].innerHTML=0}
        totalprice()
    })
    
}

for (let i= 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function hearts(){
    
        if (heart[i].style.color=="brown") {
            heart[i].style.color="black"
            
        }
        else{
            heart[i].style.color="brown"
            
        } })}

for (let i= 0; i < basket.length; i++) {
    basket[i].addEventListener("click",function pani() {
        console.log(cards[i].querySelector(".card__title").innerHTML);
       var div=document.createElement("div")

       var newdiv=document.createElement("div")
    
       div.style.display="flex"
       div.style.height="100px"
        div.style.width="100%"
var q=document.createElement("p")
var h1=document.createElement("h1")
var p=document.createElement("p")
q.textContent=cards[i].querySelector("#quantité").innerHTML
p.textContent=cards[i].querySelector("#prix").innerHTML
h1.textContent=cards[i].querySelector(".card__title").innerHTML
h1.style.fontSize="1rem"
p.style.fontSize="0.8rem"
p.style.height="10px"
q.style.fontSize="0.8rem"
console.log(h1);

var img=document.createElement("img")
newdiv.style.display="flex"
newdiv.style.flexDirection="column"
newdiv.style.justifyContent="center"
newdiv.style.alignItems="start"

img.src=cards[i].firstElementChild.currentSrc
img.style.height="100px"
img.style.width="100px"
       div.appendChild(img)
       newdiv.appendChild(h1)
       newdiv.appendChild(p)
       newdiv.appendChild(q)
       div.appendChild(newdiv)
       panier.appendChild(div)
    })
    
}
var h1=document.querySelector("h1")
var body=document.querySelector("body")





















