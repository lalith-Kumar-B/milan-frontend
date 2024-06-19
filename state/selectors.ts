import { selector } from "recoil";
import axios from "axios";

const products_sel = selector({
    key : "products_sel",
    get :async () => {
        // const response = await axios.get('http://192.168.1.8:4000/product');
        // return response.data ? response.data.serverRes : null; 
        return [
            {"id":"clxizz8li00006c4prkjgbica","name":"fjrrff frfef","mrp":24,"qtyt":"case"},
            {"id":"clxizz8li00016c4p2fuxrk3v","name":"wdjfefrf","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li00026c4psim0h0bn","name":"vvrvrv fc","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li00036c4pmlrvcg60","name":"vrrvfrd rfr","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li00046c4pit2cs3d5","name":"efrv 4r4/-","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li00056c4p5twkk1or","name":"ffrf 4r4r","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li00066c4p294i4ltg","name":"g4t34t","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li00076c4pchbo5wbo","name":"hr3fh","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li00086c4p7zobfhox","name":"ilbee 7","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li00096c4pk4h270ii","name":"sfeffj 4/-","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li000a6c4pbmi0cfps","name":"kfrftg rr5","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li000b6c4pfmsu98pv","name":"l","mrp":23,"qtyt":"pcs"},
            {"id":"clxizz8li000c6c4p1bui0moj","name":"mr4r46  5/-","mrp":23,"qtyt":"pcs"},
            {"id":"clxkm2h9m0000iwwqviexh7og","name":"uyu4r4 6d4/-","mrp":45.43,"qtyt":"dz"},
            {"id":"clxlsdtm80000mi06i2z1xszy","name":"apvj","mrp":45.43,"qtyt":"dz"},
            {"id":"clxlsdza00001mi064ewqb5e4","name":"abvj","mrp":45.43,"qtyt":"dz"}]

    }
}) 

export {products_sel};