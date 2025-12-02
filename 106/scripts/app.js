
function saveTask(){
    const title = $('#txtTitle').val();
    const description = $('#txtDescription').val();
    const color = $('#selColor').val();
    const date = $('#selDate').val();
    const status = $('#selStatus').val();
    const budget = $('#numBudget').val();

    const data = new Task(title, description, color, date, status, budget);
    console.log(data);
}
function init(){
    $('#btnSave').click(saveTask);    
}
window.onload = init;