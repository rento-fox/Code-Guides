// C++

#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "C++\n";

    // Defining a Constant
    const double PI = 3.14159;
    cout << " 1 | " << PI << "\n"; // 3.141590

    // Changing a Constant
    const double PI2 = 3.14159;
    // PI2 = 3;   // Error: assignment of read-only variable

    return 0;
}

// EOF
