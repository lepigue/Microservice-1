## POST an exercise
curl -X POST -H "Content-Type: application/json" \
    -d '{"title": "Sorry to Bother You", "year": 2019, "language": "English"}' \
    http://localhost:3000/exercises

### GET all exercises
curl http://localhost:3000/exercises

### GET exercise based on ID
curl http://localhost:3000/exercises/60cfb5a294fe3b61d4ccc946

### PUT exercise

curl -X PUT -H "Content-Type: application/json" \
    -d '{"title": "Sorry to Bother You", "year": 2018, "language": "English"}' \
    http://localhost:3000/exercises/60cfb5a294fe3b61d4ccc946

### DELETE exercises

curl --request DELETE http://localhost:3000/exercises/60cfb5a294fe3b61d4ccc946
