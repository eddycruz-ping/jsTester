(function () {
  function initTimeoutTest() {
    var root = document.getElementById("timeout-screen");
    if (!root) return;

    console.log("Custom timeout JS loaded.");

    var title = document.getElementById("timeout-title");
    var message = document.getElementById("timeout-message");
    var proof = document.getElementById("timeout-proof");
    var retryBtn = document.getElementById("timeout-retry-btn");

    if (title) {
      title.textContent = "Custom JS is running on the timeout screen";
    }

    if (message) {
      message.textContent = "This text was updated by the external JavaScript file.";
    }

    if (proof) {
      proof.style.display = "block";
      proof.textContent = "JS executed at: " + new Date().toLocaleString();
      proof.style.color = "#067647";
      proof.style.fontWeight = "bold";
    }

    if (retryBtn) {
      retryBtn.addEventListener("click", function () {
        window.location.reload();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTimeoutTest);
  } else {
    initTimeoutTest();
  }
})();
