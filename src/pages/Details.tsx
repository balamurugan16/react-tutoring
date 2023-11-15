import { useEffect, useState } from "react";
import Pet from "../components/Pet";
import { PetType } from "../type";
import requestPets from "../services/request-pet";

function DetailsPage() {
  const [pets, setPets] = useState<PetType[]>([]);

  useEffect(() => {
    requestPets().then((data) => {
      setPets(data);
    });
  }, []);

  return (
    <div>
      {pets.map((pet) => (
        <Pet {...pet} />
      ))}
    </div>
  );
}

export default DetailsPage;
