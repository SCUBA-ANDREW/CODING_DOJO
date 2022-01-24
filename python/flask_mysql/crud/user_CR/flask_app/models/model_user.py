from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database
DATABASE = 'jan_user_db'
class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    def fullname(self):
        return f'{self.first_name.capitalize()} {self.last_name.capitalize()}'
    #C
    @classmethod #query, call the database, return
    def creatre(cls,data:dict) -> int:
        query = 'INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s, %(last_name)s, %(email)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    #R
    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM users;'
        results = connectToMySQL('DATABASE').query_db(query)
        if results:
            all_users = []
            for user in results:
                all_users.append( cls(user) )
            return all_users
        return []

    @classmethod
    def get_one(cls):
        pass

    #U
    @classmethod
    def update_one(cls):
        pass

    #D
    @classmethod
    def delete_one(cls):
        pass