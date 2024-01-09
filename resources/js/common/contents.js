

$(document).ready(function(){

    $("thead input[type='checkbox']").click(function(){

        var isChecked = $(this).prop("checked");

        $("tbody input[type='checkbox']").prop("checked", isChecked);
    })

});





























