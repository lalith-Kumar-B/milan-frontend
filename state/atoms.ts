import {atom} from 'recoil';

const count_atom = atom({
    key : "count_atom",
    default : 0
})

export {count_atom};