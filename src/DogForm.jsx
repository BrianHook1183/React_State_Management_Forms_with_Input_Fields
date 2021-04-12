import React, { useState } from "react";

/* 
*Instructions:
should have a form with three input fields: name, breed, age, in that order. The input fields should all take strings. There should be a submission button. After submission, log the values to the console and clear the input fields.

Here is what the logs to the console might look like:

"Rufus" "pit bull" "2"
"Bingo" "terrier" "5"
*/

function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const handleSetName = (event) => setName(event.target.value);
  const handleSetBreed = (event) => setBreed(event.target.value);
  const handleSetAge = (event) => setAge(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, breed, age);
    //Clear form
    setName("");
    setBreed("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleSetName}
          value={name}
        />
      </label>
      <label htmlFor="breed">
        Breedl:
        <input
          id="breed"
          type="text"
          name="breed"
          onChange={handleSetBreed}
          value={breed}
        />
      </label>
      <label htmlFor="age">
        Age:
        <input
          id="age"
          type="string"
          name="age"
          onChange={handleSetAge}
          value={age}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DogForm;
