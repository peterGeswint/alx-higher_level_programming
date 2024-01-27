#!/usr/bin/pyton3

if __name__ = == "__main__":
    ""Print the addition of all arguments.""

    import sys

    total = 0
    for i in range(len(sys.agrv) - 1):
        total += int(sys.argv[i + 1])
    print("{}".format(total))
