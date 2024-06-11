# Ecommerce API

Welcome to our Ecommerce API. This document will guide you on how to use our API.

## User Routes

- To register a new user, make a POST request to `/users/register` with a JSON body containing `username` and `password`.

- To login, make a POST request to `/users/login` with a JSON body containing `username` and `password`.

## Product Routes

- To create a new product, make a POST request to `/products` with a JSON body containing product details. This route is secured and requires authentication.

- To get all products, make a GET request to `/products`.

- To get a specific product, make a GET request to `/products/:id` where `:id` is the ID of the product.

- To update a specific product, make a PUT request to `/products/:id` with a JSON body containing the updated product details. This route is secured and requires authentication.

- To delete a specific product, make a DELETE request to `/products/:id`. This route is secured and requires authentication.

## Testing

You can use tools like Postman or curl to test these routes. For the secured routes, you will need to include an authentication token in the request header.