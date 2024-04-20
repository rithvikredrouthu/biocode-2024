async function askQuestionC(text) {
  const inputText = text;
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-proj-nHdlR1kVX3jPgEOqqeWwT3BlbkFJWSAsWjyDtExPis21Fg1n' 
      },
      body: JSON.stringify({ 
        model: 'gpt-3.5-turbo-0125',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Estimate the daily calcium levels ingested per day, based off the average diet, which we will input. Base your estimation on the average portion sizes, if portion size is not given, and base the calcium levels of each food by the average calcium levels, and give them the benefit of doubt. After calculations, give a one worded answer, Adequate, or Low, depending on if your calcium level is greater than 800 or not, and do not add anything else in your response. Assume person is an average male at age 18.' + inputText }
        ]
      })
    });

    const responseData = await response.json();
    return responseData.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    return 'Error: Something went wrong';
  }
}

async function askQuestionD(text) {
  const inputText = text;
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-proj-nHdlR1kVX3jPgEOqqeWwT3BlbkFJWSAsWjyDtExPis21Fg1n' 
      },
      body: JSON.stringify({ 
        model: 'gpt-3.5-turbo-0125',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Estimate the daily vitamin D levels ingested per day, based off the average diet, and time spent outside, which we will input. Base your estimation on the average portion sizes, if portion size is not given, and base the vitamin D levels of each food by the average vitamin D levels. After calculations, make a one worded answer, Sufficient, or Insufficient, depending on if your vitamin D level is greater than 15 mcg or not, and do not add anything else in your response. Assume person is an average male at age 18:' + inputText + "Time spent outside: " + timeOut } //timeOut is the variable for time spent outside
        ]
      })
    });

    const responseData = await response.json();
    return responseData.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    return 'Error: Something went wrong';
  }
}

async function submitForm() {
  const inputOne = await askQuestionC();
  const inputTwo = await askQuestionD();
  sendAlert(inputOne, inputTwo);
} 

const sendAlert = async (in1, in2) => {
  try {
    const response = await fetch('http://localhost:5000/recieve-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data1: in1,
        data2: in2
      })
    });
    
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('Error:', error);
  }
}