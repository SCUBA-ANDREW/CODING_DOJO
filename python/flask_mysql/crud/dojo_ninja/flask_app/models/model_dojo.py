from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_ninja
# model the class after the friend table from our database
DATABASE = 'dojos_and_ninjas_schema'
class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    #C
    @classmethod #query, call the database, return
    def create(cls,data:dict) -> int:
        query = 'INSERT INTO dojos (name) VALUES (%(name)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    #R
    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM dojos;'
        results = connectToMySQL(DATABASE).query_db(query)
        if results:
            all_dojos = []
            for dojo in results:
                all_dojos.append( cls(dojo) )
            return all_dojos
        return []

    @classmethod
    def get_one(cls , data:dict)->list:
        query = 'SELECT * FROM dojos WHERE id= %(id)s;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            return cls(results[0])
        return []

    @classmethod
    def get_one_with_ninja(cls , data:dict)->object:
        query = 'SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id= %(id)s;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        if results:
            dojo = cls(results[0])
            if not results[0]['ninjas.id']:
                return dojo
            
            dojo.ninjas =[]
            for dict in results:
                data={
                    'id':dict['ninjas.id'],
                    'created_at':dict['ninjas.created_at'],
                    'updated_at':dict['ninjas.updated_at'],
                    'first_name':dict['first_name'],
                    'last_name':dict['last_name'],
                    'age':dict['age'],
                    'dojo_id':dict['dojo_id']
                }
                ninja=model_ninja.Ninja(data)
                dojo.ninjas.append(ninja)
            return dojo
        return []

    #U
    @classmethod
    def update_one(cls, data:dict)->list:
        query = 'UPDATE dojos SET name = %(name)s WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query, data)
    

    #D
    @classmethod
    def delete_one(cls, data:dict)->None:
        query = 'DELETE FROM dojos WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query,data)