const button = document.querySelector('#btn')
const hexColor = "#";
button.addEventListener('click', (e)=>{
    e.preventDefault()
    const x = makeid(4)
    const any =document.body.style.backgroundColor =  hexColor + x
    console.log(any)
})



function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEF0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
