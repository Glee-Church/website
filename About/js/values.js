<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Values</title>
    <link href="../css/stylesheet.css" rel="stylesheet">
    <link href="./css/about.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <!-- Main Header
    <header> -->
    <!-- Navbar -->
    <!-- <nav>
            <li> <a href="#"> Home </a> </li>
            <li> <a href="#"> About </a> </li>
            <li> <a href="#"> Connection Card </a> </li>
            <li> <a href="#"> Sermons </a> </li>
        </nav> -->

    <!-- Navbar -->
    <div class="testFlex">
        <!-- Logo -->
        <a id="gleeLogo" href="../index.html"><img src="./Img/icons/logo.png" alt="Glee logo"></a>

        <!-- Mobile/Tablet Menu Button -->
        <div class="menuButton">
            <a href="javascript:void(0);" class="icon" onclick="toggleMobileMenu()">
                <i class="fa fa-bars"></i>
            </a>
        </div>

        <!-- Links -->
        <div class="header" id="menuLinks">
            <a class="link" href="../About/about.html">About</a>
            <a class="link" href="../Connect Page/Code/Connect.html">Connect</a>
            <a href="">Sermons</a>
            <a href="">Give</a>
        </div>
    </div>

    <!-- Opening -->
    <div class="orange-block">
        <h1>Our Values</h1>
        <h2>We at Glee Church take our morals and ethics seriously.</h2> <br>
    </div>
    <!-- </header> -->

    <!-- Value Goes Here -->
    <div class="value-display">
        <h1 id="selected-value">Partnerships</h1>
        <h2 id="value-info">Glee Church values its many partnerships with the community.</h2>
        <!-- <img src="./Img/values/partnerships.jpg" id="main-img" width="300" height="300"> -->
    </div>
    
    <!-- Select Church Value Here -->
    <div class="bullet-select">
        <div class="slidingBoxes">
            <button class="button-orange" id="partnerships" onclick="partnershipsClick()">Partnerships</button>
            <button class="button-orange" id="creativity" onclick="creativityClick()">​Creativity</button>
            <button class="button-orange" id="generosity" onclick="generosityClick()">Generosity</button>
            <button class="button-orange" id="excellence" onclick="excellenceClick()">Excellence</button>
            <button class="button-orange" id="friendliness" onclick="friendlinessClick()">​Friendliness</button>
        </div>
    </div>
    <script src="./js/values.js" defer></script>
    <script src="./js/header.js" defer></script>
</body>

</html>
