//Search URL = https://api.twitter.com/1.1/trends/place.json?id=23424977

function getTrends() {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer AAAAAAAAAAAAAAAAAAAAABrCGgEAAAAAC1coVaNyGWQ0CGXKTsTV8e7f5eE%3DolLdFBbPmHPgkeJv97J8dXBKh6ZWTqVHKWci1jTRfGkM8AgR98"
  );
  myHeaders.append(
    "Cookie",
    'personalization_id="v1_QSZs3kHuqI6knlNtIbIchQ=="; guest_id=v1%3A159630901122767291'
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const url = "https://api.twitter.com/1.1/trends/place.json?id=23424977";

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((responseJson) => console.log(responseJson))
    .catch((error) => console.log("error", error));
}

getTrends();
