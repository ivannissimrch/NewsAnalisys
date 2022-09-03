

function processData(inputText) {  
    
    const postData = async ( url = '', data = {})=>{        
          const response = await fetch(url, {
          method: 'POST', 
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json',
          },
         // Body data type must match "Content-Type" header        
          body: JSON.stringify(data), 
        });
    
          try {
            const newData = await response.json()   
            console.log(newData)
           
            Client.updateUI(newData)            
            
            return newData;  
            
          }catch(error) {
          console("error", error);
          }
      }
    
      postData('http://localhost:8081/add', {userUrl: inputText});     
}

export { processData }
