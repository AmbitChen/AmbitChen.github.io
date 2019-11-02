let OriginTiitle = document.title, st;
document.addEventListener("visibilitychange", function () {
  document.hidden ? (document.title = "你看不见我...你看不见我...你看不见我...",
    clearTimeout(st)) : (document.title = "还是被发现了",
    st = setTimeout(function () {
      document.title = OriginTiitle
    }, 3e3))
})

