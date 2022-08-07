function Search_Article() {

const input =document.getElementById('Text_Filter').value.toUpperCase();

const cardContainer = document.getElementById('Grid')

const cards = cardContainer.getElementsByClassName('col mb-4')

console.log(cards)

for(let i=0; 1< cards.length;i++){
    let card_title = cards[i].querySelector(".card_body .card_title")

if(card_title.innerText.toUpperCase().indexOf(input) > -1) {
     cards[i].style.display ="";}
     else {
        cards[i].style.display ="none";
     }
   }

}
