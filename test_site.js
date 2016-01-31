var me = document.querySelector('html')
me.onclick = function() {
    var myname= prompt('please enter you name');
    localStorage.setItem('name',myname);
    me.textContent= myname +' is cool';
};