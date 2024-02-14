let star_box=document.querySelectorAll(".star-box")
let star_rating=document.querySelector(".rating-box")



star_box.forEach((a,i)=>{
    a.addEventListener("click",()=>{
        update(a,i)
    })
})

function update(a,i){
    let index=i
    star_box.forEach((a,i)=>{
        if(i<=index){
            star_box[i].innerHTML='&#9733'
        }else{
           star_box[i].innerHTML='&#9734'

        }
    })
    star_rating.textContent=`${index+1} of 5`

  
   

}