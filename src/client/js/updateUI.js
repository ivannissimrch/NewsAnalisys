function updateUI(data){
 
 console.log(data)
//select message to display for polarity    
let polarityResults = '';
if (data.polarity === 'P+'){
    polarityResults = 'Strong Positive'
}
else if(data.polarity === 'P'){
    polarityResults = 'Positive'
}
else if(data.polarity === 'NEU'){
    polarityResults = 'Neutral'
}
else if(data.polarity === 'N'){
    polarityResults = 'Negative'
}
else if(data.polarity === 'N+'){
    polarityResults = 'Strong Negative'
}
else {
    polarityResults = 'Without Polarity'
}

//Update Ui and display Results
document.getElementById('polarity').innerHTML = polarityResults
document.getElementById('subjetivity').innerHTML = data.subjectivity
document.getElementById('sample-text').innerHTML = data.sample_text  


}

export{ updateUI}