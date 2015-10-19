$( document ).ready(function() {
    var $miSeleccion = $('#ejemplo1').html();
    $('.selectpicker').change(function(){
        var $valor = $('#partidos').val();
        if( $valor == -1)
        {
            $('#ejemplo2').html("");
        }
        else
        {
                $('#ejemplo2').html($miSeleccion);
        }
        
    });
});