class Pet:
# implement __init__( name , type , tricks ):
    def __init__(self,name , type , tricks) :
        self.name=name
        self.type=type
        self.tricks=tricks
        self.energy=50
        self.health=100
# implement the following methods:
# sleep() - increases the pets energy by 25
    def sleep(self):
        self.health+=50
        return self
# eat() - increases the pet's energy by 5 & health by 10
    def eat(self):
        self.energy+=5
        self.health+=10
        return self
# play() - increases the pet's health by 5
    def play(self):
        self.health+=5
        return self
# noise() - prints out the pet's sound
    def noise(self):
        print("ahhhhhhhhhhhhhhhh")
        return self

class Mega(Pet):
    def __init__(self, name, type, tricks):
        super().__init__(name,type,tricks)
        self.energy=90
        self.health=30
    def jump(self):
        print("ouch")