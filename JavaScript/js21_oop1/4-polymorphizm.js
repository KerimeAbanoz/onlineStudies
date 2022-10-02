class Book {
    constructor(title, author, year) {
      this.author = author;
      this.title = title;
      this.year = year;
      //? bu alanda yazılan bir method bütün instanceların belleğinde yer kaplar
      this.getTitle = function () {
        return this.title;
      };
    }
  
    //! Bu kısımda yazılan fonksiyonlar aslında prototype alanında bulunur.
    getAge() {
      return new Date().getFullYear() - this.year;
    }
    getSummary() {
      return `${this.title} was writtten by ${this.author} in ${this.year}`;
    }
  }