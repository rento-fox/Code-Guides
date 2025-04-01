import java.util.Random;

public class Java4 {
    public static void main(String[] args) {
        System.out.println("Hello Java.java"); // Hello Java.java

        // if else
        Random random = new Random();
        int dice = random.nextInt(6) + 1;    
        System.out.println("You rolled a " + dice); // You rolled a (number between 1-6)
        if (dice == 6) {
            System.out.println("You got 6!🥳"); // You got 6!🥳
        } else {
            System.out.println("Try again"); // Try again
        }

        // else if
        int age = 15;
        System.out.println("Age: " + age); // Age: 15
        if (age < 13) {
            System.out.println("You are a child");
        } else if (age < 20) {
            System.out.println("You are a teenager"); // You are a teenager
        } else {
            System.out.println("You are an adult");
        }

        // Nested if statements
        int age2 = 19;
        System.out.println("Age: " + age2); // Age: 19
        if (age2 < 13) {
            System.out.println("You are a child");
        } else if (age2 < 20) {
            System.out.println("You are a teenager"); // You are a teenager
            if (age2 > 17) {
                System.out.println("and an adult!"); // and an adult!
            }
        } else {
            System.out.println("You are an adult");
        }
    }
}

// EOF
