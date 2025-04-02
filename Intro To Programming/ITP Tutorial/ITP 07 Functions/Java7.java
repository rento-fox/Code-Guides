public class Java7 {
    public static void main(String[] args) {
        System.out.println("Hello Java.java"); // Hello Java.java

        // Calling a function
        System.out.println(convertToCelsius(50)); // 10.0
    }

    public static double convertToCelsius(double fahrenheit) {
        double celsius = (fahrenheit - 32) * 5.0 / 9.0;
        return celsius;
    }
}

// EOF
