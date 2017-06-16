#Solution for "Explosive Sum" 4 kyu
#https://www.codewars.com/kata/52ec24228a515e620b0005ef

def exp_sum(n):
    if n == 0:
        return 1
    return sum([partition(n, largest) for largest in range(1, n + 1)])

cache = {}

def partition(num, largest):
    """Number of partitions of num where largest partition = largest"""
    if (num, largest) not in cache:
        if num == largest:
            cache[(num, largest)] = 1
        result = 0
        #First partition size is largest. There can be more than one paritions of this size
        first = largest
        while first <= num:
            rest = num - first
            if rest == 0 or rest == 1:
                #There's nothing left to partition, or it's the trivial case, so this one is done.
                result += 1
                break
            #The next partition must be less than largest, so can range over 1 <= l < largest
            result += sum([partition(rest, l) for l in range(1, min(rest + 1, largest))])
            first += largest
        cache[(num, largest)] = result
    return cache[(num, largest)]
