
height = int(input('Enter your height in feet: '))

if height >= 3:
    handicapped = input('Are you handicapped? (Type yes or no): ')
    
    if handicapped.lower() == 'yes':
        age = int(input('Enter your age: '))
        
        if age <= 12:
            print('Please pay 50 Rs.')
        elif age < 18:
            print('Please pay 100 Rs.')
        else:
            print('Please pay 250 Rs.')
            
    else:
        age = int(input('Enter your age: '))
        
        if age <= 12:
            print('Please pay 150 Rs.')
        elif age < 18:
            print('Please pay 250 Rs.')
        else:
            print('Please pay 500 Rs.')
            
else:
    print("Sorry, you must be at least 3 feet tall to ride.")
