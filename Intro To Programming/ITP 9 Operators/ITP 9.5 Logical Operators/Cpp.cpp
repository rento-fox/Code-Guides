#include <iostream>
using namespace std;

int main() {
    cout << "Hello Cpp.cpp\n"; // Hello Cpp.cpp

    // Logical operators

    // && (Logical AND)
    cout << (10 == 5 && 10 != 5); // 0
    cout << "\n";

    // || (Logical OR)
    cout << (10 == 5 || 10 != 5); // 1
    cout << "\n";

    // ! (Logical NOT)
    bool x = true;
    cout << ! x; // 0

    return 0;
}

// EOF
