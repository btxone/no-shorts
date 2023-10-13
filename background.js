chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const blockedSites = ["https://www.youtube.com/shorts", "link de ejemplo", "link de ejemplo"];
    if (blockedSites.some(site => tab.url.includes(site))) {
      chrome.tabs.remove(tabId);
    }
  }
});


// A.C.M.UN.PT