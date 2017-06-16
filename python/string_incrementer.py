#Solution for "String Incrementer" 5 kyu
#https://www.codewars.com/kata/54a91a4883a7de5d7800009c


def increment_string(strng):
    import re
    match_obj = re.match(r'^(.*?)([0]*)(\d*?)$', strng)

    front = match_obj.group(1)
    zeros = match_obj.group(2)
    back = match_obj.group(3)

    #Back is either empty or a string integer
    if back == '':
        back_inc = '1'
    else:
        back_inc = str(int(back) + 1)

    #Simple case
    if len(zeros) == 0:
        return front + back_inc

    #Special cases like "Agent007" and "Agent009" and "Agent00" has to keep correct number of 0's
    offset = len(back_inc) - len(back)
    return front + zeros[offset:] + back_inc
