fetch("organisations.json")
.then(function(response){
    return response.json();
})
.then(function(organisations){
    let placeholder = document.querySelector("#data-output");
    let out = " ";
    for(let organisation of organisations){
        out += `    
            <tr>
                <td>${organisation.name}</td>
                <td>${organisation.description}</td>
                <td>${organisation.mission}</td>
                <td>${organisation.programmes}</td>
                <td>${organisation.funding}</td>
                <td>${organisation.collaborations}</td>
                <td>${organisation.choice}</td>
                <td>${organisation.numberofemployees}</td>
                <td>${organisation.geographicalfocus}</td>
                <td>${organisation.nationality}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
})