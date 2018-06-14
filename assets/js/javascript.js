
$("#test").on("click", function () {

var searchTerm = $("#search").text();
var startYear = $("#dateB").text() +"0101";
var endYear = $("#dateE").text() + "1231";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "0562e2f7d9d44a0cb8b00ca91880a406",
        'q': searchTerm,
        'begin_date':  startYear,
        'end_date': endYear,
    });

    $.ajax({
    url: url,
    method: "GET"
    })
     .then(function (dataTest) {

     console.log(dataTest);
     });

    });
