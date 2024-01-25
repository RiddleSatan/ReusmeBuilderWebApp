(function () {
  // Define the error message to check for
  const errorMessage = "ERR_CONNECTION_TIMED_OUT";

  // Check if the error message is present in the document body
  function isErrorPage() {
    return document.body.innerText.includes(errorMessage);
  }

  // Reload the page if it is an error page
  function reloadIfError() {
    if (isErrorPage()) {
      location.reload();
    }
  }

  // Check for errors periodically (every 5 seconds in this example)
  setInterval(reloadIfError, 5000);
})();
