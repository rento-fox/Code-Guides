#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
using namespace std;

int main() {
    cout << "Hello Cpp.cpp\n"; // Hello Cpp.cpp

    // while loop dice rolling program
    srand(time(nullptr));
    int dice = rand() % 6 + 1;
    cout << to_string(dice) + "\n"; // (number between 1-6)
    int count = 1;
    while (dice != 6) {
        dice = rand() % 6 + 1;
        cout << to_string(dice) + "\n"; // (number between 1-6)
        count++;
    }
    cout << "You got 6!\n"; // You got 6!
    cout << "You rolled " + to_string(count) + " times\n"; // You rolled (count) times

    // for loop
    for (int i = 5; i > 0; i--) {
        cout << to_string(i) + "\n"; // (prints numbers 5 to 1 vertically)
    }
    cout << "Liftoff!\n"; // Liftoff!

    // for-each loop
    string myFruits[] = {"banana", "apple", "orange"};
    for (auto fruit : myFruits) {
        cout << fruit + " "; // banana apple orange
    }
    cout << "\n";

    // for loop with a counting variable
    int size = sizeof(myFruits)/sizeof(myFruits[0]);
    for (int i = 0; i < size; i++) {
        cout << myFruits[i] + " "; // banana apple orange
    }
    cout << "\n";

    // do-while loop dice rolling program
    srand(time(nullptr));
    int dice2;
    int count2 = 0;
    do {
        dice2 = rand() % 6 + 1;
        cout << to_string(dice2) + "\n"; // (number between 1-6)
        count2++;
    } while (dice2 != 6);
    cout << "You got 6!\n"; // You got 6!
    cout << "You rolled " + to_string(count2) + " times\n"; // You rolled (count2) times

    // Nested loop (loop inside another loop)
    srand(time(nullptr));
    int numExperiments = 1000;
    int totalRolls = 0;
    for (int i = 0; i < numExperiments; i++) {
        int count3 = 0;
        while (true) {
            int dice3 = rand() % 6 + 1;
            count3++;
            if (dice3 == 6) {
                break;
            }
        }
        totalRolls += count3;
    }
  
    cout << "Doing " + to_string(numExperiments) + " experiments\n"; // Doing 1000 experiments
    double average = static_cast<double>(totalRolls) / numExperiments;
    cout << "Average number of rolls to get 6 is " + to_string(average) + "\n"; // Average number of rolls to get 6 is (calculated average)

    return 0;
}

// EOF
