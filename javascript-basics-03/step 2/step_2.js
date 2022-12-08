var click = document.querySelectorAll("a");

click.forEach(function (e) {
  e.addEventListener("click", function (e) {
    if (e.target.id == "show") {
      document.querySelector("p").innerHTML =
        "Joseph Dacre Carlyle (Carlisle, 4 juin 1758 - Newcastle upon Tyne, 12 avril 1804) est un orientaliste anglais.Après ses études à l'université de Cambridge, il y devint professeur d'arabe. En 1799, il fut attaché par le gouvernement britannique à l'ambassade de Lord Elgin dans l'Empire ottoman. Il était chargé d'explorer les bibliothèques de la région (principalement celle du Sérail) pour y découvrir (et y acquérir) des manuscrits inédits de textes antiques. Il se rendit aussi en Égypte, en Terre sainte et au mont Athos. Sa mission fut, de son point de vue, un échec. Il acheta quelques centaines d'ouvrages, principalement dans les bazars de Constantinople, mais aucun ne contenait de texte inédit. Cependant, la façon dont certains manuscrits avaient été acquis, principalement ceux du patriarche de Jérusalem Anthème Ier, ainsi que la querelle entamée sur la plaine de Troie entre Carlyle et un autre professeur de Cambridge, Edward Daniel Clarke, allaient être utilisées, après la mort de Carlyle, contre Lord Elgin, dans les controverses autour de l'acquisition des « marbres d'Elgin ».De retour en Grande-Bretagne à l'automne 1801, Joseph Dacre Carlyle entama une traduction en arabe de la Bible. Sa mort en avril 1804 coupa court à ce travail.";
    } else {
      document.querySelector("p").innerHTML = "";
    }
  });
});

