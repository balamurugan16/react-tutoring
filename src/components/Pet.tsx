type PetType = {
  name: string;
  age: number;
  breed: string;
};

function Pet(props: PetType) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.breed}</p>
      <p>{props.age}</p>
    </div>
  );
}

export default Pet;
