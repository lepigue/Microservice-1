#Product Count Microservice


This is a simple microservice for counting a number of products in a MongoDB database. The microservice is implemented in Node.js using the Mongoose library. 

#Requirements: 

●	Node.js
●	MongoDB
●	Mongoose library

#Installation: 

1.	Clone the repository:
![image](https://user-images.githubusercontent.com/71670898/218364979-246d7ad8-36fc-49ac-88c9-2cbed6a0c923.png)
2.	Install the dependencies:
![image](https://user-images.githubusercontent.com/71670898/218365021-8943284b-b07d-4090-8c76-7ce5ad1b5221.png)
3.	Set up the environment variables:
Create a `.env` file in the root directory of the project and set the following environment variable: 
![image](https://user-images.githubusercontent.com/71670898/218365059-b057d92a-478c-4387-b2c2-e4469af48b02.png)

Replace `<host>`, `<port>` and `<database>` with the appropriate values for your MongoDB installation. 

Usage: 

1.	Start the microservice: 
![image](https://user-images.githubusercontent.com/71670898/218365088-cc7d1dd7-312b-48d6-bdd9-e7ce052f3fe9.png)

2.	Retrieve the number of products:

Make a GET request to the endpoint `/api/products/count`  to retrieve the number of products in the database. The response will be a JSON object with a single property `count` that contains the number of products. 

UML sequence diagram: 
![image](https://user-images.githubusercontent.com/71670898/218365147-31cde2ed-25b4-4125-bfa2-ac0476da01ad.png)

