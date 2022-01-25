from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import model_dojo
# model the class after the friend table from our database
DATABASE = 'dojos_and_ninjas_schema'
class Ninja:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.dojo_id = data['dojo_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    @property
    def dojo(self):
        return model_dojo.Dojo.get_one({'id':self.dojo_id})
    #C
    @classmethod #query, call the database, return
    def creatre(cls,data:dict) -> int:
        query = 'INSERT INTO ninjas (first_name, last_name, age) VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    #R
    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM ninjas;'
        results = connectToMySQL('DATABASE').query_db(query)
        if results:
            all_ninjas = []
            for ninja in results:
                all_ninjas.append( cls(ninja) )
            return all_ninjas
        return []

    @classmethod
    def get_one(cls , data:dict)->list:
        query = 'SELECT * FROM ninjas WHERE id= %(id)s;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            return cls(results[0])
        return []

    #U
    @classmethod
    def update_one(cls, data:dict)->list:
        query = 'UPDATE ninjas SET first_name = %(first_name)s, last_name = %(last_name)s, age = %(age)s, %(dojo_id)s WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query, data)
    

    #D
    @classmethod
    def delete_one(cls, data:dict)->None:
        query = 'DELETE FROM ninjas WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query,data)