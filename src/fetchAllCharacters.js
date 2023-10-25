async function fetchAllCharacters({ pageParam }) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}`,
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}

export default fetchAllCharacters;
