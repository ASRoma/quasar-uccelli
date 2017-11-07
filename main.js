$(document).ready(function () {
    $('.btn').on('click', function () {
        var data = {
            resource_id: '56285b0c-21fc-44c5-9880-1f10a3dabf4a', // the resource id 
        };
        $.ajax({
            url: 'http://dati.lazio.it/catalog/api/action/datastore_search'
            , data: data
            , dataType: 'jsonp'
            , success: function (data) {
                console.log(data);
                var input = document.getElementById('myinput');
                var arr = data.result.records
                var container = document.getElementById('bird-list')
                var result = false;
                container.innerHTML = "";
                arr.forEach(function (element) {
                    if (element.Famiglia == input.value) {
                        result = true
                        container.innerHTML += '<li>' + element + '</li>'
                    }
                });
                if (!result) {
                    alert('questa famiglia non abita nella nostra selva');
                }
            }
        });
    });
});