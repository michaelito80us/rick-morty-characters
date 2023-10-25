export default function nextPageNumber(lastPage) {
  const urlString = lastPage.info.next;
  if (urlString === null) return undefined;

  const splitURL = urlString.split("?"); // Split the URL at the question mark

  // Guard in case there is no query string
  let pageNumber = null;
  if (splitURL.length > 1) {
    const paramsString = splitURL[1];
    const paramsSplit = paramsString.split("&"); // Split the query string at ampersands

    // Look for the "page" parameter
    for (let param of paramsSplit) {
      const keyValue = param.split("="); // Split the parameter at the equals sign
      if (keyValue[0] === "page") {
        pageNumber = keyValue[1]; // Get the value part
        break;
      }
    }
  }

  return pageNumber;
}
