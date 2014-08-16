chrome-twitter-oauth
==========

**chrome-twitter-oauth** demonstrates **OAuth2** flow supported by Twitter inside a Chrome application. Twitter OAuth2 supports Application-only authentication. This means authenticated requests are made on behalf of the application as opposed to on behalf of a specific user. 

Here is how we have implemented the auth flow:

### Step 1: 

Go to Twitter application management console (https://apps.twitter.com), create new application and generate consumer key and secret.

### Step 2: 

Prepare details to get a bearer token: 

2.1 Create encoded credentials using consumer key and secret generated in step 1.

```
var consumerKey = 'M5xvP4FU5E9LXl2HIOGn6AQEl';
var consumerSecret = 'PxL6BhSy5CjxVIK1OKbeZh5bkv8pUpLP3zxnALbQqBkXhuYV8T';
var credentials = 'M5xvP4FU5E9LXl2HIOGn6AQEl:PxL6BhSy5CjxVIK1OKbeZh5bkv8pUpLP3zxnALbQqBkXhuYV8T';
var encodedCredentials = btoa(credentials);
```

2.2 Prepare request data required to get the token.

```
var url = 'https://api.twitter.com/oauth2/token';
var type = 'post';
var data = 'grant_type=client_credentials';
var contentType = 'application/x-www-form-urlencoded;charset=UTF-8';
```

### Step 3: 

Call Twitter OAuth2 API to get the token.

```
$.ajax({
	url: url,
	type: type,
	data: data,
	contentType: contentType,
	headers: {
		'Authorization': 'Basic ' + encodedCredentials
	},
	success: function (response) {
		console.log("response : " + JSON.stringify(response));
		processResponse(response);
	}
});
```

### Response:

![alt text](https://raw.githubusercontent.com/AnujaK/chrome-twitter-oauth/master/assets/screenshot1.png "Token")

Copyright and License
==========

Copyright 2014 AnujaK (a.for.anuja@gmail.com)

Licensed under Apache License, Version 2.0
