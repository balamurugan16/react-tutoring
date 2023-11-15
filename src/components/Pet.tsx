import { PetType } from "../type";

function Pet(props: PetType) {
  const { name, breed, city } = props;

  return (
    <div>
      <h3>{name}</h3>
      <p>{breed}</p>
      <p>{city}</p>
    </div>
  );
}

export default Pet;
