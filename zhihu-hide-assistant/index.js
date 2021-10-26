hideHeader.addEventListener("click", async (e) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  e.target.innerText = e.target.innerText === '关闭知乎头部' ? '开启知乎头部' : '关闭知乎头部'
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: function () {
      document.querySelector('.AppHeader').style.display = document.querySelector('.AppHeader').style.display ? '' : 'none'
    }
  });
});
hideVideo.addEventListener("click", async (e) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  e.target.innerText = e.target.innerText === '屏蔽知乎视频' ? '显示知乎视频' : '屏蔽知乎视频'
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: function () {
      let zv = document.querySelector('#ZVideoItem-video')
      if (zv) {
        zv.remove()
      } else {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.id = "ZVideoItem-video"
        style.innerHTML= ".ZVideoItem {display: none} .VideoAnswerPlayer {display: none}"
        document.getElementsByTagName('HEAD').item(0).appendChild(style);
      } 
    }
  });
})