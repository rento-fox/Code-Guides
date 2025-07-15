#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
using namespace std;

int main() {
    cout << "Hello Cpp.cpp\n"; // Hello Cpp.cpp

    // if else
    srand(time(nullptr));
    int dice = rand() % 6 + 1;
    cout << "You rolled a " + to_string(dice) + "\n"; // You rolled a (number between 1-6)
    if (dice == 6) {
        cout << "You got 6!\n"; // You got 6!
    } else {
        cout << "Try again\n"; // Try again
    }

    // else if
    int age = 15;
    cout << "Age: " + to_string(age) + "\n"; // Age: 15
    if (age < 13) {
        cout << "You are a child";
    } else if (age < 20) {
        cout << "You are a teenager\n"; // You are a teenager
    } else {
        cout << "You are an adult";
    }

    int age2 = 19;
    cout << "Age: " + to_string(age2) + "\n"; // Age: 19
    if (age2 < 13) {
        cout << "You are a child";
    } else if (age2 < 20) {
        cout << "You are a teenager"; // You are a teenager
        if (age2 > 17) {
            cout << "\nand an adult!"; // and an adult!
        }
    } else {
        cout << "You are an adult";
    }

    return 0;
}

// EOF
