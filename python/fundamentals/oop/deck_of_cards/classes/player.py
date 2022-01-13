import random
# define a dictionary contains deck and their value
deck={"A":[1,11],"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"J":10,"Q":10,"K":10}

# print((random.choice(list(deck.values()))))
# print((random.choice(list(deck.items()))))


# create a class for player
class Player:
    def __init__(self):
        self.cards=[]
        self.value=0
        self.cards.append(random.choice(list(deck.items())))
        self.cards.append(random.choice(list(deck.items())))

    # create fuction to draw cards 
    def draw(self):
        for i in range(0,len(self.cards)):
            print("testing")


        # self.cards.append(random.choice(list(deck.items())))
        return self
    
test = Player()
print(test.cards)
test.draw
print(len(test.cards))