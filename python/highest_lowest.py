#Solution for "Highest and Lowest" 7 kyu
#https://www.codewars.com/kata/554b4ac871d6813a03000035

def high_and_low(numbers):
    s = sorted([int(n) for n in numbers.split(" ")])
    return " ".join([str(s[-1]), str(s[0])])
