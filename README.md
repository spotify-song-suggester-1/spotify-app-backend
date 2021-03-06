# spotify-app backend

This is the back end for the spotify suggester app.
It manages user's database for log in and registration as well as authentication and hashing.

The API is live and up and running at:<br>
[GET](https://spotify-suggester-backend.herokuapp.com/)<br>
```https://spotify-suggester-backend.herokuapp.com/```


## GET ALL USERS
The following endpoint will get you an array of objects containing all users:<br>
[GET](https://spotify-suggester-backend.herokuapp.com/api/users)<br>

```https://spotify-suggester-backend.herokuapp.com/api/users```

## GET USER BY ID
To get an user with a specific id just add it to the URL like so:<br>
[GET](https://spotify-suggester-backend.herokuapp.com/api/users/2)<br>

```https://spotify-suggester-backend.herokuapp.com/api/users/2```


## USER REGISTRATION
For users to be able to register you can hit the following endpoint:<br>
[POST](https://spotify-suggester-backend.herokuapp.com/api/auth/register)<br>

```https://spotify-suggester-backend.herokuapp.com/api/auth/register```

note:remeber that the shape of user table in the database is as follow:
```
{
    id:1,
    username:jessica,
    password:1234,
    email: jessica@gmail.com
}
```

## USER LOG IN
For log in you can use :<br>
[POST](https://spotify-suggester-backend.herokuapp.com/api/auth/login)<br>

```https://spotify-suggester-backend.herokuapp.com/api/auth/login ```

note: After loggin in the API should send back to the client a web token generated using the library jsonwebtoken


## USER UPDATE
For update use following enpoint:<br>
[PUT](https://spotify-suggester-backend.herokuapp.com/api/users/2)<br>

```https://spotify-suggester-backend.herokuapp.com/api/users/2 ```

note: you can use this endpoint to update a user's email or username. Make sure to pass in in JSON format: 


```
{
        "username": "new username",
        "email": "new email"
}
```

if you are only updating one parameter : 

```
{
    "email": "new email"
}



```

## USER DELETE
For deliting an user use<br>
[DELETE](https://spotify-suggester-backend.herokuapp.com/api/users/2)<br>

```https://spotify-suggester-backend.herokuapp.com/api/users/2 ```

NOTE: make sure that the id being passed in belongs to an existing user





