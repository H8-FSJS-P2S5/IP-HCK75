# IP-HCK75


- `POST /register`
- `POST /login`

  1.`POST register`

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
    "email": "nununu@mail.com",
    "id": 5
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Username is required"
}
OR
{
  "message": "Password is required"
}
OR
{
    "message": "Validation isEmail on email failed"
}
```

2.`POST login`

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

lodging
GET /lodging`

- `GET /plants`
- `POST /plants`
- `GET /plants/:id`
- `PUT /plants/:id`
- `PATCH /plants/:id/`
- `DELETE /plants/:id`

1. `GET plants`

description :

- Get all plants
  header:

```json
{
  "acccess_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 4,
    "name": "Clammy Groundcherry",
    "facility": "school",
    "roomCapacity": 2,
    "imgUrl": "http://merriam-webster.com/sit/amet/nunc.jsp",
    "location": "69099 Pennsylvania Way",
    "price": 360499,
    "TypeId": 2,
    "UserId": 1,
    "createdAt": "2024-09-18T07:23:42.450Z",
    "updatedAt": "2024-09-18T07:23:42.450Z",
    "User": {
      "id": 1,
      "username": "awaight0",
      "email": "fdumbar0@biblegateway.com",
      "password": "$2a$05$n6ioEiJNdOrbO5zwTnqaKeT6NoyAdz1A7YvRpbKgF0tPqDfM2Ty0S",
      "role": "Admin",
      "phoneNumber": "3819086284",
      "address": "3 Welch Drive",
      "createdAt": "2024-09-18T07:23:42.356Z",
      "updatedAt": "2024-09-18T07:23:42.356Z"
    }
  },
  {
    "id": 8,
    "name": "Leiberg's Fleabane",
    "facility": "office building",
    "roomCapacity": 10,
    "imgUrl": "https://dailymail.co.uk/in/hac/habitasse.json",
    "location": "9 Aberg Alley",
    "price": 646547,
    "TypeId": 2,
    "UserId": 1,
    "createdAt": "2024-09-18T07:23:42.450Z",
    "updatedAt": "2024-09-18T07:23:42.450Z",
    "User": {
      "id": 1,
      "username": "awaight0",
      "email": "fdumbar0@biblegateway.com",
      "password": "$2a$05$n6ioEiJNdOrbO5zwTnqaKeT6NoyAdz1A7YvRpbKgF0tPqDfM2Ty0S",
      "role": "Admin",
      "phoneNumber": "3819086284",
      "address": "3 Welch Drive",
      "createdAt": "2024-09-18T07:23:42.356Z",
      "updatedAt": "2024-09-18T07:23:42.356Z"
    }
  },
  {
    "id": 11,
    "name": "West Indian False Buttonweed",
    "facility": "hotel",
    "roomCapacity": 10,
    "imgUrl": "https://usgs.gov/sed/accumsan/felis/ut.png",
    "location": "744 Victoria Drive",
    "price": 751254,
    "TypeId": 3,
    "UserId": 1,
    "createdAt": "2024-09-18T07:23:42.450Z",
    "updatedAt": "2024-09-18T07:23:42.450Z",
    "User": {
      "id": 1,
      "username": "awaight0",
      "email": "fdumbar0@biblegateway.com",
      "password": "$2a$05$n6ioEiJNdOrbO5zwTnqaKeT6NoyAdz1A7YvRpbKgF0tPqDfM2Ty0S",
      "role": "Admin",
      "phoneNumber": "3819086284",
      "address": "3 Welch Drive",
      "createdAt": "2024-09-18T07:23:42.356Z",
      "updatedAt": "2024-09-18T07:23:42.356Z"
    }
  },
  {
    "id": 12,
    "name": "Valley Lupine",
    "facility": "warehouse",
    "roomCapacity": 4,
    "imgUrl": "http://admin.ch/consequat/morbi.jsp",
    "location": "4 Walton Trail",
    "price": 952142,
    "TypeId": 1,
    "UserId": 1,
    "createdAt": "2024-09-18T07:23:42.450Z",
    "updatedAt": "2024-09-18T07:23:42.450Z",
    "User": {
      "id": 1,
      "username": "awaight0",
      "email": "fdumbar0@biblegateway.com",
      "password": "$2a$05$n6ioEiJNdOrbO5zwTnqaKeT6NoyAdz1A7YvRpbKgF0tPqDfM2Ty0S",
      "role": "Admin",
      "phoneNumber": "3819086284",
      "address": "3 Welch Drive",
      "createdAt": "2024-09-18T07:23:42.356Z",
      "updatedAt": "2024-09-18T07:23:42.356Z"
    }
  },
  {
    "id": 16,
    "name": "Slimleaf",
    "facility": "library",
    "roomCapacity": 9,
    "imgUrl": "https://merriam-webster.com/vivamus.js",
    "location": "cirebon",
    "price": 100000,
    "TypeId": 3,
    "UserId": 1,
    "createdAt": "2024-09-18T07:30:02.465Z",
    "updatedAt": "2024-09-18T07:30:02.465Z",
    "User": {
      "id": 1,
      "username": "awaight0",
      "email": "fdumbar0@biblegateway.com",
      "password": "$2a$05$n6ioEiJNdOrbO5zwTnqaKeT6NoyAdz1A7YvRpbKgF0tPqDfM2Ty0S",
      "role": "Admin",
      "phoneNumber": "3819086284",
      "address": "3 Welch Drive",
      "createdAt": "2024-09-18T07:23:42.356Z",
      "updatedAt": "2024-09-18T07:23:42.356Z"
    }
  },
  {
    "id": 18,
    "name": "kakakak",
    "facility": "kpop",
    "roomCapacity": 10,
    "imgUrl": "\"https://merriam-webster.com/vivamus.js",
    "location": "cirebon",
    "price": 100000,
    "TypeId": 1,
    "UserId": 1,
    "createdAt": "2024-09-19T14:11:55.102Z",
    "updatedAt": "2024-09-19T14:11:55.102Z",
    "User": {
      "id": 1,
      "username": "awaight0",
      "email": "fdumbar0@biblegateway.com",
      "password": "$2a$05$n6ioEiJNdOrbO5zwTnqaKeT6NoyAdz1A7YvRpbKgF0tPqDfM2Ty0S",
      "role": "Admin",
      "phoneNumber": "3819086284",
      "address": "3 Welch Drive",
      "createdAt": "2024-09-18T07:23:42.356Z",
      "updatedAt": "2024-09-18T07:23:42.356Z"
    }
  },
  {
    "id": 1,
    "name": "Slimleaf Drymary",
    "facility": "library",
    "roomCapacity": 9,
    "imgUrl": "https://res.cloudinary.com/deykjuig8/image/upload/v1726834423/b9kgv9oblxg9lvxfx30f.jpg",
    "location": "57186 Birchwood Lane",
    "price": 395604,
    "TypeId": 3,
    "UserId": 1,
    "createdAt": "2024-09-18T07:23:42.450Z",
    "updatedAt": "2024-09-20T12:13:43.493Z",
    "User": {
      "id": 1,
      "username": "awaight0",
      "email": "fdumbar0@biblegateway.com",
      "password": "$2a$05$n6ioEiJNdOrbO5zwTnqaKeT6NoyAdz1A7YvRpbKgF0tPqDfM2Ty0S",
      "role": "Admin",
      "phoneNumber": "3819086284",
      "address": "3 Welch Drive",
      "createdAt": "2024-09-18T07:23:42.356Z",
      "updatedAt": "2024-09-18T07:23:42.356Z"
    }
  }
]
```

