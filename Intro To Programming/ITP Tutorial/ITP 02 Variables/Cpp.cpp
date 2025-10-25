// C++

#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "C++\n";
    
    // Creating a Variable
    string favAnimal = "turtles";
    cout << " 1 | I like " + favAnimal; // I like turtles
    cout << '\n'; // (newline)

    // Add a Variable to a String
    string a = "Jane";
    cout << " 2 | My name is " + a; // My name is Jane
    cout << '\n'; // (newline)

    // Add Two String Variables Together
    string a2 = "Jane";
    string b2 = "My name is ";
    cout << " 3 | " + b2 + a2; // My name is Jane
    cout << '\n'; // (newline)

    // Add Two Number Variables
    int a3 = 2;
    int b3 = 3;
    cout << " 4 | ";
    cout << a3 + b3; // 5
    cout << '\n'; // (newline)

    // Divide Two Number Variables
    int a4 = 12;
	int b4 = 3;
    cout << " 5 | ";
	cout << a4 / b4; // 4
    cout << '\n'; // (newline)

    // Add Two Variables with Extra Variable c
    int a5 = 2;
    int b5 = 3;
    cout << " 6 | a is " + to_string(a5) + ", and b is " + to_string(b5);
    cout << '\n'; // (newline)
    int c5 = a5 + b5;
    cout << "   | The sum a + b is " + to_string(c5);
    cout << '\n'; // (newline)

    // Incrementing a Variable
    int a6 = 2;
    a6 = a6 + 3;
    cout << " 7 | " + to_string(a6); // 5
    cout << '\n'; // (newline)

    // Incrementing a Variable Using Shorthand (1)
    int a7 = 2;
    a7 += 3;
    cout << " 8 | " + to_string(a7); // 5
    cout << '\n'; // (newline)

    // Incrementing a Variable Using Shorthand (2)
    int a8 = 2;
    a8++;
    cout << " 9 | " + to_string(a8); // 3
    cout << '\n'; // (newline)

    // Decrementing a Variable
    int a9 = 5;
    a9 = a9 - 3;
    cout << "10 | " + to_string(a9); // 2
    cout << '\n'; // (newline)

    // Decrementing a Variable Using Shorthand (1)
    int a10 = 5;
    a10 -= 3;
    cout << "11 | " + to_string(a10); // 2
    cout << '\n'; // (newline)

    // Decrementing a Variable Using Shorthand (2)
    int a11 = 5;
    a11--;
    cout << "12 | " + to_string(a11); // 4
    cout << '\n'; // (newline)

    // Using a Variable in an if Statement
    int temperature = 25;
    cout << "13 | Temperature: " + to_string(temperature) + "°C\n"; // 
    if (temperature > 20) {
        cout << "   | It is warm\n"; //
    } else {
        cout << "It is not warm\n";
    }

    return 0;
}

// EOF
