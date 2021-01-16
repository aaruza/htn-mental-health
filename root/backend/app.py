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
    title = db.Column(db.String(60))
    text = db.Column(db.String)
    date = db.Column(db.DateTime)

    def __init__(self, title, text):
        self.title = title
        self.text = text
        self.date = datetime.utcnow()

@app.route('/api/journal', methods=['POST', 'GET'])
def journal_entries():
    if request.method == 'GET':
        values = []
        def callback(session):
            values =  (session.query(JournalEntry).all())
        run_transaction(sessionmaker, callback)
        flash('hi')
        return str(values)
    else:
        def callback(session):
            entry = JournalEntry(request.form['title'], request.form['text'])
            session.add(entry)
        run_transaction(sessionmaker, callback)

        return str(request.form)

if __name__ == '__main__':
    app.run()