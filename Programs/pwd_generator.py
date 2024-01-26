import random

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
symbols = "@#_&-+*!?[]{}"

chars = lower + upper + numbers + symbols

# Loop for keep running the program until the user exit

while True:
    length = input("Enter the length of the password (or type 'exit' to stop): ")

    if length.lower() == 'exit':
        break

    # Program stops if user input is "exit"
    
    try:
        length = int(length)
        password = "".join(random.sample(chars, length))
        print("Generated Password:", password)
    except ValueError:
        print("Invalid input. Please enter a valid number for the password length. (Eg: 6)")
