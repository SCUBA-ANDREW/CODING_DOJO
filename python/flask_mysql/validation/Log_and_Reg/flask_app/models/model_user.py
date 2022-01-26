from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import bcrypt,DATABASE
from flask import flash,session
import re

EMAIL_REGEX=re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.pw=data['pw']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    #C
    @classmethod #query, call the database, return
    def create(cls,data:dict) -> int:
        query = 'INSERT INTO users (first_name, last_name, email,pw) VALUES (%(first_name)s, %(last_name)s, %(email)s,%(pw)s);'
        return connectToMySQL(DATABASE).query_db(query, data)

    #R
    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM users;'
        results = connectToMySQL(DATABASE).query_db(query)
        if results:
            all_users = []
            for user in results:
                all_users.append( cls(user) )
            return all_users
        return False

    @classmethod
    def get_one(cls , data:dict)->list:
        query = 'SELECT * FROM users WHERE id= %(id)s;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            return cls(results[0])
        return False

    @classmethod
    def get_one_by_email(cls , data:dict)->list:
        query = 'SELECT * FROM users WHERE email= %(email)s;'
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            return cls(results[0])
        return False

    #U
    @classmethod
    def update_one(cls, data:dict)->list:
        query = 'UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query, data)
    

    #D
    @classmethod
    def delete_one(cls, data:dict)->None:
        query = 'DELETE FROM users WHERE id = %(id)s;'
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validate_reg(data:dict)->bool:
        is_valid=True

        if len(data['first_name'])<2:
            flash("First name must have more than 2 characters.", "err_reg_first")
            is_valid=False

        if len(data['last_name'])<2:
            flash("Last name must have more than 2 characters.", "err_reg_last")
            is_valid=False

        if len(data['email'])<2:
            flash("Email must have more than 2 characters.", "err_reg_em")
            is_valid=False

        if len(data['pw'])<2:
            flash("Password must have more than 2 characters.", "err_reg_pw")
            is_valid=False

        if len(data['confirm_pw'])<2:
            flash("Confirm Password must have more than 2 characters.", "err_reg_cpw")
            is_valid=False
        elif data['confirm_pw'] !=data['pw']:
            flash("Confirm Password does not match with password", "err_reg_cpw")
            is_valid=False

        return is_valid

    @staticmethod
    def validate_login(data:dict)->bool:
        is_valid=True
        if len(data['email'])<2:
            flash("Invalid email/password.", "err_login")
            is_valid=False

        elif not EMAIL_REGEX.match(data['email']):
            flash("Invalid email/password.", "err_login")
            is_valid=False
        else:
            user =User.get_one_by_email(data)
            if user:
                if not bcrypt.check_password_hash(user.pw, data['pw']):
                    flash("Invalid email/password.", "err_login")
                    is_valid=False
                else:session['uuid']=user.id
            else:
                flash("Invalid email/password.", "err_login")
                is_valid=False
        return is_valid

