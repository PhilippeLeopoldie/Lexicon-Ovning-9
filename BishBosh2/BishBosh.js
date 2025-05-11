const output = document.getElementById('output');
const bishBoshForm = document.querySelector("#bishBoshForm");

const displayResult = (value) => { 
     //output.innerHTML += `<p>${value}</p>`
     const p = document.createElement('p');
     p.textContent = value;
     output.appendChild(p);
}


const bishBosh = (bishNumber, boshNumber, maxNumber) => {
    output.innerHTML ='';
    for (let number = 1; number < maxNumber+1; number++) {
        if(number % bishNumber === 0 && number % boshNumber === 0) displayResult('Bish-Bosh')
        else if (number % bishNumber === 0) displayResult('Bish')
        else if( number % boshNumber === 0) displayResult('Bosh')
        else displayResult(number); 
    }
}

export const submitBishBosh = () => { 
    bishBoshForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const bishNumber = parseInt(document.getElementById('bishNumber').value);
    const boshNumber = parseInt(document.getElementById('boshNumber').value);
    const maxNumber = parseInt(document.getElementById('maxNumber').value);
    bishBosh(bishNumber, boshNumber, maxNumber);
    })
}






