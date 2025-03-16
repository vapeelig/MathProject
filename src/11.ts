import random

def get_random_ts_code():
    return f"{random.randint(10000, 99999)}{random.choice(['A', 'B', 'C'])}{random.randint(100, 999)}"
