    Data Types
        Data types are the types of data that can be stored in a variable.

    What is a Data Type?
        A data type is the type of data a variable has, like is it a text or is it a number?
        The data type we set a variable to affects what we can do with the variable.
        
        For example, if we have two variables of a number data type, with values 3 and 4,
        we can use the + operator to add them together, and we get 7.
        But, if we store the two values as text string data types instead, as "3" and "4",
        we get "34" as the result when we use the + operator:

        What data types you have available depends on the programming language you are using, but the most common data types are:
            String (text)
            Integer (whole number)
            Float (decimal number)
            Boolean (true or false)

        In Python and JavaScript, we don't specify the data type when the variable is created,
        because that happens automatically, but in Java and C++, we need to specify the data type when creating a variable.

    Finding the Data Type of a Variable
        If you have a variable, and you want to find out what data type it is,
        most programming languages have a built-in function you can use for that.
        In the code example below, we store the value 3 in a variable named x, and check what type of data it is.
            Python:
                x = 3
                print(type(x))

            JavaScript:
                const x = 3;
                console.log(typeof x);

            Java:
                int x = 3;
                System.out.println(x.getClass().getName());

            C++:
                int x = 3;
                cout << typeid(x).name();

        In the example above, it is very obvious that the variable x is an integer (a whole number).
        But in more complex situations, like when x is an argument to a function,
        it might be important to check what type of data it is before we use it inside the function.

    String Data Type
        A string is a sequence of characters.
        In Python and JavaScript, a string is enclosed in either double quotes "Hello" or single quotes 'Hello'.
        But in Java and C++, strings must be enclosed in double quotes "Hello",
        and they have a separate character data type, where single quotes are used 'H'.
        This is how a value "Hello, World!", of data type string, is assigned to a variable message:
            Python:
                message = 'Hello, World!'
            
            JavaScript:
                const message = 'Hello, World!';

            Java:
                String message = "Hello, World!";

            C++:
                string message = "Hello, World!";

        For strings, the + operator is used to concatenate two strings, merging them into one.
            Python:
                a = 'Hello, '
                b = 'World!'
                message = a + b
            
            JavaScript:
                const a = 'Hello, ';
                const b = 'World!';
                const message = a + b;

            Java:
                String a = "Hello, ";
                String b = "World!";
                String message = a + b;

            C++:
                string a = "Hello, ";
                string b = "World!";
                string message = a + b;

    Integer Data Type
        An integer is a whole number, like 1, 27, -3, etc.
        This is how a value 7, of data type integer, is assigned to a variable a:
            Python:
                a = 7

            JavaScript:
                const a = 7;

            Java:
                int a = 7;

            C++:
                int a = 7;

        When dealing with integers, the + operator is used to add two integers together mathematically:
            Python:
                a = 7
                b = 4
                c = a + b

            JavaScript:
                const a = 7;
                const b = 4;
                const c = a + b;

            Java:
                int a = 7;
                int b = 4;
                int c = a + b;

            C++:
                int a = 7;
                int b = 4;
                int c = a + b;

        Other mathematical operations can also be performed with integers, using operators like -, *, /, etc.

    Float Data Type
        A float is a decimal number, like 3.14, -0.001, 2.71828, etc.
        This is how a value 3.14, of data type float, is assigned to a variable pi:
            Python:
                pi = 3.14

            JavaScript:
                const pi = 3.14;

            Java:
                double pi = 3.14f;

            C++:
                double pi = 3.14;

        The same kind of mathematical operations can be performed
        with floats as with the integer data type, using operators like -, *, /, +, etc.

    Boolean Data Type
        A boolean is a data type that can only have two values: True or False.
        This is how a value True, of data type boolean, is assigned to a variable a:
            Python:
                a = True

            JavaScript:
                const a = true;

            Java:
                boolean a = true;

            C++:
                bool a = true;

        A boolean value is what we get as a result of a comparison between two values, using a comparison operator, like this:
            Python:
                a = 5
                b = 3
                aIsBigger = a > b

            JavaScript:
                const a = 5;
                const b = 3;
                const aIsBigger = a > b;

            Java:
                int a = 5;
                int b = 3;
                boolean aIsBigger = a > b;

            C++:
                int a = 5;
                int b = 3;
                bool aIsBigger = a > b;

        In the code above, since a is greater than b, the variable aIsBigger will be assigned the value True.

    Casting Data Types
        Casting is the process of converting a value from one data type to another.
        This is done using functions specific to the programming language we are using.
        For example, if we have a string variable a that contains a number "18",
        we must cast it to an integer before we can use it in calculations, like this:
            Python:
                a = '18'
                b = int(a) + 3

            JavaScript:
                const a = '18';
                const b = parseInt(a) + 3;

            Java:
                String a = "18";
                int b = Integer.parseInt(a) + 3;

            C++:
                string a = "18";
                int b = stoi(a) + 3;

    None, or Null
        We assign None, or null, to a variable to indicate that it has no value.
        This is how a variable can be assigned None, or null:
            Python:
                a = None
                print(a)        None
                print(type(a))  <class 'NoneType'>

            JavaScript:
                const a = null;
                console.log(a);         // null
                console.log(typeof a);  // object

            Java:
                String s = null;
                System.out.println(s); // null

            C++:
                int* ptr = nullptr;
                if (ptr == nullptr) {
                    cout << "ptr is nullptr (null)"; // ptr is nullptr (null)
                }

        In Java, the null keyword can only be assigned to non-primitive data type variables, like strings or arrays.
        C++ does not have a direct equivalent to null, or None,
        but the nullptr keyword can be used to indicate that a pointer points to nothing.

    Binary Values and Data Types
        In computers, all data is stored as sequences of 0s and 1s.
        The computer needs to know the data type of the data stored to interpret it correctly,
        and to present it to the user in the right way.
        
        So for example, the same binary sequence 1000001 stored in the computer,
        can be interpreted as either the number 65, or the character A, depending on the data type we choose.

EOF
