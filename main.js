






window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY  > 0)
})



const faqs=document.querySelectorAll(".faq");

  faqs.forEach(element => {
    element.addEventListener("click" , ()=>{
        element.classList.toggle("open");
        //
        const icon=element.querySelector(".faq_icon i");
        if(icon.className === "uil uil-plus"){
          icon.className="uil uil-minus"
        }
        else{
          icon.className ="uil uil-plus"
        }
    })
  });




  /*==================*/
  const menu=document.querySelector(".nav_menu");
  const openBtn=document.querySelector("#open-menu-btn");
  const closeBtn=document.querySelector("#close-menu-btn");
openBtn.addEventListener("click",()=>{
  menu.style.display="flex";
  closeBtn.style.display="inline-block";
  openBtn.style.display="none"
})
closeBtn.addEventListener("click", ()=>
{
  menu.style.display="none"
  openBtn.style.display="inline-block"
  closeBtn.style.display="none"
})

///////////


var input_amount = document.getElementById("original-currency-amount");
var from_currency = document.getElementById("from_currency");
var to_currency = document.getElementById("to_currency");
var exchange_rate = document.getElementById("exchange-rate");
var exchange = document.getElementById("exchange");
var output_amount = document.getElementById("output-text");
var output_from = document.getElementById("from");
var output_to = document.getElementById("to");


exchange.addEventListener("click",()=>{
    [from_currency.value, to_currency.value] = [to_currency.value, from_currency.value];
    calculate();
})

var to_amount = 0;
function calculate(){
    const from_currency_value = from_currency.value;
    const to_currency_value = to_currency.value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency_value}`)
    .then(res => res.json())
    .then(res => {
        const rate = res.rates[to_currency_value];
        exchange_rate.value = `${rate}`
        to_amount = (input_amount.value * rate).toFixed(3);
        output_from.innerText= `${input_amount.value} ${from_currency_value}`;
        output_to.innerText = `${to_amount} ${to_currency_value}`;
        output_amount.style.display="block";
    })
}


document.getElementById("exchange_button").addEventListener("click",()=>{
    calculate();
});