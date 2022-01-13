import pets

class Ninja:
    # implement __init__( first_name , last_name , treats , pet_food , pet )
    def __init__(self,first_name , last_name , treats , pet_food , pet):
        self.first_name=first_name
        self.last_name=last_name
        self.treats=treats
        self.pet_food=pet_food
        self.pet=pet

    # implement the following methods:
    # walk() - walks the ninja's pet invoking the pet play() method
    def walk(self):
        self.pet.play()
        return self
    # feed() - feeds the ninja's pet invoking the pet eat() method
    def feed(self):
        self.pet.eat()
        return self
    # bathe() - cleans the ninja's pet invoking the pet noise() method
    def bathe(self):
        self.pet.noise()
        return self




# Make an instance of a Ninja and assign them an instance of a pet to the pet attribute.
test=Ninja("firstname","lastname","TR","ptFood",pets.Mega("buddy","cute","needy"))

test.feed().walk().bathe()