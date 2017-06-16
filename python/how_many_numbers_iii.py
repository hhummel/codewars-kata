#Solution for "How Many Numbers III" 4 kyu
#https://www.codewars.com/kata/5877e7d568909e5ff90017e6

def find_all(sum_dig, digs):
    #Corner cases
    if digs == 0 or (digs == 1 and (sum_dig > 9 or sum_dig == 0)) :
        return result
    if digs == 1:
        return [1, sum_dig, sum_dig]

    #Recursive function for find_all where first number is first_dig
    def find(sum_dig, digs, first_dig, current):
        new_current = list(current)
        new_current.append(first_dig)
        new_sum = sum_dig - first_dig
        new_digs = digs - 1

        if new_digs == 1:
            if new_sum >= new_current[-1] and new_sum < 10:
                new_current.append(new_sum)
                str_ = ''.join([str(i) for i in new_current])
                result.append(int(str_))
        else:
            limit = max(9, new_sum//new_digs)
            for d in range(first_dig, limit + 1):
                find(new_sum, new_digs, d, new_current)
        return result

    result_all = []

    for i in range(1, sum_dig//digs + 1):
        #Make a closure so find doesn't have side effects. 
        #Use fold or reduce to get rid of mutable result_all
        result = []
        result_all += find(sum_dig, digs, i, [])
    if result_all:
        return [len(result_all), min(result_all), max(result_all)]
    return result_all
