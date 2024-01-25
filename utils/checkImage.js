
export const checkImage = (url, onLoadCallback, onErrorCallback) => {
  var img = new Image();
  img.src = url;

  img.onload = function () {
    if (onLoadCallback) {
      onLoadCallback();
    }
  };

  img.onerror = function () {
    if (onErrorCallback) {
      onErrorCallback();
    }
  };
}