#Solution to "The Millionth Fibonacci Kata" 3 kyu
#https://www.codewars.com/kata/53d40c1e2f13e331fc000c26

#The key idea is you can calculate M * [f1, f2] = [f3, f4] with transform matrix matrices[1]
#You can get [f5, f6] by applying the transformation squared, (matrices[2]), and on to the desired 
#Fibonacci number and associated power.  Use binary spltting to reduce the number of computations to
#O(ln n) and dynamic programming to eliminate redundant multiplcations.  n = 1500000 caches only 38
#transformation matrices.

#Cache transform matrices
matrices = {1: [[1, 1], [1, 2]], 2: [[2, 3], [3, 5]]}
fibs = {0: 0, 1: 1, 2: 1}

def fib(n):
    """Get nth fibonacci number"""
    if n < 0 and n % 2 == 0:
        return -fib(-n)
    if n < 0 and n % 2 != 0:
        return fib(-n)
    if n in fibs:
        return fibs[n]
    try:
        m = power(matrices[1], (n - 1) / 2)
    except Exception:
        print("Failed with n = ", n)
        return 0
    return get_fib(m, (n - 1) % 2)
    
def mult(m, n):
    """Multipy 2 2x2 matrices"""
    return [[m[0][0] * n[0][0] + m[0][1] * n[1][0], m[0][0] * n[0][1] + m[0][1] * n[1][1]],
            [m[1][0] * n[0][0] + m[1][1] * n[1][0], m[1][0] * n[0][1] + m[1][1] * n[1][1]]]

def power(m, n):
    """ Compute matrix m raised to nth power using binary split"""
    if n not in matrices:
        lower = n / 2
        upper = n / 2 + n % 2
        matrices[n] = mult(power(m, lower), power(m, upper))
    return matrices[n]

def get_fib(m, i):
    """Get fibonacci i from transform matrix m"""
    f = m[i][0]*fibs[1] + m[i][1]*fibs[2]
    return f
    return f
