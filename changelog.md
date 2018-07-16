# Changelog

## Task 1

- Add Product module
    - Add Product and Book models, Category enum
    - Add Product component
    - Add Product service, add method to retrieve book list
- Add Cart component
    - Add CartService, add methods to put item in cart and remove item from cart
    - Add CartItem model
    - Display cart contents in app component

## Task 2

- Add Cart, Orders, Core and Shared modules
- Add CartList component
- Change CartService and ProductService to expose Subject
    - Add subscriptions and handlers for Cart and Product services to CartList and ProductList components
    - Display available quantity of items and total quantity and price of items in cart
- Add Highlight directive


## Task 3

- Update CartService to keep track of total number of items in cart and total price
- Create ConfigOptions, Constants, Generator and LocalStorage services in Core module
- Create Demo component to use this services
- Create Clicker directive 