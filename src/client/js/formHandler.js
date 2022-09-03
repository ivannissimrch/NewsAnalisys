function handleSubmit(event) {
    event.preventDefault()
    
    
    // get value of text entered into the form field
    let formText = document.getElementById('name').value  
    //call function to process user input and get back server results
    Client.processData(formText) 
    
    document.getElementById('name').focus()
    document.getElementById('name').value =''  
   
   
}

export { handleSubmit }
