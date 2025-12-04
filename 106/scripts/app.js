const API_URL = "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function saveTask(){
    const title = $('#txtTitle').val();
    const description = $('#txtDescription').val();
    const color = $('#selColor').val();
    const date = $('#selDate').val();
    const status = $('#selStatus').val();
    const budget = $('#numBudget').val();

    const data = new Task(title, description, color, date, status, budget);
    console.log(data);

    $.ajax({
        type: "POST",
        url: API_URL,
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(created){
            console.log("Task created:", created);
        },
        error: function(error){
            console.log("Error:", error);
        }
    });


}


// test the connection to the API
function testRequest()
{   
$.ajax({
    type: "GET",
    url: API_URL,
    success: function(response){
        console.log("API Response:", response);
    },
    error: function(error){
        console.log("Error:", error);
    }    
});
}

function init(){
    $('#btnSave').click(saveTask);    
}
window.onload = init;