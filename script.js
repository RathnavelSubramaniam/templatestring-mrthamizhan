document.getElementById("display").onclick=(event)=>{
            event.preventDefault();
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            
            if (name === '' || age === '') {
                document.getElementById('error').innerHTML = "Please fill in both fields."
            } else {
                
                document.getElementById('output').innerHTML = `my name is, ${name} and I am ${age} years old.`;
            }
        };