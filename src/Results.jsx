import CharacterCard from "./CharacterCard";

const Results = ({ characters }) => {
  return (
    <div className="">
      {characters.length ? (
        characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))
      ) : (
        <h1>No characters found!</h1>
      )}
    </div>
  );
};

export default Results;
