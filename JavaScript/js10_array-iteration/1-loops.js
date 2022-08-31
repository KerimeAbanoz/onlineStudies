//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

//?--------------- ÖRNEK ---------------------

const dizi = [-5, 15, 22, -4, 45, 78];

const negatifler = [];
const pozitifler = [];

const dizilereAyır = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizilereAyır(dizi);

console.log(negatifler);
console.log(pozitifler);

//?--------------- ÖRNEK ---------------------
//? Dizideki notlarin ortalamasini hesaplayiniz.
const notlar = [55, 77, 23, 89, 100];

let toplam = 0;

for (let i = 0; i < notlar.length; i++) {
  toplam += notlar[i];
}

console.log("ORTALAMA:", toplam / notlar.length);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
