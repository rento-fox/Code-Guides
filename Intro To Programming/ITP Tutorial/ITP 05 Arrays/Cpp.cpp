#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
    cout << "Hello Cpp.cpp\n"; // Hello Cpp.cpp

    // Creating an array
    string myFruits[] = {"banana", "apple", "orange"};
    for (int i = 0; i < 3; i++) {
        cout << myFruits[i] + " "; // banana apple orange
    }
    cout << "\n";

    // Read an array value
    string myFruits2[] = {"banana", "apple", "orange"};
    cout << myFruits2[0] + "\n"; // banana

    // Updating an array value
    string myFruits3[] = {"banana", "apple", "orange"};
    myFruits3[0] = "kiwi";
    for (int i = 0; i < 3; i++) {
        cout << myFruits3[i] + " "; // kiwi apple orange
    }
    cout << "\n";

    // Insert a value into an array
    vector<string> myFruitsVector = {"banana", "apple", "orange"};
    myFruitsVector.push_back("lemon");
    for (const string& fruit : myFruitsVector){
        cout << fruit + " "; // banana apple orange lemon
    }
    cout << "\n";

    // Add a value to a specific position in an array
    vector<string> myFruitsVector2 = {"banana", "apple", "orange"};
    myFruitsVector2.insert(myFruitsVector2.begin() + 1, "kiwi");
    for (const string& fruit : myFruitsVector2){
      cout << fruit << " "; // banana kiwi apple orange
    }
    cout << "\n";

    // Remove value at index 1
    vector<string> myFruitsVector3 = {"banana", "apple", "orange"};
    myFruitsVector3.erase(myFruitsVector3.begin() + 1);
    for (const string& fruit : myFruitsVector3){
        cout << fruit << " "; // banana orange
    }
    cout << "\n";

    // Remove value from the end of an array
    vector<string> myFruitsVector4 = {"banana", "apple", "orange"};
    myFruitsVector4.pop_back();
    for (const string& fruit : myFruitsVector4){
        cout << fruit + " "; // banana apple
    }
    cout << "\n";

    // Length of an array
    vector<string> myFruitsVector5 = {"banana", "apple", "orange"};
    cout << myFruitsVector5.size(); // 3
    cout << "\n";

    // Loop through an array
    string myFruits4[] = {"banana", "apple", "orange"};
    for (auto fruit : myFruits4) {
        cout << fruit << " "; // banana apple orange
    }
    cout << "\n";

    // Loop through an array with a counting variable
    string myFruits5[] = {"banana", "apple", "orange"};
    int size = sizeof(myFruits5) / sizeof(myFruits5[0]);
    for (int i = 0; i < size; i++) {
        cout << myFruits5[i] + " "; // banana apple orange
    }
    cout << "\n";

    // Looping through an array of names, looking for "Bob"
    string listOfNames[] = {"Jones", "Jill", "Bob", "Alice"};
    int size2 = sizeof(listOfNames) / sizeof(listOfNames[0]);
    for (int i = 0; i < size2; i++) {
        cout << listOfNames[i] + "\n"; // (prints names vertically, "Bob" is the last name printed)
        if (listOfNames[i] == "Bob") {
            cout << "Found Bob!\n"; //  // Found Bob!
            break;
        }
    }

    return 0;
}

// EOF
