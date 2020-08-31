document
  .querySelector(".request-compliment")
  .addEventListener("click", function() {
    fetch("/api/compliment")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".compliment").innerText = data.compliment;
      })
      .catch(function(err) {
        console.error(err);
      });
  });