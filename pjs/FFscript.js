//loader
const preLoader=document.querySelector("#loading");
function preLoad(){
    preLoader.style.display='none';
}

//freedom farm navbar
const fNav=`
<div class="topRow">
<div class="topImg ">
  <a href="../index.html"><img src="../images/CAPlogo.png" class="navImage" height="120px"></a>
</div>
<div class="text-center">
  <h1 class="title word-break"><strong>Citizen for Animal Protection</strong></h1>
</div>
</div>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #90b7c7;">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li class="nav-item">
                  <a class="nav-link active px-4" aria-current="page" href="./homeFarm.html">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active px-4" aria-current="page" href="./aboutFarm.html">About</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active px-4" href="./planFarm.html">Plan A Visit</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active px-4" href="./eventFarm.html">Event</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active px-4"  href="#contact">Contact us</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active px-4"  href="../index.html" target="_blank">CAP Home</a>
              </li>
             
          </ul>

      </div>
 
</nav>
<br>
`
document.querySelector(".fNav").innerHTML = fNav


//Farm Footer
const fFooter=`
<div class="container py-4">
<div class="row gy-4 gx-6">
    <div class="col-lg-3 col-md-6">
        <h5 class="h1 text-white">Contact Us</h5><br>
        <ul class="list-unstyled">
            <p class=" mb-0 text-white">&copy; Copyrights. All rights reserved. <a class="text-primary " href="https://my.tapni.co/v3nm ">V3NM</a></p> <br>
            <li class="d-flex mx-auto">
                <a href="#"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" /></a>
                <a href="#"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" /></a>
                <a href="#"><img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" /></a>
            </li><br><br>
            <a href="#topAgain" style="text-decoration: none;" class="rounded float-start btt">Back to top</a>
        </ul>
    </div>
    <div class="col-lg-3 col-md-6 ">
        <h5 class="text-white mb-3 ">Contacts </h5>
        <ul class="list-unstyled">
            <li>
                <a href="https://g.page/freedom-farm-citizens-for-anima?share "><b style="color: white; ">Address: </b> Unnathi Woods Rd, Vijay Park, Kasarvadavali, Thane West, Thane, Maharashtra 400615</a>

            </li>
            <li>
                <a href="mailto:capfoundationmumbai@gmail.com" style="word-wrap: break-word;">
                    <b style="color: white;">Email: </b> capfoundationmumbai@gmail.com</a>
            </li>
            <li>
                <a href="https://api.whatsapp.com/send?phone=9324610601">
                    <b style="color: white; ">Contact: </b>+91 93246 10601</a>
            </li>
            <li>
                <a href="#">Press & Media</a>
            </li>
        </ul>
    </div>
    <div class="col-lg-3 col-md-6">
        <h5 class="text-white mb-3">Helps</h5>
        <ul class="list-unstyled text-muted ">
            <li><a href="#"><b style="color: white; ">Guideline: </b> </a></li><br>
            <li><a href="#"><b style="color: white; ">Helpline: </b> </a></li><br>
            <li><a href="#"><b style="color: white; ">Response: </b> </a></li><br>
            <li>
                <a href="#"><b style="color: white; ">FAQ</b></a>
            </li>
        </ul>
    </div>
    <div class="col-lg-3 col-md-6">
        <h5 class="text-white mb-3">
            Locate Us!
        </h5>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7532.608963159227!2d72.96618702407422!3d19.26912079372843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bbeead1f4d67%3A0xa56561c00ccf69d4!2sFreedom%20Farm%2C%20Citizens%20for%20Animal%20Protection%20Foundation!5e0!3m2!1sen!2sin!4v1658849120003!5m2!1sen!2sin"
            width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
</div>
</div>
`
document.querySelector(".fFooter").innerHTML = fFooter
