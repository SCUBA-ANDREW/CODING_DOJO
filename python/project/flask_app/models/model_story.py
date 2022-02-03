from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import model_user
from flask_app import app, DATABASE

class Story:
    def __init__(self,data):
        self.id = data['id']
        self.site = data['site']
        self.fish_saw = data['fish_saw']
        self.comment = data['comment']
        self.date = data['date']
        self.user_id = data['user_id']
        self.problem = data['problem']
        self.pic=data['pic']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    @property
    def user(self):
        return model_user.User.get_one({'id':self.user_id})
    #C
    @classmethod #query, call the database, return
    def create(cls,data:dict) -> int:
        query = 'INSERT INTO stories (site, fish_saw, comment, user_id,date,pic) VALUES (%(site)s, %(fish_saw)s, %(comment)s, %(user_id)s,%(date)s,%(pic)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    #R
    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM stories;'
        results = connectToMySQL(DATABASE).query_db(query)
        if results:
            all_stories = []
            for story in results:
                all_stories.append( cls(story) )
            return all_stories
        return []

    @classmethod
    def get_one(cls , data:dict)->list:
        query = 'SELECT * FROM stories WHERE id= %(id)s;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            return cls(results[0])
        return []

    #U
    @classmethod
    def update_one(cls, data:dict)->list:
        query = 'UPDATE stories SET site = %(site)s, fish_saw = %(fish_saw)s, comment = %(comment)s, %(user_id)s, date=%(date)s,pic=%(pic)s WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query, data)
    

    #D
    @classmethod
    def delete_one(cls, data:dict)->None:
        query = 'DELETE FROM stories WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query,data)