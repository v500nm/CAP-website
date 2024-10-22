//loader
// const preLoader=document.querySelector("#loading");
// function preLoad(){
//     preLoader.style.display='none';
// }

//Social media links
const SocialMedia = `<div class="icon-bar">
<a href="https://www.facebook.com/cap.mumbai " class="facebook" target="_blank"><i class="fa fa-facebook"></i></a>
<a href="https://www.instagram.com/cap.mumbai/?igshid=YmMyMTA2M2Y%3D" class="instagram" target="_blank"><i class="fa fa-instagram"></i></a>
<a href="https://api.whatsapp.com/send?phone=9757439100" class="whatsapp" target="_blank"><i class="fa fa-whatsapp"></i></a>
<a href="https://twitter.com/capmumbai" class="twitter" target="_blank"><i class="fa fa-twitter"></i></a>
</div>`
document.querySelector(".socialmedia").innerHTML = SocialMedia

// script Navbar Automation
const navbar = `
<div class="topRow">
              <div class="topImg">
                <a href="../index.html"><img src="../images/CAPlogo.png" class="navImage" height="120px"></a>
              </div>
              <div class="text-center">
                <h2 class="title word-break"><strong>Citizens for Animal Protection</strong></h2>
              </div>
              <div class="SMandDonate row align-middle">
                <div class="sm col-md-6">
                </div>
                <div class="donate col-md-6">
                  <a href="../images/Sanner.jpeg" class="rounded mx-2 bttn">Donate</a>
                </div>
              </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #90b7c7;">       
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link active px-4" aria-current="page" href="../index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active px-4" aria-current="page" href="./AboutCap.html">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active px-4" href="./whatwedo.html">What We Do</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active px-4" href="../freedomFarm/homeFarm.html" target="_blank">Freedom Farm</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active px-4"  href="./ambulance.html">Ambulance</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active px-4" href="./howcanyouhelp.html">Support Our Work</a>
                            </li>
                            <li class="nav-item">
              <a class="nav-link active px-4" href="../user/updates.html">Updates</a>
            </li>
                            <li class="nav-item">
                                <a class="nav-link active px-4" href="https://www.franklywearing.com/creator/cap-mumbai" target="_blank">Merchandise</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active px-4" href="#contact">Contact</a>
                            </li>
                        </ul>

                    </div>
               
              </nav>
            <br>
`
document.querySelector(".Nav").innerHTML = navbar

// script Footer Automation
const Footer = `
<div class="container py-4">
                <div class="row gy-4 gx-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="h1 text-white">Contact Us</h5><br>
                        <ul class="list-unstyled">
                            <p class="small  text-white mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" target="_blank" href="https://github.com/v500nm">Adnan Mangaonkar</a></p> <br>
                            <br><br>
                                <a href="#topAgain" style="text-decoration: none;" class="rounded float-start btt">Back to top</a>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 ">
                        <h5 class="text-white mb-3 ">Contacts </h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="https://g.page/freedom-farm-citizens-for-anima?share"><b style="color: white; ">Address: </b> Unnathi Woods Rd, Vijay Park, Kasarvadavali, Thane West, Thane, Maharashtra 400615</a>

                            </li>
                            <li>
                                <a href="# " style="word-wrap: break-word;">
                                    <b style="color: white;">Email: </b> capfoundationmumbai@gmail.com</a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=9757439100">
                                    <b style="color: white; ">Contact: </b>+91 97574 39100</a>
                            </li>
                            <li>
                                <a href="">
                                    <b style="color: white; ">Timing: </b>8am to 9pm</a>
                            </li>
                            <li>
                                <a href="#"></a>Press & Media</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-3">Helps</h5>
                        <ul class="list-unstyled">
                            <li><a href="#"><b style="color: white; ">Guideline: </b> </a></li><br>
                            <li><a href="#"><b style="color: white; ">Helpline: </b> </a></li><br>
                            <li><a href="#"><b style="color: white; ">Response: </b> </a></li><br>
                            <li>
                                <a href="#"><b style="color: white; ">FAQ: </b></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white mb-3">
                           Locate Us!
                        </h5>
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.3170012379073!2d72.9750259751643!3d19.26857598197604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bbeead1f4d67%3A0xa56561c00ccf69d4!2sFreedom%20Farm%2C%20Citizens%20for%20Animal%20Protection%20Foundation!5e0!3m2!1sen!2sin!4v1685080990333!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
`

document.querySelector(".Footer").innerHTML = Footer

// counter
$(document).ready(function() {

    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 8000,
            easing: 'swing',
            step: function (now) {
               $(this).text(Math.ceil(now));
            }
        });
    });
});
//About ReadMore
const readMoreContainer=document.querySelector('.Asection');
readMoreContainer.addEventListener('click',event=>{
    const current=event.target;
    const isReadMoreBtn= current.className.includes('readMoreBtn');
    if(!isReadMoreBtn) return;
    const currentText=event.target.parentNode.querySelector('.readMore');
    currentText.classList.toggle('readMoreShow');
    current.textContent= current.textContent.includes('Read More')?
    "Read Less...":"Read More"    
})
const readMoreContainer1=document.querySelector('.Asection1');
readMoreContainer1.addEventListener('click',event1=>{
    const current1=event1.target;
    const isReadMoreBtn1= current1.className.includes('readMoreBtn1');
    if(!isReadMoreBtn1) return;
    const currentText1=event1.target.parentNode.querySelector('.readMore1');
    currentText1.classList.toggle('readMoreShow1');
    current1.textContent= current1.textContent.includes('Read More')?
    "Read Less...":"Read More"    
})
//Ambulance
const AmreadMoreContainer=document.querySelector('.Asection');
AmreadMoreContainer.addEventListener('click',event=>{
    const current=event.target;
    const isReadMoreBtn= current.className.includes('readMoreBtn');
    if(!isReadMoreBtn) return;
    const currentText=event.target.parentNode.querySelector('.readMore');
    currentText.classList.toggle('readMoreShow');
    current.textContent= current.textContent.includes('Read More')?
    "Read Less...":"Read More"  
})

(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


