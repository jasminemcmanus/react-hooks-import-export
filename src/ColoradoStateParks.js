import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain";
import { trees, wildlife } from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <React.Fragment>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
    </React.Fragment>
)
} 

console.log(RMFunctions.trees);
RMFunctions.wildlife();
console.log(trees);
wildlife();

export default ColoradoStateParks;