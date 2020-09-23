window.onload = function() {
    var strongTitle = "<strong>¿Qué es una PWA?</strong> Integrante: Alberto Urbina Espinoza";
    var h1H = "¿Qué es una PWA?"
    var textP = "PWA o Progressive Web Apps";
    var textHeader = "Es una solución basada en la web tradicional que todos conocemos, aunque incorpora algunas particularidades que la hacen parecerse a una app nativa para teléfonos móviles y tabletas. Cada proyecto es independiente y el nivel de adaptación de la web al formato app es progresivo, por lo que puede que visitemos un site con una PWA casi idéntica a una app o quizá sea una web con algunos avances.";
    var textBody = ["La primera ventaja que encontramos con las progressive web apps es que no necesitamos entrar a Google Play o Apple Store para descargar nada. Solo se requiere, al principio, una conexión a internet y un navegador que puede ser Chrome, Safari o Firefox.", "El segundo gran avance con la PWA es que cualquier usuario puede ‘instalarla’ en la pantalla de inicio de su dispositivo. Y es que todos hemos tenido, alguna vez, el móvil al borde de capacidad. Hemos borrado fotografías, vídeos o desinstalado aplicaciones porque no cabía nada más. Pero siempre hay espacio para una PWA en cualquier teléfono móvil porque funciona como un acceso directo que te abre la web y recupera el contenido si no hay conexión o lo refresca si el usuario está conectado a la red.","Con la progressive web app, el usuario puede seguir consultando tu web, aunque haya perdido la conexión. Es una de las ventajas que la hacen tan atractiva y que han provocado que tenga una gran aceptación entre los internautas."];
    var textBody2 = "<h3>Manifesto JSON de la aplicación</h3>Uno de los elementos más importantes que conforman las PWA es el manifiesto de la aplicación y que está en formato JSON. Este, nos permite controlar cómo se verá nuestra aplicación en áreas donde normalmente los usuarios tienen aplicaciones nativas. <br/><br/><h3>Service Workers</h3>Otro elemento que encontramos es el Service Workers, se trata de uno o varios scripts que funcionan en un segundo plano y que nos permiten generar una experiencia offline, descargando los contenidos imprescindibles para que la aplicación funcione, así como generar notificaciones push.<br /><br />El <strong>Service Workers</strong> es realmente importante ya que <strong>nos permite optimizar la retención de los usuarios</strong>. Hasta la fecha, esta funcionalidad solo la tenían las aplicaciones nativas, pero se ha convertido en una de las funcionalidades más importantes para poder mejorar el retorno del usuario a nuestra app. No obstante, con el aumento de notificaciones en todas las app, esta funcionalidad o característica cada vez queda más oculta.";
    var textBody3 = "Las Progressive Web Apps se componen de dos partes principales, el App-Shell, que hace referencia a la estructura de la página y el contenido, que puede variar entre las distintas páginas de nuestra aplicación.";
    var textBody4 = "Dependiendo de la tecnología que se haya usado para desarrollar la página, el contenido se puede mandar desde el servidor en formato de código HTML o mediante script JSON, sin embargo, a la hora de utilizar JSON debemos ir con cuidado, ya que esta técnica nos puede dar problemas de indexación en caso de que se implemente mal. Este detalle es importante tenerlo en cuenta, sobre todo para a lo que el SEO se refiere.";

    document.getElementById("strT").innerHTML = strongTitle;
    document.getElementById("textP").innerHTML = textP;
    document.getElementById("textH").innerHTML = textHeader;
    document.getElementById("textHe").innerHTML = h1H;
    document.getElementById("textB2").innerHTML = textBody2;
    document.getElementById("textB3").innerHTML = textBody3;
    document.getElementById("textB4").innerHTML = textBody4;
    
    var text = "";
    var i;
    for (i = 0; i < textBody.length; i++) {
    text += textBody[i] + "<br><br>";
    }
    document.getElementById("textB").innerHTML = text;
}