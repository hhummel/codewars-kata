#Solution for "Can you get the loop?" 3 kyu
#https://www.codewars.com/kata/52a89c2ea8ddc5547a000863

def loop_size(node):
    index = 1
    dict = {node: index}
    node_next = node.next
    while node_next not in dict:
        index += 1
        dict[node_next] = index
        node_next = node_next.next
    return index + 1 - dict[node_next]
