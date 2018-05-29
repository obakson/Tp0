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
  const tmp = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwil4cy5-KrbAhUQ6KQKHYgyC3EQjRx6BAgBEAU&url=http%3A%2F%2Fcelebritybabies.people.com%2F2016%2F07%2F23%2Fciara-video-son-future-swimming%2F&psig=AOvVaw3ZIhyCiNMxXJSq6t8YGDxt&ust=1527683952852661";

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
