from . import card

class Deck:


    def __init__( self ):
        # suits = [ "spades" , "hearts" , "clubs" , "diamonds" ]
        self.cards = []
        face =["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        # for s in suits:
        for i in range(1,14):
            str_val = ""
            if i == 11:
                str_val = "Ace"
            elif i == 11:
                str_val = "Jack"
            elif i == 12:
                str_val = "Queen"
            elif i == 13:
                str_val = "King"
            else:
                str_val = str(i)
            self.cards.append( card.Card( i , str_val ) )

    def show_cards(self):
        for card in self.cards:
            card.card_info()

