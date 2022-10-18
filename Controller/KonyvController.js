import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        //console.log("KonyvController");
        const konyvmodel = new KonyvModel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatokAdmin);
        $(window).on("torol",(event)=>{
            console.log("controllerben töröl",event.detail)
        })
        $(window).on("modosit",(event)=>{
            console.log("controllerben modosit",event.detail)
        })
        fooldalGomb.on("click",()=>{
            $("main").html
            konyvmodel.adatBe("../adat.json", this.konyvAdatokPublikus)
        })
        adminGomb.on("click",()=>{
            $("main").html
            konyvmodel.adatBe("../adat.json", this.konyvAdatokPublikus)
        })
    }

    konyvAdatokAdmin(tomb) {
        let szuloelem = $("main")
        new KonyvekView(tomb, szuloelem)
    }
    konyvAdatokPublikus(tomb) {
        let szuloelem = $("main")
        new KonyvekPublicView(tomb, szuloelem)
    }
}

export default KonyvController;