#include <iostream>
#include <string>
using namespace std;

double convertToCelsius(double fahrenheit) {
    double celsius = (fahrenheit - 32) * 5.0 / 9.0;
    return celsius;
}

int main() {
    cout << "Hello Cpp.cpp\n"; // Hello Cpp.cpp

    // Calling a function
    cout << to_string(convertToCelsius(50)) + "\n"; // 10.000000

    return 0;
}

// EOF
