## POST an exercise
curl --header "Content-Type: application/json" --request POST --data "{\"title\":\"Sorry to Bother You\", \"year\":2019, \"language\":\"English\"}" http://localhost:3000/exercises

### GET all exercises
curl http://localhost:3000/exercises

### GET exercise based on ID
curl http://localhost:3000/exercises/60cfb5a294fe3b61d4ccc946

### PUT exercise

curl --header "Content-Type: application/json" --request PUT --data "{\"title\":\"Sorry to Bother You\", \"year\":2018, \"language\":\"Korean\"}" http://localhost:3000/exercises/60cfb5a294fe3b61d4ccc946

### DELETE exercise

curl --request DELETE http://localhost:3000/exercises/60cfb5a294fe3b61d4ccc946
