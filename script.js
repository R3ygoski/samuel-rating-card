const main = document.getElementById("main");
const selected = document.getElementById("selected");
const button = document.getElementById("button");
// ! Added:
// Here I used a Data-Attribute, this reduce a lot the use of many ID's over your HTML
// Give a look at you HTML too.
const values = document.querySelectorAll('[data-val]')

let rate = 0

// ForEach is an Array method, you can use this to iterate thought you Array.
values.forEach((btn, idx)=>{
    btn.addEventListener('click', ()=>{
        let btnValue = idx + 1
        rate = btnValue
    })
})


// ! Changed:
button.addEventListener("click", () => {
    selected.innerText = rate
    toggleCards()
    //After 5 seconds, it will show the card again.
    setTimeout(()=>{
        toggleCards()
    }, 5000)
});

function toggleCards(){
    const rateCard = document.querySelector('#rating-state')
    const thankCard = document.querySelector('#thank-state')
    rateCard.classList.toggle('hidden') //Toggle the hidden class, so, if it will add/remove the class.
    thankCard.classList.toggle('hidden') //Toggle the hidden class, so, if it will add/remove the class.
}