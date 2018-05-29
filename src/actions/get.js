/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* const isFlower = arr.filter(({id}) => category === "flowers");
*/
import { getSate } from "../store";

const get = (elt) => { const tmp = getState(); return tmp.find(i => i.id === elt); };

export default get;
