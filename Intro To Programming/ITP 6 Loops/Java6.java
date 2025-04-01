import java.util.Random;

public class Java6 {
    public static void main(String[] args) {
        System.out.println("Hello Java.java"); // Hello Java.java

        // while loop dice rolling program
        java.util.Random random = new java.util.Random();
        int dice = random.nextInt(6) + 1;
        System.out.println(dice); // (number between 1-6)
        int count = 1;
        while (dice != 6) {
            dice = random.nextInt(6) + 1;
            System.out.println(dice); // (number between 1-6)
            count++;
        }
        System.out.println("You got 6!"); // You got 6!
        System.out.println("You rolled " + count + " times"); // You rolled (count) times

        // for loop
        for (int i = 5; i > 0; i--) {
            System.out.println(i); // (prints numbers 5 to 1 vertically)
        }
        System.out.println("Liftoff!"); // Liftoff!

        // for-each loop
        String[] myFruits = {"banana", "apple", "orange"};
        for (String fruit : myFruits) {
            System.out.println(fruit); // (prints elements of the array vertically)
        }

        // for loop with a counting variable
        for (int i = 0; i < myFruits.length; i++) {
            System.out.println(myFruits[i]); // (prints elements of the array vertically)
        }

        // do-while loop dice rolling program
        java.util.Random random2 = new java.util.Random();
        int dice2;
        int count2 = 0;
        do {
            dice2 = random2.nextInt(6) + 1;
            System.out.println(dice2); // (number between 1-6)
            count2++;
        } while (dice2 != 6);
        System.out.println("You got 6!"); // You got 6!
        System.out.println("You rolled " + count2 + " times"); // You rolled (count2) times

        // Nested loop (loop inside another loop)
            Random random3 = new Random();
            int numExperiments = 1000;
            int totalRolls = 0;
            for (int i = 0; i < numExperiments; i++) {
                int count3 = 0;
                while (true) {
                    int dice3 = random3.nextInt(6) + 1;
                    count3++;
                    if (dice3 == 6) {
                        break;
                    }
                }
                totalRolls += count3;
            }
            System.out.println("Doing " + numExperiments + " experiments"); // Doing 1000 experiments
            double average = (double) totalRolls / numExperiments;
            System.out.println("Average number of rolls to get 6 is " + average); // Average number of rolls to get 6 is (calculated average)
    }
}

// EOF
