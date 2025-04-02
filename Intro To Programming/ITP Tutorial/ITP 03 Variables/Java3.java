public class Java3 {
    public static void main(String[] args) {
        System.out.println("Hello Java.java"); // Hello Java.java

        // Creating a variable
        String favAnimal = "turtles";
        System.out.println("I like " + favAnimal); // I like turtles

        // Use a variable in a string
        String string = "Jane";
        System.out.println("My name is " + string); // My name is Jane

        // Add two string variables together
        String a = "John";
        String b = "My name is ";
        System.out.println(b + a); // My name is John

        // Adding two numbers
        int int1 = 2;
        int int2 = 3;
        System.out.println(int1 + int2); // 5

        // Extra variable to hold the sum
        int num1 = 2;
        int num2 = 3;
        System.out.println("num1 is " + num1 + ", and num2 is " + num2); // num1 is 2, and num2 is 3
        int sum = num1 + num2;
        System.out.println("The sum num1 + num2 is " + sum); // The sum num1 + num2 is 5

        // Update the value by adding 1
        int number = 2;
        number = number + 1;
        System.out.println(number); // 3

        // Decrement a value by 3
        int number2 = 5;
		number2 -= 3;
		System.out.println(number2); // 2

        // Variable in an if statement
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
