document.getElementById('sidebar-toggle').addEventListener('click', function() {
    const aside = document.querySelector('aside');
    aside.classList.toggle('collapsed');
});