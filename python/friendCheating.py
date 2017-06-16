#Solution for "Is my Friend Cheating" 5 kyu
#https://www.codewars.com/kata/5547cc7dcad755e480000004

def removNb(n):
    total = (n+1)*n/2
    return [(i, (total - i)/(i + 1)) for i in range(1, n +1 ) 
        if (total - i)%(i + 1) == 0 and (total - i)/(i + 1) <= n]
