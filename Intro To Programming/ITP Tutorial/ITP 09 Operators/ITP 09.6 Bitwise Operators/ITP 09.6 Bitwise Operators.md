    Bitwise Operators
        Bitwise operators are used to perform operations on values or variables, one bit at a time.

    What is a Bitwise Operator?
        A bitwise operator is a symbol or keyword that tells the computer
        what operation to perform, bit by bit, on values or variables.

        The most common bitwise operators are:
            &   (Bitwise AND)
            |   (Bitwise OR)
            ^   (Bitwise XOR)
            ~   (Bitwise NOT)
            <<  (Left shift)
            >>  (Right shift)

        All data in the computer is stored as sequences of 0s and 1s.
        This makes it possible to use bitwise operators to manipulate the data.

        In the example below, we use the bitwise OR operator | to combine two variables stored in binary format:
            Python:
                a = 0b1010
                b = 0b0110
                result = a | b
                print(bin(result)) // 0b1110

            JavaScript:
                const a = 0b1010;
                const b = 0b0110;
                const result = a | b;
                console.log(result.toString(2)); // 1110

            Java:
                int a = 0b1010;
                int b = 0b0110;
                int result = a | b;
                System.out.println(Integer.toBinaryString(result)); // 1110

            C++:
                int a = 0b1010;
                int b = 0b0110;
                int result = a | b;
                cout << bitset<4>(result); // 1110

EOF
