"""
@author  : Rakesh Roshan
@contact : rakesh.roshan@affineanalytics.com

A set of functions to start the API server and listen to the requests.
Returns the JSON output from running models and IOU their outputs.
"""
import json
from flask import Flask, request, jsonify
import logging, os
from results.traffic.Convert_CSV_to_Dictionary import csv_to_dictionary
from flask_cors import CORS
import time


app = Flask(__name__)
CORS(app)
## Logs are logged into the server.log file.
file_handler = logging.FileHandler('server.log')
app.logger.addHandler(file_handler)
app.logger.setLevel(logging.INFO)
PROJECT_HOME = os.path.dirname(os.path.realpath(__file__))


@app.route('/testpost', methods = ['POST'])
def api_root():
    app.logger.info('Project_Home:' + PROJECT_HOME)
    return "Test Post"

@app.route('/testget', methods = ['GET'])
def test_get():
    return "Test Get."



'''
Reads the output from the CSV file and returns in JSON format.
'''
@app.route('/api/getTrafficSummary', methods = ['GET'])
def getTrafficSummary():
  resp = csv_to_dictionary('results/traffic/Combined.csv')
  # print(resp)
  return jsonify(resp)


'''
Reads the json file with the specified file name.
'''
@app.route('/api/checkCounterfeit', methods = ['GET'])
def checkCounterfeit():
  filename = request.args.get('filename') + '.json'
  filepath = 'results/counterfeit/' + filename
  f = open(filepath,)
  resp = json.load(f)
  # print(resp)
  return jsonify(resp)


'''
Reads the json file with the specified file name.
'''
@app.route('/api/getEstimatedPos', methods = ['GET'])
def getEstimatedPos():
  filename = request.args.get('filename') + '.json'
  filepath = 'results/pos/' + filename
  f = open(filepath,)
  resp = json.load(f)
  # print(resp)
  return jsonify(resp)


'''
Reads the json file with the specified file name and filters the data for the specified parameter values.
'''
@app.route('/api/getPosReportData', methods = ['GET'])
def getPosReportData():
  fromdatetime = request.args.get('from')
  todatetime = request.args.get('to')
  level = request.args.get('level')
  geography = request.args.get('geography')
  product = request.args.get('product')
  resp = {'fromdatetime': fromdatetime, 'todatetime':todatetime, 'level':level, 'geography':geography, 'product':product}
  return jsonify(resp)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False)
