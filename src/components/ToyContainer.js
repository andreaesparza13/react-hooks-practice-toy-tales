import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {

  const toyList = toys.map(toy => (
    <ToyCard 
      key={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
    />
  ))

  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
