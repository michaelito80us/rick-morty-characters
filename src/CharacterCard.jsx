const CharacterCard = ({ name, species, gender, origin, location, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Species: {species}
          <br />
          Gender: {gender}
          <br />
          Origin: {origin.name}
          <br />
          Location: {location.name}
          <br />
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
