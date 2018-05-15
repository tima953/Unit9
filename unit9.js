
<!DOCTYPE html>
<html>
    <head>
    <title></title>
    <script>
    // this function fires with paragraph is loaded
    function bind() {
        wordItems = document.getElementsByTagName('strong');
        for (var i = 0; i < wordItems.length; i++) {
            wordItems[i].onmouseover = function () {
                this.style.color = "red";
            };
        }

    }

    </script>
    </head>
    <body onload="bind()">
    <p >
    <strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to intermediate) who want to work with <strong>beginner</strong>various JavaScript <strong>beginner</strong>problems and write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.
</p>
</body>
</html>