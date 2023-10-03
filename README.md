# api-mountkirk-games
Test for the company Bee Eng for the Apigee Developer position.

Context: In this test I had a period of 24 hours for development.
I used the free GCP and Apigee account to create the project, organization, environments (which I had a limit of 2, so I couldn't create the production one), among others.

Development: After creating environments and basic configurations, I created a Mock (fake backend) to test the proxy return, in it I created the two paths (/users and /orders) in the "GET" method and also added a mandatory field with value set to return 200, after deploying in both environments and testing I proceeded to create the proxy, in it I validated 405, a Js to validate mandatory field with error 400 in case of not sending, 404 in case the correct path is not found and return of responses in Mock. Basic authentications were added, with "/orders" being public and "/users" being internal.

Notes: In the Docs folder you will find the prints with the creation of the authentication products and the tests carried out with postman for mock and proxy.