#!/usr/bin/python3
def search_replace(my_list, search, replace):
    if my_list is None:
        return
    n_list = my_list[:]
    for idx, c in enumerate(n_list):
        if c == search:
            n_list[idx] = replace
        return n_list
