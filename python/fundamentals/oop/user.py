# make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified
# display_user_balance(self) - have this method print the user's name and account balance to the terminal
# eg. "User: Guido van Rossum, Balance: $150
# BONUS: transfer_money(self, other_user, amount) - have this method decrease the user's balance by the amount and add that amount to other other_user's balance

class user:
    def __init__(self , name):
        self.name = name
        self.Balance = 0
    def make_deposit(self , amount):
        self.Balance+=amount
    def make_withdrawal(self, amount):
        self.Balance-=amount
    def display_user_balance(self):
        print(self.Balance)
    def transfer_money(self, other_user, amount):
        self.Balance-=amount
        other_user.Balance+=amount
# Create 3 instances of the User class
guido = user("Guido van Rossum")
monty = user("Monty Python")
michael = user("Michael Jorden")
# Have the first user make 3 deposits and 1 withdrawal and then display their balance
guido.make_deposit(100)
guido.make_deposit(200)
guido.make_deposit(300)
# Have the second user make 2 deposits and 2 withdrawals and then display their balance
monty.make_deposit(50)
monty.make_deposit(550)
monty.make_withdrawal(100)
monty.make_withdrawal(200)
monty.display_user_balance()
# Have the third user make 1 deposits and 3 withdrawals and then display their balance
michael.make_deposit(800)
michael.make_withdrawal(100)
michael.make_withdrawal(200)
michael.make_withdrawal(300)
michael.display_user_balance()
# BONUS: Add a transfer_money method; have the first user transfer money to the third user and then print both users' balances
guido.transfer_money(michael,50)
guido.display_user_balance()
michael.display_user_balance()