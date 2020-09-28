import { readable } from "svelte/store";

const extensionId = "dgomkfddaiaajohfdbbecmnpgfikoibf";

let result;

export const dispatchFxEvent = (message) => {
  chrome.runtime.sendMessage(extensionId, message, function (response) {
    console.debug("received in website dispatch", response);
    result = response;
  });
};

export const firefox = readable({}, async (set) => {
  chrome.runtime.sendMessage(extensionId, { activeStudies: true }, function (
    response
  ) {
    result = response;
    console.log("recieved in website listener", response);
    set(response);
  });
});
