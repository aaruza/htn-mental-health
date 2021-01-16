from flask import Flask, request, flash
import sqlalchemy

from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy.orm
from cockroachdb.sqlalchemy import run_transaction


app = Flask(__name__)
app.config.from_pyfile('app.cfg')
db = SQLAlchemy(app)
sessionmaker = sqlalchemy.orm.sessionmaker(db.engine)


class JournalEntry(db.Model):
    __tablename__ = 'journal'
    id = db.Column('id', db.Integer, primary_key=True)
    email = db.Column(db.String)
    title = db.Column(db.String(60))
    text = db.Column(db.String)
    date = db.Column(db.DateTime)

    def __init__(self, email, title, text):
        self.email = email
        self.title = title
        self.text = text
        self.date = datetime.utcnow()

class Account(db.Model):
    __tablename__ = 'account'
    email = db.Column(db.String, primary_key=True)
    firstname = db.Column(db.String)
    lastname = db.Column(db.String)
    password = db.Column(db.String)
    def __init__(self, email, firstName, lastName, password):
        self.email = email
        self.firstname = firstName
        self.lastname = lastName
        self.password = password

#for signup and getting all accounts
@app.route('/api/account', methods=['POST', 'GET'])
def account():
    if request.method == 'GET':
        values = []
        def callback(session):
            values.extend(session.query(Account).all())
        run_transaction(sessionmaker, callback)
        return str(values)
    else:
        def callback(session):
            entry = Account(request.form['email'], request.form['firstname'], request.form['lastname'], request.form['password'])
            session.add(entry)
        run_transaction(sessionmaker, callback)

        return str(request.form)

@app.route('/api/login') #must be a get request to login
def login():
    user = ""
    def callback(session):
        user = session.query(Account).filter(request.form['email'] == Account.email and request.form['password'] == Account.password)
    if user == "":
        return "User or password is incorrect"
    else:
        return user[0]

@app.route('/api/journal', methods=['POST', 'GET'])
def journal_entries():
    if request.method == 'GET':
        values = []
        def callback(session):
            if request.form['email'] == '':
                values.extend(session.query(JournalEntry).all())
            else:
                values.extend(session.query(JournalEntry).filter(request.form['email'] == JournalEntry.email))
        run_transaction(sessionmaker, callback)
        return str(values)
    else:
        def callback(session):
            entry = JournalEntry(request.form['email'], request.form['title'], request.form['text'])
            session.add(entry)
        run_transaction(sessionmaker, callback)

        return str(request.form)

# @app.route('/api/journal', methods=['POST', 'GET'])
# def journal_entries():
#     if request.method == 'GET':
#         values = []
#         def callback(session):
#             values =  (session.query(JournalEntry).all())
#         run_transaction(sessionmaker, callback)
#         flash('hi')
#         return str(values)
#     else:
#         def callback(session):
#             entry = JournalEntry(request.form['title'], request.form['text'])
#             session.add(entry)
#         run_transaction(sessionmaker, callback)

#         return str(request.form)

if __name__ == '__main__':
    app.run()