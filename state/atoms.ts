import { atom } from 'recoil';
import axios from 'axios';
import { productsGetRoute } from '@/constants/ApiRoutes';

type ProductType = {
  name : string,
  mrp:number,
  rate:number,
  stock:number,
  qtyt:string
}
const fetchProducts = async () => {
  const response = await axios.get(productsGetRoute);
  return response.data ? response.data.serverRes : [];
};

const productsAtom = atom({
  key: 'productsAtom',
  default: [
    {"id":"clxizz8li00006c4prkjgbica","name":"fjrrff frfef","mrp":24,"qtyt":"case" ,"rate":30, "stock":88},
    {"id":"clxizz8li00016c4p2fuxrk3v","name":"wdjfefrf","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li00026c4psim0h0bn","name":"vvrvrv fc","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li00036c4pmlrvcg60","name":"vrrvfrd rfr","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li00046c4pit2cs3d5","name":"efrv 4r4/-","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li00056c4p5twkk1or","name":"ffrf 4r4r","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li00066c4p294i4ltg","name":"g4t34t","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li00076c4pchbo5wbo","name":"hr3fh","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li00086c4p7zobfhox","name":"ilbee 7","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li00096c4pk4h270ii","name":"sfeffj 4/-","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li000a6c4pbmi0cfps","name":"kfrftg rr5","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li000b6c4pfmsu98pv","name":"l","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxizz8li000c6c4p1bui0moj","name":"mr4r46  5/-","mrp":23,"qtyt":"pcs" ,"rate":30, "stock":88},
    {"id":"clxkm2h9m0000iwwqviexh7og","name":"uyu4r4 6d4/-","mrp":45.43,"qtyt":"dz" ,"rate":30, "stock":88},
    {"id":"clxlsdtm80000mi06i2z1xszy","name":"apvj","mrp":45.43,"qtyt":"dz" ,"rate":30, "stock":88},
    {"id":"clxlsdza00001mi064ewqb5e4","name":"abvj","mrp":45.43,"qtyt":"dz" ,"rate":30, "stock":88}].sort((a:ProductType, b:ProductType) => a.name.localeCompare(b.name)),
  effects: [
    ({ setSelf, trigger }) => {
      if (trigger === 'get') {
        (async () => {
          try {
            const products = await fetchProducts();
            setSelf(products);
          } catch (error) {
            console.error('Error fetching products:', error);
            // setSelf([]);
          }
        })();
      }
    },
  ],
});

export { productsAtom };
