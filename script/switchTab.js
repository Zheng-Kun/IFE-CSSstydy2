var elAppMenuBox = document.getElementById('app-menu-box');
elAppMenuBox.addEventListener('click',function(el){
    if(el.target.className.split(' ').indexOf('tab-menu') >=0 ){
        //console.log("click");
        var elTabs = document.getElementsByClassName('tab-menu');
        for(let i = 0;i < elTabs.length; i++){
            elTabs[i].parentNode.classList.remove('current-app');
        }
        el.target.parentNode.classList.add('current-app');

        var elsSwitchBox = document.getElementsByClassName('switch-box');
        for(let i = 0;i < elsSwitchBox.length; i++){
            elsSwitchBox[i].classList.add('hideBox');
        }
        elsSwitchBox[parseInt(el.target.getAttribute('data-tab'))].classList.remove('hideBox');
    }
});