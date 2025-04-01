print('Hello Python.py') # Hello Python.py

# while loop dice rolling program
import random
dice = random.randint(1,6)
print(dice) # (number between 1-6)
count = 1
while dice != 6:
    dice = random.randint(1,6)
    print(dice) # (number between 1-6)
    count += 1

print('You got 6!') # You got 6!
print('You rolled', count, 'times') # You rolled (count) times

# for loop
for i in range(5, 0, -1):
    print(i) # (prints numbers 5 to 1 vertically)
print('Liftoff!') # Liftoff!

# for-each loop
myFruits = ['banana', 'apple', 'orange']
for fruit in myFruits:
    print(fruit) # (prints elements of the array vertically)

# for loop with a counting variable
for i in range(len(myFruits)):
    print(myFruits[i]) # (prints elements of the array vertically)

# do-while loop dice rolling program
import random
count = 0
while True:
    dice = random.randint(1,6)
    print(dice) # (number between 1-6)
    count += 1
    if dice == 6:
        break

print('You got 6!') # You got 6!
print('You rolled', count, 'times') # You rolled (count) times

# Nested loop (loop inside another loop)
import random
numExperiments = 1000
totalRolls = 0
for i in range(numExperiments):
    count = 0
    while True:
        dice = random.randint(1,6)
        count += 1
        if dice == 6:
            break
    totalRolls += count

print('Doing ' + str(numExperiments) + ' experiments') # Doing 1000 experiments
print('Average number of rolls to get 6 is ' + str(totalRolls/numExperiments)) # Average number of rolls to get 6 is (calculated average)

# EOF
