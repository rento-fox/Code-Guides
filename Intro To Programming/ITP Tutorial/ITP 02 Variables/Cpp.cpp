// C++

#include <iostream>
#include <string>
using namespace std;

int main() {
    
    // Creating a Variable
    string favAnimal = "turtles";
    cout << "I like " + favAnimal; // I like turtles
    cout << '\n'; // (newline)

    // Add a Variable to a String
    string a = "Jane";
    cout << "My name is " + a; // My name is Jane
    cout << '\n'; // (newline)

    // Add Two String Variables Together
    string a2 = "Jane";
    string b2 = "My name is ";
    cout << b2 + a2; // My name is Jane
    cout << '\n'; // (newline)

    // Add Two Number Variables
    int a3 = 2;
    int b3 = 3;
    cout << a3 + b3; // 5
    cout << '\n'; // (newline)

    // Divide Two Number Variables
    int a4 = 12;
    int b4 = 3;
    cout << a4 / b4; // 4
    cout << '\n'; // (newline)

    // Add Two Variables with Extra Variable c
    int a5 = 2;
    int b5 = 3;
    cout << "a is 2, and b is 3\n"; // a is 2, and b is 3
    int c5 = a5 + b5;
    cout << "The sum a + b is " + to_string(c5); // The sum a + b is 5
    cout << '\n'; // (newline)

    // Incrementing a Variable
    int a6 = 2;
    a6 = a6 + 1;
    cout << a6; // 3
    cout << '\n'; // (newline)

    // Incrementing a Variable Using Shorthand
    int a7 = 2;
    a7++;
    cout << a7; // 3
    cout << '\n'; // (newline)

    // Decrementing a Variable Using Shorthand
    int a8 = 5;
    a8 -= 3;
    cout << a8; // 2
    cout << '\n'; // (newline)

    // Using a Variable in an if Statement
    int temperature = 25;
    cout << "Temperature: " + to_string(temperature) + " C\n"; // Temperature: 25 C
    if (temperature > 20) {
        cout << "It is warm\n"; // It is warm
    } else {
        cout << "It is not warm\n";
    }

    return 0;
}

// EOF