2.`POST /plants`
Request :

Header:

```json
{
  "acccess_token": "string"
}
```

Body :

```json
{"name": string,
"facility":  string,
"roomCapacity": integer,
"imgUrl": string,
"location": string,
"price": integer,
"TypeId":integer
}

```
_Response (201 - Created)_

```json
{
"name": string,
"facility":  string,
"roomCapacity": integer,
"imgUrl": string,
"location": string,
"price": integer,
"TypeId":integer
}

```

_Response (400 - Bad Request)_

```json
{
    "message": "Name is required",     
}
OR
{
    "message": "Facility is required",     
}
OR
{
    "message": "Price is required",     
}
```
3. `GET /plants/:id`
Request :

Header:

```json
{
    acccess_token : "string"
}
```

Params :

```json
{
  "id": "integer (required)"
}
```
_Response (200 - OK)_

```json
{
"name": string,
"facility":  string,
"roomCapacity": integer,
"imgUrl": string,
"location": string,
"price": integer,
"TypeId":integer,
"UserId":integer
}

```
_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```
4. `PUT /plants/:id`
Request :

Header:

```
{
    "acccess_token" : "string"
}
```

Params :

```json
{
  "id": "integer (required)"
}
```

Body :

```json
{
"name": string,
"facility":  string,
"roomCapacity": integer,
"imgUrl": string,
"location": string,
"price": integer,
"TypeId":integer,
"UserId":integer
}

```
_Response (200 - OK)_

```json
{
"name": string,
"facility":  string,
"roomCapacity": integer,
"imgUrl": string,
"location": string,
"price": integer,
"TypeId":integer,
"UserId":integer
}

```
_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```
_Response (400 - Bad Request)_

```json
{
    "message": "Name is required",     
}
OR
{
    "message": "Facility is required",     
}
OR
{
    "message": "Price is required",     
}
```
5. `DELETE /plants/:id`
Request :

Header:

```
{
    acccess_token : "string"
}
```

Params :

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "message": "Lodging <id> has been deleted"
}
```
_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

