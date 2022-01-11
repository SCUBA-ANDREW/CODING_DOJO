
class BankAccount:
    def __init__(self, int_rate, balance): 
        self.balance = balance
        self.int_rate=int_rate

    def deposit(self, amount):
        self.balance+=amount
        return self
    def withdraw(self, amount):
        if self.can_withdraw:
            self.balance-=amount
        else:
            self.balance-=5
            print("insufficient funds: Charging a $5 fee")
        return self
    def display_account_info(self):
        print("Balance: ${}".format(self.balance))
        return self
    def yield_interest(self):
        if self.balance >0:
            self.balance *= (1+self.int_rate)
        else:
            print("insufficient balance")
        return self
    @staticmethod
    def can_withdraw(balance,amount):
        if (balance-amount)<0:
            return False
        else:
            return True
# Create 2 accounts
first_acc = BankAccount(0.3,400)
second_acc = BankAccount(0.5,900)

# To the first account, make 3 deposits and 1 withdrawal, then yield interest and display the account's info all in one line of code (i.e. chaining)
first_acc.deposit(300).deposit(100).deposit(200).withdraw(500).yield_interest().display_account_info()
# To the second account, make 2 deposits and 4 withdrawals, then yield interest and display the account's info all in one line of code (i.e. chaining)
second_acc.deposit(250).deposit(300).withdraw(50).withdraw(50).withdraw(50).withdraw(50).yield_interest().display_account_info()