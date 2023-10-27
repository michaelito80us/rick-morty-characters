import { Fragment, useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
// import Results from "./Results";
import fetchCharacters from "./fetchCharacters";
import ErrorBoundary from "./ErrorBoundary";
import nextPageNumber from "./utils/nextPageNumber";
import CharacterCard from "./CharacterCard";

const Home = ({ keyword }) => {
  const listEndRef = useRef(null);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["characters", keyword],
    initialPageParam: { page: 1, keyword },
    queryFn: fetchCharacters,
    getNextPageParam: (lastPage) => {
      const morePagesExist = lastPage.info.next;
      if (morePagesExist === null) return undefined;
      return { page: nextPageNumber(lastPage), keyword };
    },
  });

  const loadMoreCharacters = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    refetch();
  }, [keyword, refetch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCharacters();
        }
      },
      { threshold: 1.0 },
    );

    if (listEndRef.current) {
      observer.observe(listEndRef.current);
    }

    return () => {
      if (listEndRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(listEndRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="m-8 flex flex-wrap justify-evenly gap-4">
        {data?.pages[0].results.length === 0 && !isFetching && (
          <p className="text-white/60 text-2xl">No results found</p>
        )}
        {data?.pages.map((group, index) => (
          <Fragment key={index}>
            {group.results.map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
          </Fragment>
        ))}
      </div>
      <div ref={listEndRef} />
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

function HomeParamsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Home {...props} />
    </ErrorBoundary>
  );
}

export default HomeParamsWithErrorBoundary;
