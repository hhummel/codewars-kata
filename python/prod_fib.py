#Solution for "Product of consecutive Fib numbers" 5 kyu
#https://www.codewars.com/kata/5541f58a944b85ce6d00006a

def productFib(prod):
    fib0 = 0
    fib1 = 1
    flag = False
    
    while fib0 * fib1 < prod:
        fib0, fib1 = fib1, fib1 + fib0
        
    if fib0 * fib1 == prod:
        flag = True
        
    return [fib0, fib1, flag] 
