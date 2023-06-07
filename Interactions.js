var navbar = document.getElementById("navbar");
        var navtools = document.getElementById("nav-tools");

        windows.onscroll = function() {
            if(window.pageYOffset >= navtools.offsetTop) {
                navbar.classList.add("sticky");
            }
            else {
                navbar.classList.remove("sticky");
            }
        }
