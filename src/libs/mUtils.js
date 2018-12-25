/*
* 存储 SessionStorage
* */
export  const SetSessionStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, base64.encode(content));
}

/**
 * 获取 SessionStorage
 */
export const GetSessionStore = name => {
  if (!name) return;
  let s = window.sessionStorage.getItem(name)
  s = s ? base64.decode(s) : s
  return s ;
}

/**
 * 删除 SessionStorage
 */
export const RemoveSessionStore = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
}



/**
 * 存储localStorage
 */
export const SetStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, base64.encode(content));
}

/**
 * 获取localStorage
 */
export const GetStore = name => {
  if (!name) return;
  let s = window.localStorage.getItem(name)
  s = s ? base64.decode(s) : s
  return s ;
}

/**
 * 删除localStorage
 */
export const RemoveStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/* 获取 URL 参数
* params 要获取的参数名
* */
export const GetUrlQuery = params => {
  let reg = new RegExp("(^|&)" + params + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
  let context = "";
  if (r != null)
    context = r[2];
  reg = null;
  r = null;
  return context == null || context == "" || context == "undefined" ? "" : context;
}

// 获取操作系统
export const getOS = ()=>{
  let OSName = 'Unknow';
  if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
  if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
  if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
  if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
  return OSName;
}
// 获取浏览器
export const getBrowser = ()=>{
  let explorer = window.navigator.userAgent.toLowerCase();
  //ie
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
      if (explorer.indexOf("msie") >= 0) {//ie6-ie9
          let ver = explorer.match(/msie ([\d.]+)/)[1];
          return 'IE ' + ver;//{type:"IE",version:ver};
      } else if (explorer.indexOf("edge") > -1) {
          return 'Edge '
      } else if (explorer.indexOf("trident") > -1 && explorer.indexOf("rv") > -1) {
          return 'IE 11'
      }
  }
  //firefox
  else if (explorer.indexOf("firefox") >= 0) {
      let ver = explorer.match(/firefox\/([\d.]+)/)[1];
      return '火狐(Firefox) ' + ver;//{type:"Firefox",version:ver};
  }
  //Chrome
  else if (explorer.indexOf("chrome") >= 0) {
      let ver = explorer.match(/chrome\/([\d.]+)/)[1];
      return '谷歌(Chrome) ' + ver;//{type:"Chrome",version:ver};
  }
  //Opera
  else if (explorer.indexOf("opera") >= 0) {
      let ver = explorer.match(/opera.([\d.]+)/)[1];
      return '欧朋(Opera) ' + ver; //{type:"Opera",version:ver};
  }
  //Safari
  else if (explorer.indexOf("safari") >= 0) {
      let ver = explorer.match(/version\/([\d.]+)/)[1];
      return '苹果(Safari) ' + ver; //{type:"Safari",version:ver};
  }
}


