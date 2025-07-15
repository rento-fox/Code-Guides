import java.util.ArrayList;
import java.util.Arrays;

public class Java5 {
    public static void main(String[] args) {
        System.out.println("Hello Java.java"); // Hello Java.java

        // Creating an array
        String[] myFruits = {"banana", "apple", "orange"};
        System.out.println(Arrays.toString(myFruits)); // [banana, apple, orange]

        // Read an array value
        String[] myFruits2 = {"banana", "apple", "orange"};
        System.out.println(myFruits2[0]); // banana

        // Updating an array value
        String[] myFruits3 = {"banana", "apple", "orange"};
        myFruits3[0] = "kiwi";
        System.out.println(Arrays.toString(myFruits3)); // [kiwi, apple, orange]

        // Insert a value into an array
        ArrayList<String> myFruitsArray = new ArrayList<String>();
        System.out.println(myFruitsArray); // []
        myFruitsArray.add("banana");
        myFruitsArray.add("apple");
        myFruitsArray.add("orange");
        myFruitsArray.add("lemon");
        System.out.println(myFruitsArray); // [banana, apple, orange, lemon]

        // Add a value to a specific position in an array
        ArrayList<String> myFruitsArray2 = new ArrayList<String>();
        myFruitsArray2.add("banana");
        myFruitsArray2.add("apple");
        myFruitsArray2.add("orange");
        System.out.println(myFruitsArray2); // [banana, apple, orange]
        myFruitsArray2.add(1, "kiwi");
        System.out.println(myFruitsArray2); // [banana, kiwi, apple, orange]

        // Remove value at index 1
        ArrayList<String> myFruitsArray3 = new ArrayList<String>();
        myFruitsArray3.add("banana");
        myFruitsArray3.add("apple");
        myFruitsArray3.add("orange");
        System.out.println(myFruitsArray3); // [banana, apple, orange]
        myFruitsArray3.remove(1);
        System.out.println(myFruitsArray3); // [banana, orange]

        // Remove value from the end of an array
        ArrayList<String> myFruitsArray4 = new ArrayList<String>();
        myFruitsArray4.add("banana");
        myFruitsArray4.add("apple");
        myFruitsArray4.add("orange");
        System.out.println(myFruitsArray4); // [banana, apple, orange]
        myFruitsArray4.remove(myFruitsArray4.size()-1);
        System.out.println(myFruitsArray4); // [banana, apple]

        // Length of an array
        ArrayList<String> myFruitsArray5 = new ArrayList<String>();
        myFruitsArray5.add("banana");
        myFruitsArray5.add("apple");
        myFruitsArray5.add("orange");
        System.out.println(myFruitsArray5); // [banana, apple, orange]
        System.out.println(myFruitsArray5.size()); // 3

        // Loop through an array
        String[] myFruits4 = {"banana", "apple", "orange"};
        for (String fruit : myFruits4) {
            System.out.println(fruit); // (prints elements of the array vertically)
        }

        // Loop through an array with a counting variable
        String[] myFruits5 = {"banana", "apple", "orange"};
        for (int i = 0; i < myFruits5.length; i++) {
            System.out.println(myFruits5[i]); // (prints elements of the array vertically)
        }

        // Looping through an array of names, looking for "Bob"
        String[] listOfNames = {"Jones", "Jill", "Bob", "Alice"};
        for (int i = 0; i < listOfNames.length; i++) {
            System.out.println(listOfNames[i]); // (prints names vertically, "Bob" is the last name printed)
            if (listOfNames[i] == "Bob") {
                System.out.println("Found Bob!"); // Found Bob!
                break;
            }
        }
    }
}

// EOF
