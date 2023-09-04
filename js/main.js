// document.querySelector('body').style.backgroundColor="red";
// window.open('https://app.surveoo.com/en/surveys', 'survey')
// document.write(window.innerHeight)
// document.write(document.documentElement.clientHeight)
// document.write(location);
// document.write(location.href);
// location.replace('www.github.com')
document.write(history);

document.querySelector("#navbar-toggler").onclick = function (e) {
  e.target.innerHTML = <span class="navbar-toggler-icon"></span> ? (
    <span class="navbar-toggler-icon">X</span>
  ) : (
    <span class="navbar-toggler-icon"></span>
  );
};
