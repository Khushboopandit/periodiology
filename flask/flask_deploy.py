from flask import Flask, jsonify, request

import json



app = Flask(__name__)

def getNewData():
    files= open("recommend.json", "r+")
    data=files.read()
    
    jsonsData= json.loads(data)
    return jsonsData["data"]

questionList= getNewData()

@app.route('/get_new_question', methods=['GET'])
def getQuestions():
    data= {
            "questionList": questionList
    }
    response  = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/create_new_question', methods=['POST'])
def addNew():
    print(type(request.data))
    data = json.loads(request.data)
    newData = {
        "question" : data.get('question'),
        "des" : data.get('des'),
        "url" :{
            "article": data.get('url_article'),
            "video" : data.get('url_video')
        },
        'id' : (str(len(questionList)+1)),
    }
    questionList.append(newData)
    jsonFile= open("recommend.json", "w")
    data = json.dumps({"data": questionList})
    jsonFile.write(data)

    data = {
        "questionList":questionList
    }
    response  = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# debug is True so we don't have to start the server again after 
# making any change
app.run(debug=True, port=4000) # start the server.
