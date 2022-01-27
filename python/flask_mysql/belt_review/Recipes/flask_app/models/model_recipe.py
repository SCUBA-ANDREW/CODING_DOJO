from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_user
from flask_app import app, DATABASE
# model the class after the friend table from our database
class Recipe:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.data_made = data['data_made']
        self.user_id = data['user_id']
        self.under_thrty_min = data['under_thrty_min']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    @property
    def user(self):
        return model_user.User.get_one({'id':self.user_id})
    #C
    @classmethod #query, call the database, return
    def create(cls,data:dict) -> int:
        query = 'INSERT INTO recipes (name, description, instructions, user_id,data_made,under_thrty_min) VALUES (%(name)s, %(description)s, %(instructions)s, %(user_id)s,%(data_made)s,%(under_thrty_min)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    #R
    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM recipes;'
        results = connectToMySQL(DATABASE).query_db(query)
        if results:
            all_recipes = []
            for recipe in results:
                all_recipes.append( cls(recipe) )
            return all_recipes
        return []

    @classmethod
    def get_one(cls , data:dict)->list:
        query = 'SELECT * FROM recipes WHERE id= %(id)s;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            return cls(results[0])
        return []

    #U
    @classmethod
    def update_one(cls, data:dict)->list:
        query = 'UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, %(user_id)s WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query, data)
    

    #D
    @classmethod
    def delete_one(cls, data:dict)->None:
        query = 'DELETE FROM recipes WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query,data)