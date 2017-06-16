#Solution for "Decode the Morse Code, Advanced" 4 kyu
#https://www.codewars.com/kata/54b72c16cd7f5154e9000457

def decodeBits(bits):
    # ToDo: Accept 0's and 1's, return dots, dashes and spaces
    trimmed = trim(bits)
    bits = rescale(trimmed)
    print(bits)
    print(bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', ''))
    return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '')

def decodeMorse(morseCode):
    # ToDo: Accept dots, dashes and spaces, return human-readable message
    message = [];
    previous = None;
    tokens = [];

    for i in range(len(morseCode)):
        token = morseCode[i]
        if previous == 2 and token != ' ':
            message.append(" ")
        if i == len(morseCode) - 1:
            if token != ' ':
                tokens.append(token)
            message.append(MORSE_CODE[''.join(tokens)])
            return ''.join(message)
        if token != ' ':
            tokens.append(token)
            previous = 0
        if token == ' ':
            if previous == 0:
                message.append(MORSE_CODE[''.join(tokens)])
                tokens = []
            previous += 1
    return ''

def trim(bits):
    """Trim leading and trailing zeros, return as a list"""
    import re
    match_obj = re.match(r'0*(1[01]*1|1)0*', bits) 
    trimmed = match_obj.group(1) if match_obj else ''
    return list(trimmed)

def rescale(list_):
    """Figure out scaling factor and return a rescaled string"""
    if not list_:
        return ''

    #First figure out the scale.  Make a dictionary keyed by bits, and holding a set for the lengths encountered.
    counts = {'0': set(), '1': set()}
    index = 1
    value = list_[0]
    for i in range(1, len(list_)):
        if list_[i] == value:
            index += 1
        else:
            counts[value].add(index)
            index = 1
            value = list_[i]
    counts[value].add(index)

    #Next infer the scale factor bases on observed lengths. With both dashes and dots, size of dot gives scale
    if len(counts['1']) == 2:
        scale = min(list(counts['1']))

    ##Only dashes or dots, not both. If all three pauses present, the shortest gives the scale
    elif len(counts['0']) == 3:
        scale = min(list(counts['0']))

    #If only two pauses present, find scale from the ratio of the pauses
    elif len(counts['0']) == 2:
        min_ = min(list(counts['0']))
        max_ = max(list(counts['0']))
        scale = min_ if max_ / min_ == 3 or max_ / min_ == 7 else min_ / 3

    #Ambiguous if there are no pauses so assume dot
    elif len(counts['0']) == 0:
        scale = counts['1'].pop() 

    #One kind of signal and one kind of pause
    else:
        sig = counts['1'].pop()
        pause = counts['0'].pop()
        #If they are the same assume dot
        if sig == pause:
            scale = sig
        #If pause is shorter it must be the space between letters and therefore the scale
        elif sig > pause:
            scale = pause
        #Pause is longer than sig.  If sig = 1 , pause is either 3 or 7 so sig is the scale.  If sig = 3, pause is 7
        elif pause/sig == 3 or pause/sig == 7:
            scale = sig
        else:
            scale = sig / 3

    #Now rescale list_
    zero_str = '0' * scale
    one_str = '1' * scale
    return ''.join(list_).replace(zero_str, '0').replace(one_str, '1')
