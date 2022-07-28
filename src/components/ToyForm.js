import React, { useState } from "react";

function ToyForm({ toys, setToys }) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  // const [likes, setLikes] = useState(0)

  function addToy() {
    const postReqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        name,
        image,
        // likes
      })
    }
    fetch("http://localhost:3001/toys", postReqObj)
      .then(res => res.json())
      .then(newToy => {
        setToys([...toys, newToy]);
      })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={addToy}>
        <h3>Create a toy!</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
