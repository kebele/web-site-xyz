
class TypeWriter{
    constructor (txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';//ekrana typewriter effectinde çıkacak harfler
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        //console.log('hello');
    //current index of word
    const current = this.wordIndex % this.words.length;
    //get full text of current word
    const fullTxt = this.words[current];
    //console.log(current);
    //console.log(fullTxt);
    //check if deleting
    if(this.isDeleting){
        //remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else {
        //add a character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //initial type speed
    let typeSpeed = 100;

    if(this.isDeleting){
        typeSpeed /=2; //ikiye bölmenin kısa yolu 
    }

    // if word is complete

    if(!this.isDeleting && this.txt === fullTxt){
        //make a pause at end
        typeSpeed = this.wait;
        // set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // move to the next word
        this.wordIndex++;
        // pause before start typing
        typeSpeed = 500;
    }


    setTimeout(() => this.type(), typeSpeed);
    }
}

//init on DOM load
document.addEventListener('DOMContentLoaded', init);

//init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init typeWriter
    new TypeWriter(txtElement, words, wait);
}