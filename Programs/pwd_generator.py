import random

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
symbols = "@#_&-+*!?[]{}"

chars = lower + upper + numbers + symbols

while True:
    length = input("Enter the length of the password (or type 'exit' to stop): ")

    if length.lower() == 'exit':
        break

    try:
        length = int(length)
        password = "".join(random.sample(chars, length))
        print("Generated Password:", password)
    except ValueError:
        print("\nInvalid input. Please enter a valid integer for the password length.")
