// Code your solutions in this file
const gifts= ['teddy bear', 'drone', 'doll']

function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        debugger
    }
    return gifts
}

wrapGifts(gifts)

const messages= []

function writeCards(names, eventName) {
    for (let i=0; i<names.length; i++) {
        messages[i]= `Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return messages

}

function countDown(number) {
    while (number >=0) {
        console.log(number)
        number --
    }
}