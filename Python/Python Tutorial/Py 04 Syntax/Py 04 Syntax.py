# Python Syntax
    # As we learned in the previous page, Python syntax can be executed by writing directly in the Command Line:
        # >>> print("Hello, World!")
        # Hello, World!

    # Or by creating a python file on the server, using the .py file extension, and running it in the Command Line:
        # C:\(path to the folder)>python myfile.py

# Python Indentation
    # Indentation refers to the spaces at the beginning of a code line.
    # Where in other programming languages the indentation in code is for readability only,
    # the indentation in Python is very important.
    
    # Python uses indentation to indicate a block of code:
if 5 > 2:
    print("Five is greater than two!") # Five is greater than two!

    # Python will give you an error if you skip the indentation:
    # Syntax Error:
# if 5 > 2:
# print("Five is greater than two!") # IndentationError: expected an indented block after 'if' statement on line 20

    # The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one.
if 5 > 2:
 print("Five is greater than two!") # Five is greater than two!
if 5 > 2:
        print("Five is greater than two!") # Five is greater than two!

    # You have to use the same number of spaces in the same block of code, otherwise Python will give you an error:
# if 5 > 2:
#  print("Five is greater than two!") 
        # print("Five is greater than two!") # IndentationError: unexpected indent

# Python Variables
    # In Python, variables are created when you assign a value to it:
    # Variables in Python:
x = 5
y = "Hello, World!"
print(x, y) # 5 Hello, World!

    # Python has no command for declaring a variable.

# Comments
    # Python has commenting capability for the purpose of in-code documentation.
    # Comments start with a #, and Python will render the rest of the line as a comment:
    # Comments in Python:
    # This is a comment.
print("Hello, World!") # Hello, World!

# EOF
