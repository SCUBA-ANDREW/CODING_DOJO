class User:
    def __init__(self,name):
        self.name=name
        self.account=BankAccount(0.01,0)
    def example_method(self):
        self.account.deposit(100)		# we can call the BankAccount instance's methods
        print(self.account.balance)		# or access its attributes
        return self
    def make_deposit(self, amount):
        self.account.balance+=amount
        return self
    def make_withdrawal(self,amount):
        if self.account.balance < amount:
            print("insufficient balance")
        else:
            self.account.balance-=amount
            return self
    def display_user_balance(self):
        print("{}'s {} account balance is:{}".format(self.name,self.account.acc_id,self.account.balance))
        return self

class BankAccount:
    account_cnt=0
    def __init__(self, int_rate,balance):
        self.int_rate=int_rate
        self.balance=balance
        # SENSEI BONUS: Allow a user to have multiple accounts; update methods so the user has to specify which account they are withdrawing or depositing to
        BankAccount.account_cnt+=1
        self.acc_id=BankAccount.account_cnt
    def deposite(self, amount):
        self.balance+=amount
        return self
    def withdraw(self, amount):
        if self.balance < amount:
            print("insufficient balance")
        else:
            self.balance-=amount
            return self

test_user1 = User("tst_U1")

test_user1.make_withdrawal(20)

test_user1.make_deposit(10000).display_user_balance()

test_user1_sec = User("tst_U1")

test_user1_sec.display_user_balance()