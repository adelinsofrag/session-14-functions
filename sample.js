// Regular
const calculator = {
  numere: [10, 20, 30, 40, 50],
  calculeazaMedia: function () {
    let suma = 0;
    for (let i = 0; i < this.numere.length; i++) {
      suma += this.numere[i];
    }
    console.log("Suma este:", suma);
    console.log("this în funcția regulată:", this);
  },
};

calculator.calculeazaMedia();

// Arrow
const calculatorArrow = {
  numere: [10, 20, 30, 40, 50],
  calculeazaMedia: () => {
    let suma = 0;
    for (let numar of this.numere) {
      suma += numar;
    }
    console.log("Suma este:", suma);
    console.log("this în funcția arrow:", this);
  },
};

calculatorArrow.calculeazaMedia();
