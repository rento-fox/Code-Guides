#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "Hello Cpp.cpp\n"; // Hello Cpp.cpp

    // Creating a variable
    string favAnimal = "turtles";
    cout << "I like " + favAnimal + "\n"; // I like turtles

    // Use a variable in a string
    string stringVar = "Jane";
    cout << "My name is " + stringVar + "\n"; // My name is Jane

    // Add two string variables together
    string a = "John";
    string b = "My name is ";
    cout << b + a + "\n"; // My name is John

    // Adding two numbers
    int int1 = 2;
    int int2 = 3;
    cout << int1 + int2; // 5
    cout << "\n";

    // Extra variable to hold the sum
    int num1 = 2;
    int num2 = 3;
    int sum = num1 + num2;
    cout << "The sum num1 + num2 is " + to_string(sum) + "\n"; // The sum num1 + num2 is 5

    // Update the value by adding 1
    int number = 2;
    number = number + 1;
    cout << number; // 3
    cout << "\n";

    // Decrement a value by 3
    int number2 = 5;
    number2 -= 3;
    cout << number2; // 2
    cout << "\n";

    // Variable in an if statement
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
