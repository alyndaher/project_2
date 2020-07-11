import numpy as np
import json
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify

# Database Setup

engine = create_engine("sqlite:///tourism_db.db")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the tables
Arrival = Base.classes.arrival
Departure = Base.classes.departure
Expenditure = Base.classes.expenditure


#Flask Setup

app = Flask(__name__)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/arrival<br/>"
        f"/api/departure<br/>"
        f"/api/expenditure"
    )


@app.route("/api/arrival")
def arrivals():
    session = Session(engine)

    results1 = session.query(Arrival.COUNTRY, Arrival.YEAR, Arrival.ARRIVAL).all()

    session.close()

    country_arrivals = []
    for COUNTRY, YEAR, ARRIVAL in results1:
        arrival_dict = {}
        arrival_dict['Country Name'] = COUNTRY
        arrival_dict['Year'] = YEAR
        arrival_dict['Arrival (Thousands)'] = ARRIVAL
        country_arrivals.append(arrival_dict)
    
    #create json arrival file
    arrival_file = open("arrival.json", "w")
    json.dump(country_arrivals, arrival_file, indent = 4, sort_keys = False)
    arrival_file.close()
    
    return jsonify(country_arrivals)

    


@app.route("/api/departure")
def departures():
    session = Session(engine)

    results2 = session.query(Departure.COUNTRY, Departure.YEAR, Departure.DEPARTURE).all()

    session.close()

    country_departures = []
    for COUNTRY, YEAR, DEPARTURE in results2:
        departure_dict = {}
        departure_dict['Country Name'] = COUNTRY
        departure_dict['Year'] = YEAR
        departure_dict['Departures (Thousands)'] = DEPARTURE
        country_departures.append(departure_dict)
    
    #create json departure file
    departure_file = open("departure.json", "w")
    json.dump(country_departures, departure_file, indent = 4, sort_keys = False)
    departure_file.close()
    
    return jsonify(country_departures)

@app.route("/api/expenditure")
def expenditures():
    session = Session(engine)

    results3 = session.query(Expenditure.COUNTRY, Expenditure.YEAR, Expenditure.EXPENDITURE).all()

    session.close()

    country_expenditure = []
    for COUNTRY, YEAR, EXPENDITURE in results3:
        expenditure_dict = {}
        expenditure_dict['Country Name'] = COUNTRY
        expenditure_dict['Year'] = YEAR
        expenditure_dict['Expenditures (Millions)'] = EXPENDITURE
        country_expenditure.append(expenditure_dict)

    #create json departure file
    expenditure_file = open("expenditure.json", "w")
    json.dump(country_expenditure, expenditure_file, indent = 4, sort_keys = False)
    expenditure_file.close()
    
    
    return jsonify(country_expenditure)



if __name__ == "__main__":
    app.run(debug=True)