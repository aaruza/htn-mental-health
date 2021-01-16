from flask import Flask
import sqlalchemy

app = Flask(__name__)

engine = sqlalchemy.create_engine('postgres://aaron:lxS7zu03CFHvhExE@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/serene-mule-276.defaultdb?sslmode=verify-full&sslrootcert=/cc-ca.crt')

@app.route('/api/journal', methods=['POST', 'GET'])
def journal_entries():
    if request.method == 'POST':
        pass
    else:
        return {

        }

