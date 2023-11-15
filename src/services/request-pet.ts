async function requestPets() {
  const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=dog`);
  const json = await response.json();
  return json.pets;
}

export default requestPets;
