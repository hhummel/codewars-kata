#Solution for "Snail" 4 kyu
#https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

import numpy as np

def snail(array):
    if len(array[0]) == 0:
        return []
    arr = np.array(array)
    slice_ = arr[:,:]
    result = np.array([])
    while len(slice_) > 1:
        result = np.append(result, get_shell(slice_))
        slice_ = slice_[1:-1, 1:-1]
    if len(slice_) == 1:
        result = np.append(result, slice_[0,0])
    return[int(r) for r in result]

def get_shell(array):
    #Top
    result = array[0].flatten()
    #Right 
    result = np.append(result, array[1:, -1:].flatten())
    #Bottom
    result = np.append(result, array[-1:, :-1].flatten()[::-1])
    #Left
    result = np.append(result, array[1:-1, :1].flatten()[::-1]) 
    return list(result)
