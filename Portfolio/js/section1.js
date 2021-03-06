// Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  //   initialize the typewriter
  new TypeWriter(txtElement, words, wait);
}

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //   console.log("Hello");

    // Current index of word
    const current = this.wordIndex % this.words.length;

    // Get full text of current word
    const fulltxt = this.words[current];

    //  Initial Type speed
    let typeSpeed = 300;

    //   console.log(fulltxt);

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fulltxt.substring(0, this.txt.length - 1);
      typeSpeed /= 2;
    } else {
      // Add char
      this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    //   Insert txt into element
    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;

    //   If word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
      //   This will make it pause at end
      typeSpeed = this.wait;

      // set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;

      // Move to next word
      this.wordIndex++;

      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => {
      this.type();
    }, typeSpeed);
  }
}
