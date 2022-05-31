<template>
<nav class="navbar navbar-main navbar-expand-lg position-sticky mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky" id="navbarBlur" data-scroll="true">
    <div class="container-fluid py-1 ps-0">
      <nav class="header__breadcrumbs" aria-label="breadcrumb">
  
        <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
          <li class="breadcrumb-item text-sm">
            <a class=" text-dark" href="/">
              <img src="@/assets/img/headerBreadIcon.svg" style="width:20px; height:20px;" class="mb-1" alt="">
            </a>
          </li>
          <!-- <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li> -->
          <li class="breadcrumb-item text-sm text-dark active" aria-current="page" v-for="(item,ind) in headerRoute" :key="item">
            <a class="current__page" :href="item.path" v-if="ind == headerRoute.length-1">{{item.name}}</a>
            <a v-else class="" :href="item.path">{{item.name}}</a>
          </li>
        </ol>
  
      </nav>
      <div class="sidenav-toggler sidenav-toggler-inner d-xl-block d-none ">
        <a href="javascript:;" class="nav-link text-body p-0">
          <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
          </div>
        </a>
      </div>
      <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
        <div class="ms-md-auto pe-md-3 d-flex align-items-center">
          <div class="input-group">
            <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
  
            <input type="text" class="form-control" placeholder="Поиск...">
  
          </div>
        </div>
        <ul class="navbar-nav  justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <a href="./pages/authentication/signin/illustration.html" class="nav-link text-body font-weight-bold px-0" target="_blank">
              <!-- <i class="fa fa-user me-sm-1"></i> -->
                  <img src="@/assets/img/header/HeaderProfile.svg" class="me-2 header__images" alt="">
  
              <span class="d-sm-inline d-none header__name">Евгений</span>
  
            </a>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav" @click="showSidebar">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          <li class="nav-item px-3 d-flex align-items-center">
            <a href="javascript:;" class="nav-link text-body p-0">
              <!-- <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i> -->
              <img src="@/assets/img/header/HeaderSetings.svg" class="header__images" alt="">
            </a>
          </li>
          <li class="nav-item dropdown pe-2 d-flex align-items-center">
            <a href="javascript:;" class="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <!-- <i class="fa fa-bell cursor-pointer"></i> -->
              <img src="@/assets/img/header/HeaderNotification.svg" class="header__images" alt="">
            </a>
  
            <ul class="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex py-1">
                    <div class="my-auto">
                      <img src="@/assets/img/team-2.jpg" class="avatar avatar-sm  me-3 " alt="user image">
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="text-sm font-weight-normal mb-1">
                        <span class="font-weight-bold">Новое сообщение</span> от Ильи
                      </h6>
                      <p class="text-xs text-secondary mb-0">
                        <i class="fa fa-clock me-1"></i>
                        2 минуты назад
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <!-- <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex py-1">
                    <div class="my-auto">
                      <img src="@/assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm bg-gradient-dark  me-3 " alt="logo spotify">
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="text-sm font-weight-normal mb-1">
                        <span class="font-weight-bold">New album</span> by Travis Scott
                      </h6>
                      <p class="text-xs text-secondary mb-0">
                        <i class="fa fa-clock me-1"></i>
                        1 day
                      </p>
                    </div>
                  </div>
                </a>
              </li> -->
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex py-1">
                    <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                      <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>credit-card</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero"> <g transform="translate(1716.000000, 291.000000)"> <g transform="translate(453.000000, 454.000000)"> <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path> <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path> </g> </g> </g> </g> </svg>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="text-sm font-weight-normal mb-1">
                        Новый заказ
                      </h6>
                      <p class="text-xs text-secondary mb-0">
                        <i class="fa fa-clock me-1"></i>
                        15 минут
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
</template>

