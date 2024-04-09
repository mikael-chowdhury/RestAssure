# RestAssure

RestAssure is a TypeScript library designed to simplify and streamline the process of writing tests for your REST APIs. By providing a fluent and intuitive interface for sending HTTP requests and asserting responses, RestAssure makes it easier to ensure your API behaves as expected.

## Features

- Fluent API for constructing requests and assertions.
- Supports common HTTP methods like GET and POST.
- Allows for detailed assertions on response status, headers, body, and more.
- Enables testing of APIs with complex response structures.
- Easily integrated into existing TypeScript projects.

## Installation

```bash
npm install restassure --save-dev
```

Or using Yarn:

```bash
yarn add restassure --dev
```

## Usage

First, import RestAssure into your test file:

```typescript
const ra = require("restassure");
```

### Configuring the Server

Before sending requests, configure the server URL:

```typescript
before(() => {
  ra.useServer("http://localhost:80");
});
```

### Writing Tests

RestAssure integrates seamlessly with popular testing frameworks like Mocha. Here's how to write a test:

```typescript
describe("API tests", () => {
  it("returns the new age of a user after 3 years", async () => {
    await ra.post("/new/user/age", { age: 28 })
    .expect("status").to.be(200)
    .expect("data.age").to.be(31);
  });
});
```

### Assertions

RestAssure provides a rich set of assertion methods, including but not limited to:

- `toBe(value)`: Asserts that the specified key's value matches the expected value.
- `notBe(value)`: Asserts the opposite of toBe.
- `toEqual(value)`: Deep equality comparison.
- `toBeType(type)`: Asserts the type of the specified key's value.
- `toBeGreaterThan(value)`, `toBeGreaterThanOrEqual(value)`, `toBeLessThan(value)`, `toBeLessThanOrEqual(value)`: Numeric comparisons.
- `toExist()`: Asserts that the specified key's value is neither undefined nor null.
- `toHaveLength(length)`: Asserts the length of an array or string.

## Example

Here's a more detailed example demonstrating various assertions:

```typescript
it("validates user details", async () => {
  await ra
    .get("/user/details")
    .expect("status").toBe(200)
    .expect("data.username").toExist()
    .expect("data.age").toBeGreaterThan(18)
    .expect("data.hobbies").toHaveLength(3);
});
```

## Contributing

Contributions are welcome! Please submit a pull request or create an issue for any features or improvements you'd like to see

### License

Distributed under the MIT License. See LICENSE for more information
