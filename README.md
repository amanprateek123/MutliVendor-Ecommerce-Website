
 <h1>MultiVendor Ecommerce Backend Setup</h1>
    <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
  <p>
    This repository contains a <strong>NestJS backend</strong> for a multi-vendor e-commerce platform, integrated with <strong>PostgreSQL</strong>.
    The system includes various modules such as product management, order management, payment processing, and shipment management.
  </p>

  <h2>Prerequisites</h2>
  <p>Before setting up the application, ensure you have the following installed:</p>
  <ul>
    <li><strong>Node.js</strong> (v14 or higher) - <a href="https://nodejs.org/">Download here</a></li>
    <li><strong>PostgreSQL</strong> (v12 or higher) - <a href="https://www.postgresql.org/download/">Download here</a></li>
    <li><strong>npm</strong> (Node Package Manager) - Comes with Node.js by default</li>
  </ul>

  <h2>Steps to Set Up the Project</h2>
  <h3>1. Clone the Repository</h3>
  <pre>
    <code>
git clone https://github.com/amanprateek123/MutliVendor-Ecommerce-Website.git
cd repo-name
    </code>
  </pre>

  <h3>2. Install Dependencies</h3>
  <pre>
    <code>
npm install
    </code>
  </pre>

  <h3>3. Set Up PostgreSQL Database</h3>
  <p><strong>Option 1: Set up PostgreSQL Locally</strong></p>
  <pre>
    <code>
# Log into PostgreSQL
psql -U postgres

# Create a new database and user
CREATE DATABASE multi_vendor_ecommerce;
CREATE USER your_database_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE multi_vendor_ecommerce TO your_database_user;
    </code>
  </pre>
  <p>Update the PostgreSQL connection settings in the <code>.env</code> file.</p>
  <p>Update the <code>.env</code> file:</p>
  <pre>
    <code>
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_database_user
DB_PASSWORD=your_password
DB_NAME=multi_vendor_ecommerce
DB_SYNC=true
    </code>
  </pre>

  <h3>6. Start the Application</h3>
  <pre>
    <code>
npm run start:dev
    </code>
  </pre>

  <h3>7. Test the API</h3>
  <p>You can use tools like <a href="https://www.postman.com/">Postman</a> or <a href="https://insomnia.rest/">Insomnia</a> to interact with the API.</p>

  <h2>Project Structure</h2>
  <pre>
    <code>
src/
├── modules/
│   ├── cart/
│   ├── user/
│   ├── product/
│   ├── order/
│   ├── payment/
│   └── shipment/
├── app.module.ts
├── main.ts
├── .env
└── tsconfig.json
    </code>
  </pre>

  <h2>Useful Commands</h2>
  <ul>
    <li><code>npm run start:dev</code>: Start the development server</li>
    <li><code>npm run build</code>: Build the application for production</li>
  </ul>

    <h2>API Design</h2>
  <h3>Product Management</h3>
  <ul>
    <li><strong>GET /products</strong>: Retrieve a list of products</li>
    <li><strong>POST /products</strong>: Create a new product</li>
    <pre>
      <code>
Payload:
{
  "name": "Product Name",
  "description": "Product description",
  "price": 100,
  "vendorId": "vendor-id"
}
      </code>
    </pre>
    <li><strong>POST /products/:id</strong>: Update product details</li>
    <pre>
      <code>
Payload:
{
  "name": "Updated Product Name",
  "description": "Updated description",
  "price": 150
}
      </code>
    </pre>
  </ul>

  <h3>Order Management</h3>
  <ul>
    <li><strong>POST /orders</strong>: Place a new order</li>
    <pre>
      <code>
Payload:
{
  "customerId": "customer-id",
  "items": [
    {
      "productId": "product-id",
      "quantity": 2
    }
  ],
  "addressId": "address-id"
}
      </code>
    </pre>
    <li><strong>GET /orders/:id</strong>: Retrieve order details</li>
  </ul>

  <h3>Cart Management</h3>
  <ul>
    <li><strong>POST /cart</strong>: Add an item to the cart</li>
    <pre>
      <code>
Payload:
{
  "customerId": "customer-id",
  "productId": "product-id",
  "quantity": 1
}
      </code>
    </pre>
    <li><strong>GET /cart/:customerId</strong>: Get items in the cart</li>
  </ul>
