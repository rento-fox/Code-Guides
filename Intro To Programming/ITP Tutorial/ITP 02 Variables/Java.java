// Java

public class Java {
    public static void main(String[] args) {
        System.out.println("Java");

        // Creating a Variable
        String favAnimal = "turtles";
        System.out.println(" 1 | I like " + favAnimal); // I like turtles

        // Add a Variable to a String
        String a = "Jane";
        System.out.println(" 2 | My name is " + a); // My name is Jane

        // Add Two String Variables Together
        String a2 = "Jane";
        String b2 = "My name is ";
        System.out.println(" 3 | " + b2 + a2); // My name is Jane

        // Add Two Number Variables
        int a3 = 2;
        int b3 = 3;
        System.out.print(" 4 | ");
        System.out.println(a3 + b3); // 5

        // Divide Two Number Variables
        int a4 = 12;
		int b4 = 3;
        System.out.print(" 5 | ");
		System.out.println(a4 / b4); // 4

        // Add Two Variables with Extra Variable c
        int a5 = 2;
        int b5 = 3;
        System.out.println(" 6 | a is " + a5 + ", and b is " + b5); // a is 2, and b is 3
        int c5 = a5 + b5;
        System.out.println("   | The sum a + b is " + c5); // The sum a + b is 5

        // Incrementing a Variable
        int a6 = 2;
        a6 = a6 + 3;
        System.out.println(" 7 | " + a6); // 5

        // Incrementing a Variable Using Shorthand (1)
        int a7 = 2;
        a7 += 3;
        System.out.println(" 8 | " + a7); // 5

        // Incrementing a Variable Using Shorthand (2)
        int a8 = 2;
        a8++;
        System.out.println(" 9 | " + a8); // 3

        // Decrementing a Variable
        int a9 = 5;
        a9 = a9 - 3;
        System.out.println("10 | " + a9); // 2

        // Decrementing a Variable Using Shorthand (1)
        int a10 = 5;
        a10 -= 3;
        System.out.println("11 | " + a10); // 2

        // Decrementing a Variable Using Shorthand (2)
        int a11 = 5;
        a11--;
        System.out.println("12 | " + a11); // 4

        // Using a Variable in an if Statement
        int temperature = 25;
        System.out.println("13 | Temperature: " + temperature + "°C"); // Temperature: 25°C
        if (temperature > 20) {
            System.out.println("   | It is warm"); // It is warm
        } else {
            System.out.println("It is not warm");
        }
    }
}

// EOF
