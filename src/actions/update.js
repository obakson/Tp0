/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

import { getState, setState } from "../store";

const update = (pix) => 
{
  const tmp = "https://picsum.photos/200/300/?random";

  let newUrl = window.prompt("Enter url", tmp);
  let res = getState();
  function ide(x) { return x.id === pix.id; }
  const index = res.findIndex(ide);
  if (index !== -1)
  {
    res[index].url = newUrl;
  }
  setState(res);
};

export default update;
