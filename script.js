// script Navbar Automation

const navbar = `
<a href="../index.html"><img src="../images/CAPlogo.png" class="navImage" height="80px"></a>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active px-4" aria-current="page" href="./AboutCap.html">About CAP</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active px-4" href="./whatwedo.html">What We Do</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active px-4" href="./freedomFarm.html">Freedom Farm</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active px-4" href="./ambulance.html">Ambulance</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active px-4" href="./howcanyouhelp.html">How Can You Help</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active px-4" href="./updates.html">Updates</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active px-4" href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    </div>
</nav>
`
document.querySelector(".Nav").innerHTML = navbar



// script Footer Automation
const Footer = `
<div class="container py-4">
                <div class="row gy-4 gx-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="h1 text-white">Contact Us</h5><br>
                        <ul class="list-unstyled text-muted ">
                            <p class="small text-muted mb-0 ">&copy; Copyrights. All rights reserved. <a class="text-primary " href="https://my.tapni.co/v3nm ">V3NM</a></p> <br>
                            <li class="d-flex mx-auto">
                                <a href="#"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" /></a>
                                <a href="#"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" /></a>
                                <a href="#"><img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" /></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 ">
                        <h5 class="text-white mb-3 ">Contacts </h5>
                        <ul class="list-unstyled text-muted ">
                            <li>
                                <a href="https://g.page/freedom-farm-citizens-for-anima?share "><b style="color: white; ">Address: </b> Unnathi Woods Rd, Vijay Park, Kasarvadavali, Thane West, Thane, Maharashtra 400615</a>

                            </li>
                            <li>
                                <a href="# " style="word-wrap: break-word;">
                                    <b style="color: white;">Email: </b> capfoundationmumbai@gmail.com</a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=9757439100 ">
                                    <b style="color: white; ">Contact: </b>+91 97574 39100</a>
                            </li>
                            <li>
                                <a href="#"></a>Press & Media</a>
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
                            Quick Links
                        </h5>
                        <ul class="list-unstyled text-muted ">
                            <li><a href="./AboutCap.html"><b style="color: white; ">About CAP</b> </a></li>
                            <li><a href="./whatwedo.html"><b style="color: white; ">What We Do</b> </a></li>
                            <li><a href="./freedomFarm.html"><b style="color: white; ">Freedom Farm</b> </a></li>
                            <li><a href="./ambulance.html"><b style="color: white; ">Ambulance</b></a></li>
                            <li><a href="./howcanyouhelp.html"><b style="color: white; ">How can you help</b></a></li>
                            <li><a href="./updates.html"><b style="color: white; ">updates</b></a></li>
                        </ul>

                    </div>
                </div>
            </div>
`

document.querySelector(".Footer").innerHTML = Footer