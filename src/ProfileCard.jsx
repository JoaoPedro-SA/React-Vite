import React from "react";

function ProfileCard({ name, age, isStudent }) {
  return (
    <div>
      <h1>Nome: {name}</h1>
      <h2>Idade: {age}</h2>
      <h2>{isStudent ? "É estudante" : "Não é estudante"}</h2>
    </div>
  );
}

export default ProfileCard;
