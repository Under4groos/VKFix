//#region Test

var video_hide = [
  "trends",
  // "lives",
  "sport",
  "cybersport",
  "movies",
  "serials",
  "tvshow",
  "for_kids",
  // "subscriptions",
  // "my_communities",
];
var username = "";
function __replace_music_button_href() {
  var contr = document.getElementById("l_aud");
  if (contr) {
    contr = contr.children[0];

    if (!contr.href.endsWith("section=all")) {
      contr.href = contr.href + "?section=all";
    }
  }
  var contr = document.getElementById("l_pr");
  if (contr) {
    contr = contr.children[0];

    if(contr)
      username = contr.href.substring("https://vk.com/".length, contr.href.length);
     
  }
  var contr = document.getElementById("l_vid");
  if (contr) {
    contr = contr.children[0];
    if(contr)
      if (!contr.href.startsWith("https://vk.com/video/@")) {
        contr.href = contr.href + "/@" + username;
      }
     
  }
}

function __remove_em() {
  var content = document.getElementById("content");
  if (!content) return;

  var ch_base__ = content.children[0];
  if (!ch_base__) return;
  var ch__ = ch_base__.children[1];
  if (!ch__) return;

  var art = ch__.getAttribute("class");
  if (art.startsWith("CatalogSection CatalogSection--header_section"))
    ch_base__.removeChild(ch__);
}
function replace_ui_gallery() {
  var chh__ = document.getElementsByClassName(
    "CatalogSection CatalogSection--divided CatalogSection__my"
  );
  if (chh__) var __c = chh__[0];
  if (__c)
    if (__c.children.length >= 3)
      for (let index = 0; index < __c.children.length; index++) {
        const __elll = __c.children[index];

        if (index == 0) {
          if (__elll)
            for (let index = 0; index < __elll.children.length; index++) {
              const element = __elll.children[index];
              element.style["display"] = "none";
            }
        }
        if (index == 1) {
          __c.removeChild(__elll);
        }
      }
}

function _vkfix_1() {
  if (geturl().startsWith("https://vk.com")) {
    __replace_music_button_href();
  }

  if (geturl().startsWith("https://vk.com/audios")) {
    __remove_em();

    replace_ui_gallery();
  }
}

//#endregion
function geturl() {
  return document.URL;
}

setInterval(() => {
  _vkfix_1();
}, 1);

setInterval(() => {
  if (geturl().startsWith("https://vk.com/video")) {
    var buttons = document.getElementsByClassName("MenuList ")[0];
    if (buttons) {
      var childrens_ = buttons.children;
      for (let index = 0; index < childrens_.length; index++) {
        const element = childrens_[index];
        if (element) {
          video_hide.forEach((element_names) => {
            if(element.href && element_names)
              if (element.href.endsWith(element_names)) {
                buttons.removeChild(element);
              }
          });
        }
      }
    }
  }
  
}, 1);
