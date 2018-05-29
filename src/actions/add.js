/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

import { getState, setState } from "../store";

let LASTID = 4;
const add = (data) =>
{
  const arr = getState();
  LASTID++;
  if (typeof(data) === "string")
  {
    setState([...arr,{ id: LASTID, url: data }]);
  }
  else
  {
    setState([...arr, data.map(x => ({id: LASTID++, url: x}))]); 
  }
};

export default add;
