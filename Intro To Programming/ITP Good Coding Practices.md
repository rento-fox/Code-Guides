*Last Updated: 30.09.2025*

#### [< Go Back][go-back]

[go-back]: https://github.com/rento-fox/Code-Guides/tree/main/Intro%20To%20Programming 'Intro To Programming'

<br>

# Good Coding Practices

*(by ChatGPT, 2025)*

### Write Clean & Readable Code
Use proper indentation to make your code easy to read.<br>
Avoid long lines (keep them within ~80-120 characters).<br>
Use spaces around operators for better clarity.

#### ✅ Good:
-     total = price + tax
-     if ((active === true) && (failed === false))

#### ❌ Bad:
-     total=price+tax
-     if active === true && failed === false

---

### Use Meaningful & Consistent Naming
Use descriptive variable names (user_age instead of ua).<br>
Use consistent casing styles (e.g., camelCase, snake_case).<br>
Follow language conventions (e.g., PascalCase for classes in Java).

#### Examples:
| Convention   | Example       | Common In
|--------------|---------------|----------
| `camelCase`  | `userAge`     | JavaScript, Java, TypeScript
| `PascalCase` | `PersonClass` | C#, Java (classes)
| `snake_case` | `user_age`    | Python, Ruby, PHP

---

### Keep Functions & Methods Small
Each function should do only one thing (Single Responsibility Principle).<br>
A function should be short and modular, ideally 5-15 lines.<br>
Avoid deep nesting (use early returns).

#### ✅ Good:
    def get_discounted_price(price, discount):
        return price * (1 - discount)

#### ❌ Bad:
    def price_after_discount(price, discount, tax, shipping):
        final_price = price - (price * discount)
        final_price += tax + shipping
        return final_price

---

### Use Comments Wisely
Write meaningful comments (explain "why", not "what").<br>
Avoid redundant comments (code should be self-explanatory).<br>
Use docstrings for functions and classes.
    
#### ✅ Good:
    # Calculate total price after discount
    def get_discounted_price(price, discount):
        return price * (1 - discount)

#### ❌ Bad:
    # This function calculates price after discount
    def get_discounted_price(price, discount):
        return price * (1 - discount) # Multiply price by (1 - discount)

---

### Use Version Control (Git)
Always use Git/GitHub/GitLab for version control.<br>
Write clear commit messages ("Fix login bug" instead of "Update code").<br>
Use branches (feature/signup-page, fix/payment-bug).

---

### Follow DRY (Don't Repeat Yourself) Principle
Avoid duplicating code by using functions and modules.<br>
Extract common logic into reusable functions.

#### ✅ Good:
    def calculate_discount(price, discount):
        return price * (1 - discount)
    
    price1 = calculate_discount(100, 0.1)
    price2 = calculate_discount(200, 0.2)

#### ❌ Bad:
    price1 = 100 - (100 * 0.1)
    price2 = 200 - (200 * 0.2)

---

### Handle Errors Gracefully
Use try-catch or try-except blocks to handle errors.<br>
Log errors properly instead of hiding them.

#### ✅ Good:
    try:
        value = int(input("Enter a number: "))
    except ValueError:
        print("Invalid input! Please enter a number.")

#### ❌ Bad:
    value = int(input("Enter a number: ")) # Crashes if input is invalid

---

### Optimize Performance
Avoid unnecessary loops and nested conditions.<br>
Use efficient data structures (dict instead of a list for lookups).<br>
Cache results if needed (e.g., memoization in recursion).

#### ✅ Good:
    # Use dictionary for quick lookup
    user_roles = {"Alice": "Admin", "Bob": "User"}
    role = user_roles.get("Alice") # O(1) constant time complexity (faster)

#### ❌ Bad:
    # Searching in a list (slow)
    users = [("Alice", "Admin"), ("Bob", "User")]
    role = next((role for user, role in users if user == "Alice"), None)
    # O(n) linear time complexity (slower)

---

### Write Unit Tests
Always write unit tests to verify code correctness.<br>
Use testing frameworks (Jest for JS, PyTest for Python, JUnit for Java).<br>
Follow TDD (Test-Driven Development) when possible.

#### Example:
    import unittest
            
    def add(a, b):
        return a + b
            
    class TestMath(unittest.TestCase):
        def test_add(self):
            self.assertEqual(add(2, 3), 5)

    if __name__ == '__main__':
        unittest.main()

---

### Keep Your Code Modular & Maintainable
Break large files into smaller modules.<br>
Follow SOLID principles in Object-Oriented Programming.<br>
Use design patterns where applicable (Singleton, Factory, etc.).

#### ✅ Good:
- math_operations.py
- string_utils.py
- file_handler.py

#### ❌ Bad:
- utils.py with 1000 lines of code

---

### Security Best Practices
Never store passwords in plain text.<br>
Use parameterized queries to prevent SQL injection.<br>
Sanitize user input to avoid XSS attacks.

#### ✅ Good:
    import bcrypt

    hashed_pw = bcrypt.hashpw("mypassword".encode(), bcrypt.gensalt())

#### ❌ Bad:
    password = "mypassword" # Plain text, BAD!

---

### Document Your Code
Use README.md for project descriptions.<br>
Write API documentation (Swagger, Postman).<br>
Use docstrings (""" """ in Python, /** */ in JavaScript).

#### Example:
    """
    This module handles user authentication.

    Functions:
    - login(username, password)
    - logout(user)
    - is_authenticated(token)
    """

---

<br>

# Summary of Good Coding Practices

| Practice                  | Benefit
|---------------------------|--------
| Clean Code                | Improves readability & maintainability
| Consistent Naming         | Makes code understandable
| Small Functions           | Follows the Single Responsibility Principle
| Write Comments            | Helps others (and future you) understand the code
| Use Version Control       | Tracks changes and prevents code loss
| Avoid Repetition (DRY)    | Makes code efficient and reusable
| Handle Errors Properly    | Prevents crashes and improves user experience
| Optimize Performance      | Speeds up execution time
| Write Tests               | Ensures code reliability
| Modular Code              | Makes maintenance and scaling easier
| Security Best Practices   | Protects user data and system integrity
| Document Your Code        | Helps future developers understand the project

<br>

#### [< Go Back][go-back]

[go-back]: https://github.com/rento-fox/Code-Guides/tree/main/Intro%20To%20Programming 'Intro To Programming'

<br>

*EOF*
