// Java

public class Java {
    public static void main(String[] args) {

        // Creating a Variable
        String favAnimal = "turtles";
        System.out.println("I like " + favAnimal); // I like turtles

        // Add a Variable to a String
        String a = "Jane";
        System.out.println("My name is " + a); // My name is Jane

        // Add Two String Variables Together
        String a2 = "Jane";
        String b2 = "My name is ";
        System.out.println(b2 + a2); // My name is Jane

        // Add Two Number Variables
        int a3 = 2;
        int b3 = 3;
        System.out.println(a3 + b3); // 5

        // Divide Two Number Variables
        int a4 = 12;
		int b4 = 3;
		System.out.println(a4 / b4); // 4

        // Add Two Variables with Extra Variable c
        int a5 = 2;
        int b5 = 3;
        System.out.println("a is " + a5 + ", and b is " + b5); // a is 2, and b is 3
        int c5 = a5 + b5;
        System.out.println("The sum a + b is " + c5); // The sum a + b is 5

        // Incrementing a Variable
        int a6 = 2;
        a6 = a6 + 1;
        System.out.println(a6); // 3

        // Incrementing a Variable Using Shorthand
        int a7 = 2;
        a7++;
        System.out.println(a7); // 3

        // Decrementing a Variable Using Shorthand
        int a8 = 5;
		a8 -= 3;
		System.out.println(a8); // 2

        // Using a Variable in an if Statement
        int temperature = 25;
        System.out.println("Temperature: " + temperature + "°C"); // Temperature: 25°C
        if (temperature > 20) {
            System.out.println("It is warm"); // It is warm
        } else {
            System.out.println("It is not warm");
        }
    }
}

// EOF
