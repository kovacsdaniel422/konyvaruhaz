class KonyvView {
    #elem;
    constructor(elem, szuloElem) {
      this.#elem = elem;
      szuloElem.append(`<tr>
      <td>${elem.cim}</td>
      <td>${elem.szerzo}</td>
      <td>${elem.ar}</td>
      <td><button id=V"${elem.id}"class="Vasarlas">Megveszem</button></td>
      </tr>`);
  
      this.recordElem = szuloElem.children("tr:last-child");
      //console.log(this.recordElem);
      this.modositElem = this.recordElem
        .children("td:nth-child(4)")
        .children("button");
  
      this.megvesz.on("click", () => {
        console.log("kosárba");
        this.kattintasTrigger();
      });

    }
  
    kattintasTrigger() {
      const esemeny = new CustomEvent("modosit", { detail: this.#elem.id });
      window.dispatchEvent(esemeny);
    }
  }
  
  export default KonyvView;
  