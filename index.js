import { produce } from 'immer';

window.onload = function () {
    const a = produce({}, draft => {
        draft.a = '1234'
    });

    console.log(JSON.stringify(a));
}