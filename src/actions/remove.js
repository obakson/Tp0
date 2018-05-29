/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import {getState, setState } from "../store";

const remove = (pix) =>
{
    setState(getState().filter(elt => elt.id !== pix.id))
};

export default remove;
