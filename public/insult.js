document
  .querySelector(".request-insult")
  .addEventListener("click", function() {
    fetch("/api/insult")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".insult").innerText = data.insult;
      })
      .catch(function(err) {
        console.log(err);
      });
  });