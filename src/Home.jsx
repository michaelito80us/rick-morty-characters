import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Results from "./Results";
import fetchAllCharacters from "./fetchAllCharacters";
import ErrorBoundary from "./ErrorBoundary";
import nextPageNumber from "./utils/nextPageNumber";

const Home = () => {
  const listEndRef = useRef(null);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["page"],
    initialPageParam: 1,
    queryFn: fetchAllCharacters,
    getNextPageParam: (lastPage) => {
      return nextPageNumber(lastPage);
    },
  });

  const loadMoreCharacters = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

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
        observer.unobserve(listEndRef.current);
      }
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  console.log("results", data);

  return (
    <div>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="search-params">
          <>
            {data?.pages.map((page) => (
              <Results key={page.info.next} characters={page.results} />
            ))}
            <div ref={listEndRef} />
            <div>
              {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </div>
          </>
        </div>
      )}
      ;
    </div>
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
