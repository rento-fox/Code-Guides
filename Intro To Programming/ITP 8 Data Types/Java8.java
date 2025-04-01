public class Java8 {
    public static void main(String[] args) {
        System.out.println("Hello Java.java"); // Hello Java.java

        // Check variable data type
        int num = 3;
        String str = "Hello";
        System.out.println(((Object)num).getClass().getName()); // java.lang.Integer
        System.out.println(((Object)str).getClass().getName()); // java.lang.String

        // String data type
        String message = "Hello, World!";
        System.out.println(message); // Hello, World!

        // Integer data type
        int x = 7;
        System.out.println(x); // 7

        // Float data type
        double pi = 3.14f;
        System.out.println(pi); // 3.140000104904175

        // Boolean data type
        boolean bool = true;
        System.out.println(bool); // true

        // Casting data types
        String a = "18";
        int b = Integer.parseInt(a) + 3;
        System.out.println(b); // 21

        // None, or null
        String variable = null;
        System.out.println(variable); // null
    }
}

// EOF
