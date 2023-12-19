console.log('this works')

// [1] get text
const en_btn = document.querySelector(".en");
const pt_btn = document.querySelector(".pt");

const english_text = document.querySelector("#english_content")
const portugese_text = document.querySelector ("portugese_content") 

// [2] add event listener
en_btn.addEventListener("click",translateToEnglish)
pt_btn.addEventListener ("click,translateToPortugese")

// [3] define the event handler
const translateToEnglish = ()=> {
    english_text.style.display = "none";
    portugese_text.style.display = "flex";
}
