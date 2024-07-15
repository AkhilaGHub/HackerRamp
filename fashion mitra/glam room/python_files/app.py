from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your-database.db'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Import your models here
# from yourapp.models import YourModel

if __name__ == '__main__':
    app.run(debug=True)
