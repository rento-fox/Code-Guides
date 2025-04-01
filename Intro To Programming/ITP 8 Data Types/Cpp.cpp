#include <iostream>
using namespace std;

int main() {
    cout << "Hello Cpp.cpp\n"; // Hello Cpp.cpp

    // Check variable data type
    int num = 3;
    cout << typeid(num).name(); // i
    cout << "\n";

    // String data type
    string message = "Hello, World!\n"; // Hello, World!
    cout << message;

    // Integer data type
    int x = 7;
    cout << x; // 7
    cout << "\n";

    // Float data type
    float pi = 3.14;
    cout << pi; // 3.14
    cout << "\n";

    // Boolean data type
    bool boolVar = true;
    cout << boolVar; // 1
    cout << "\n";

    // Casting data types
    string a = "18";
    int b = stoi(a) + 3;
    cout << b; // 21
    cout << "\n";

    // None, or null
    // In modern C++ (C++11 and later), we use nullptr for pointers that don't point to anything.
    int* ptr = nullptr;
    if (ptr == nullptr) {
        cout << "ptr is nullptr (null)"; // ptr is nullptr (null)
    }
    
    return 0;
}

// EOF
