    Logical Operators
        Logical operators are used to combine conditional statements.

    What is a Logical Operator?
        A logical operator is one or two symbols or a keyword that tells the computer how to combine conditional statements.
        The result of using a logical operator is a boolean value (true or false).

        The most common logical operators are:
            &&  (Logical AND)
            ||  (Logical OR)
            !   (Logical NOT)
        
        In the example below, we use the && operator to combine two conditions:
            Python:
                print(10 == 5 and 10 != 5) # False

            JavaScript:
                console.log(10 == 5 && 10 != 5); // false

            Java:
                System.out.println(10 == 5 && 10 != 5); // false

            C++:
                cout << (10 == 5 && 10 != 5); // 0
        
        In the example above, the left side 10 == 5 is false, and the right side 10 != 5 is true.
        The logical operator && (AND) requires both sides to be true for the result to be true, so the result is false.

EOF
