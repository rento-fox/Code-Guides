# Python

# Creating a Variable
favAnimal = 'turtles'
print(' 1 | I like ' + favAnimal) # I like turtles

# Add a Variable to a String
a = 'Jane'
print(' 2 | My name is ' + a) # My name is Jane

# Add Two String Variables Together
a = 'Jane'
b = 'My name is '
print(' 3 |', b + a) # My name is Jane

# Add Two Number Variables
a = 2
b = 3
print(' 4 |', a + b) # 5

# Divide Two Number Variables
a = 12
b = 3
print(' 5 |', a / b) # 4.0

# Add Two Variables with Extra Variable c
a = 2
b = 3
print(' 6 | a is ' + str(a) + ', and b is ' + str(b)) # a is 2, and b is 3
c = a + b
print('   | The sum a + b is ' + str(c)) # The sum a + b is 5

# Incrementing a Variable
a = 2
a = a + 3
print(' 7 |', a) # 5

# Incrementing a Variable Using Shorthand
a = 2
a += 3
print(' 8 |', a) # 5

# Decrementing a Variable
a = 5
a = a - 3
print(' 9 |', a) # 2

# Decrementing a Variable Using Shorthand
a = 5
a -= 3
print('10 |', a) # 2

# Using a Variable in an if Statement
temperature = 25
print('11 | Temperature: ' + str(temperature) + '°C') # Temperature: 25°C
if temperature > 20:
    print('   | It is warm') # It is warm
else:
    print('It is not warm')

# EOF
