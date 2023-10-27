const CharacterCard = ({ name, species, gender, origin, location, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-white/5 shadow-white/5 w-60 ">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-white/60 text-base">
          {gender} - {species}
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
