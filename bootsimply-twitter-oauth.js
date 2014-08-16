'use strict';

var BootSimply = (function () {

	var _name;

	var BootSimply = function (_name) {
		this._name = _name;
	};

	function makeApiCall() {

		var accessToken;

		getAccessToken();

		function getAccessToken() {
		  var consumerKey = 'M5xvP4FU5E9LXl2HIOGn6AQEl';
		  var consumerSecret = 'PxL6BhSy5CjxVIK1OKbeZh5bkv8pUpLP3zxnALbQqBkXhuYV8T';
		  var credentials = 'M5xvP4FU5E9LXl2HIOGn6AQEl:PxL6BhSy5CjxVIK1OKbeZh5bkv8pUpLP3zxnALbQqBkXhuYV8T';
		  var encodedCredentials = btoa(credentials);
      
      var url = 'https://api.twitter.com/oauth2/token';
      var type = 'post';
      
			$.ajax({
				url: url,
				type: type,
				data: 'grant_type=client_credentials',
				contentType: "application/x-www-form-urlencoded;charset=UTF-8",
				headers: {
					'Authorization': 'Basic ' + encodedCredentials
				},
				success: function (response) {
					console.log("response : " + JSON.stringify(response));
					processResponse(response);
					
				}
			});
		}

		function processResponse(response) {
      document.querySelector('#token_response').innerText = JSON.stringify(response);
		}
		
	}
	BootSimply.prototype.oauthFlow = function () {
		makeApiCall();
		return "";
	}
	
	return BootSimply;

}());