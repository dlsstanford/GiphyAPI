$(function() {
  $("button").on("click", function() {
    var team = $(this).attr("data-team");
    var queryURL ="api.giphy.com/v1/gifs/search?api_key=DWMA9KCtUweEk4dz9hf8IxLoaWvCjYbX&q=" + team + "&limit=10&offset=0&rating=PG-13&lang=en";



    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var results = response.data;
      console.log(response);
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='lists'>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var teamImage = $("<img>");
        teamImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(teamImage);

        $("#picHolder").prepend(gifDiv);
      }
    });
  });
});

