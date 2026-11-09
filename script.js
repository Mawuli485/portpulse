/* © 2026 SerdiPulse™ Port OS. All rights reserved. Engineered by Ing. Sedem Atiley for Takoradi Port (GPHA).
   Standalone copy: pages are a snapshot of the live app. Saving, sign-in and approvals need the live app. */
(function () {
  var page = location.pathname.split("/").pop() || "index.html";
  // Highlight the current page in the menu
  document.querySelectorAll("header nav a").forEach(function (a) {
    if (a.getAttribute("href") === page) a.classList.add("bg-secondary", "text-foreground");
  });
  // Keep the copyright year current
  document.querySelectorAll("footer p").forEach(function (p) {
    p.innerHTML = p.innerHTML.replace(/© \d{4}/, "© " + new Date().getFullYear());
  });
  // Sign-in form: open the Command Center (display only)
  var form = document.querySelector("form");
  if (page === "login.html" && form) form.addEventListener("submit", function (e) {
    e.preventDefault(); location.href = "dashboard.html";
  });
  // Sign out returns to sign-in
  document.querySelectorAll("button").forEach(function (b) {
    if (/sign out/i.test(b.textContent)) b.addEventListener("click", function () { location.href = "login.html"; });
  });
  // Live search across any table on the page
  document.querySelectorAll("input[type=search], input[placeholder*='Search' i]").forEach(function (inp) {
    inp.addEventListener("input", function () {
      var q = inp.value.toLowerCase();
      document.querySelectorAll("tbody tr").forEach(function (tr) {
        tr.style.display = tr.textContent.toLowerCase().indexOf(q) > -1 ? "" : "none";
      });
    });
  });
  // Other form actions need the live system
  document.querySelectorAll("form").forEach(function (f) {
    if (page === "login.html") return;
    f.addEventListener("submit", function (e) { e.preventDefault(); alert("Saving works in the live PortPulse system."); });
  });
})();
