
# dealer: 1
# player: 1
# each player get two cards to start, including the dealer
# if total value of cards is less than 21, can ask for another card
# if total value of cards is over 21, lose
# if everone lose but only one play survive - that person wins
# if the dealer total value is less than any of the players, keep drawing card till over 21 or the rest of the players
# asign values of cards: A can be (1,11), face cards(i.e. J, Q, K) will be 10
# create classes: player, dealer, card, deck
import random
deck =["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
print(random.choice(deck))


