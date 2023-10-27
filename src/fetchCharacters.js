async function fetchCharacters({ pageParam }) {
  const { page, keyword } = pageParam;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${keyword}`,
  );
  if (!res.ok) {
    if (res.status === 404) {
      return {
        results: [],
        info: {
          next: null,
        },
      };
    }
    throw new Error("Something went wrong!");
  }

  return res.json();
}

export default fetchCharacters;
