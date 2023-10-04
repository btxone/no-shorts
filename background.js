chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && tab.url.includes("https://www.youtube.com/shorts")) {
    chrome.tabs.remove(tabId);
  }
});