<script>
import '@/assets/js/soft-ui-dashboard.min.js'
import { directive } from '@babel/types';
import PerfectScrollbar from '../assets/js/plugins/perfect-scrollbar.min.js'
export default {
    methods:{
        // Navbar blur on scroll
        navbarBlurOnScroll(id) {
        const navbar = document.getElementById(id);
        let navbarScrollActive = navbar ? navbar.getAttribute("data-scroll") : false;
        let scrollDistance = 5;
        let classes = ['blur', 'shadow-blur', 'left-auto'];
        let toggleClasses = ['shadow-none'];

        if (navbarScrollActive == 'true') {
            window.onscroll = this.debounce(function() {
            if (window.scrollY > scrollDistance) {
                blurNavbar();
            } else {
                transparentNavbar();
            }
            }, 10);
        } else {
            window.onscroll = this.debounce(function() {
            transparentNavbar();
            }, 10);
        }

        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

        if (isWindows) {
            var content = document.querySelector('.main-content');
            if (navbarScrollActive == 'true') {
            content.addEventListener('ps-scroll-y', this.debounce(function() {
                if (content.scrollTop > scrollDistance) {
                blurNavbar();
                } else {
                transparentNavbar();
                }
            }, 10));
            } else {
            content.addEventListener('ps-scroll-y', this.debounce(function() {
                transparentNavbar();
            }, 10));
            }
        }

        function blurNavbar() {
            navbar.classList.add(...classes)
            navbar.classList.remove(...toggleClasses)

            toggleNavLinksColor('blur');
        }

        function transparentNavbar() {
            navbar.classList.remove(...classes)
            navbar.classList.add(...toggleClasses)

            toggleNavLinksColor('transparent');
        }

        function toggleNavLinksColor(type) {
            let navLinks = document.querySelectorAll('.navbar-main .nav-link')
            let navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line')

            if (type === "blur") {
            navLinks.forEach(element => {
                element.classList.remove('text-body')
            });

            navLinksToggler.forEach(element => {
                element.classList.add('bg-dark')
            });
            } else if (type === "transparent") {
            navLinks.forEach(element => {
                element.classList.add('text-body')
            });

            navLinksToggler.forEach(element => {
                element.classList.remove('bg-dark')
            });
            }
        }
        },
        debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
            args = arguments;
            var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
        },
        navbresize(){
          if(document.documentElement.clientWidth < 1200){
            document.querySelector('.sidenav').classList.add('bg-white');
            document.querySelector('.sidenav').style.zIndex='1100'
            if(document.querySelector('body').className.includes('g-sidenav-pinned')){
              document.querySelector('body').classList.remove('g-sidenav-pinned') 
            }
          }
          else{
            if(document.querySelector('.sidenav').className.includes('bg-white')){
              document.querySelector('.sidenav').classList.remove('bg-white')
              document.querySelector('.sidenav').style.zIndex='' 
            }
          }
        },
        showSidebar(){
          document.querySelector('body').classList.toggle('g-sidenav-pinned')
        }
    },
    mounted(){
        (function() {
            var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

            if (isWindows) {
                // if we are on windows OS we activate the perfectScrollbar function
                // if (document.getElementsByClassName('main-content')[0]) {
                // var mainpanel = document.querySelector('.main-content');
                // var ps = new PerfectScrollbar(mainpanel);
                // };

                if (document.getElementsByClassName('sidenav')[0]) {
                var sidebar = document.querySelector('.sidenav');
                var ps1 = new PerfectScrollbar(sidebar);
                };

                if (document.getElementsByClassName('navbar-collapse')[0]) {
                var fixedplugin = document.querySelector('.navbar-collapse');
                var ps2 = new PerfectScrollbar(fixedplugin);
                };

                if (document.getElementsByClassName('fixed-plugin')[0]) {
                var fixedplugin = document.querySelector('.fixed-plugin');
                var ps3 = new PerfectScrollbar(fixedplugin);
                };
            };
            })();
        if (document.querySelector('.sidenav-toggler')) {
        var sidenavToggler = document.getElementsByClassName('sidenav-toggler')[0];
        var sidenavShow = document.getElementsByClassName('g-sidenav-show')[0];
        var toggleNavbarMinimize = document.getElementById('navbarMinimize');

        if (sidenavShow) {
            sidenavToggler.onclick = function() {
            if (!sidenavShow.classList.contains('g-sidenav-hidden')) {
                sidenavShow.classList.remove('g-sidenav-pinned');
                sidenavShow.classList.add('g-sidenav-hidden');
                if (toggleNavbarMinimize) {
                toggleNavbarMinimize.click();
                toggleNavbarMinimize.setAttribute("checked", "true");
                }
            } else {
                sidenavShow.classList.remove('g-sidenav-hidden');
                sidenavShow.classList.add('g-sidenav-pinned');
                if (toggleNavbarMinimize) {
                toggleNavbarMinimize.click();
                toggleNavbarMinimize.removeAttribute("checked");
                }
            }
            };
        }
        }
        if (document.getElementById('navbarBlur')) {
            this.navbarBlurOnScroll('navbarBlur');
        }

        // console.log(this.$route.fullPath.split("/"));
        // console.log(this.$router.options.routes);

        window.onresize = this.navbresize;
        if(document.documentElement.clientWidth < 1200){
          document.querySelector('.sidenav').classList.add('bg-white')
          document.querySelector('.sidenav').style.zIndex='1100'
          if(document.querySelector('body').className.includes('g-sidenav-pinned')){
            document.querySelector('body').classList.remove('g-sidenav-pinned') 
          }
        }
    },
    computed: {
      headerRoute(){
        let newRoute = [];
        let allRoutes = this.$router.options.routes;
        if(this.$route.fullPath.split("/").length == 1){
          newRoute.push({name:'Главная страница',path: '/'}) 
          return newRoute
        }
        else if(this.$route.fullPath.split("/").length == 2){
          let currentRote = '';
          this.$route.fullPath.split("/").forEach((item,ind) => {
            if(item != ''){
              currentRote = currentRote + '/' + item
                for(let i=0; i < allRoutes.length; i++){
                if(allRoutes[i].path == currentRote){
                  if(allRoutes[i].meta != undefined){
                    newRoute.push({
                      name: allRoutes[i].meta.NavLink,
                      path: allRoutes[i].path,
                    })
                  }
                  else{
                    newRoute.push({name:'Задайте мета',path: '/'}) 
                  }
                  break
                }
                }
            }

          })
          if(newRoute.length == 0){
            newRoute.push({name:'Главная страница',path: '/'}) 
            return newRoute
          }
          return newRoute;
        }
        else{
          let currentRote = '';
          this.$route.fullPath.split("/").forEach((item,ind) => {
            
            if(item != ''){
              currentRote = currentRote + '/' + item
              
              
                for(let i=0; i < allRoutes.length; i++){
                if(allRoutes[i].path == currentRote){
                  if(allRoutes[i].meta != undefined){
                    newRoute.push({
                      name: allRoutes[i].meta.NavLink,
                      path: allRoutes[i].path,
                    })
                  }
                  else{
                    newRoute.push({name:'Задайте мета',path: '/'}) 
                  }
                  break
                }
                }
              
            }

          })
          return newRoute;
        }
      }
    }
}
</script>

<style scoped>
.header__breadcrumbs{
  background: #E9ECEF;
  border-radius: 8px; 
  padding: 7px 24px 7px 12px;
  margin-right: 24px; 
}
.header__breadcrumbs ol{
  margin-right: 0 !important;
}
.header__breadcrumbs a{
  font-weight: 400;
  color: #A0AEC0;
}
.header__breadcrumbs .current__page{
  font-weight: 400;
  color: #2D3748;
}
.header__breadcrumbs .sidenav-toggler-inner .sidenav-toggler-line{
background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);  
}
.fa-search, .fa-user, .fa-cog, .fa-bell{
  color: #2D3748;
}
.header__images{
  width: 24px;
  height: 24px;
}
.header__name{
  font-weight: 400;
  font-size: 16px;  
  color: #2D3748;
}
</style>