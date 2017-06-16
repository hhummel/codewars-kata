#Solution for "IQ Test"
#https://www.codewars.com/kata/552c028c030765286c00007d

def iq_test(numbers):
    #Helper function to find first occurence of n in list. No error check.
    def find_num(numbers, n):
        for count, number in enumerate(numbers):
            if number == n:
                return count + 1
        
    #Make a list of 0's for evens and 1's for odds from a string of numbers    
    numbers_bool = [int(number) % 2 for number in numbers.split()]
    #Total the list, if there is one odd, sum=1
    total_bool = sum(numbers_bool)
    #Apply the helper with the appropriate number for odd or even
    if total_bool == 1:
        #looking for odd number
        return find_num(numbers_bool, 1)
    else:
        #Looking for even number
        return find_num(numbers_bool, 0)
