"use strict";
(self["webpackChunkuntitled_folder_3"] =
  self["webpackChunkuntitled_folder_3"] || []).push([
  ["pageLoader"],
  {
    /***/ "./src/pageLoader.js":
      /*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        function createHeader(title) {
          const headerDiv = document.createElement("div");
          headerDiv.classList.add("headerDiv");
          const mainHeader = document.createElement("h1");
          mainHeader.textContent = title;
          headerDiv.appendChild(mainHeader);

          return headerDiv;
        }

        function createNavBar(buttonOne, buttonTwo) {
          const navDiv = document.createElement("div");
          navDiv.classList.add("navBarDiv");
          const firstButton = document.createElement("button");
          firstButton.textContent = buttonOne;
          firstButton.setAttribute("id", "homeButton");

          const secondButton = document.createElement("button");
          secondButton.textContent = buttonTwo;
          secondButton.setAttribute("id", "menuButton");

          navDiv.appendChild(firstButton);
          navDiv.appendChild(secondButton);

          return navDiv;
        }

        function createMainDiv() {
          const mainDiv = document.createElement("div");
          mainDiv.classList.add("mainDiv");
          return mainDiv;
        }

        function loadPage() {
          const contentDivSelector = document.querySelector(".content");
          const header = createHeader("Sakura Sushi");

          contentDivSelector.appendChild(header);

          const navigationBar = createNavBar("Home", "Our Menu");
          contentDivSelector.appendChild(navigationBar);

          const mainDiv = createMainDiv();
          contentDivSelector.appendChild(mainDiv);

          const mainDivContentArea = document.createElement("div");
          mainDivContentArea.classList.add("contentArea");
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          loadPage;

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/pageLoader.js");
    /******/
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWRlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxFQUFFLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZC1mb2xkZXItMy8uL3NyYy9wYWdlTG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0aXRsZSkge1xuXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyRGl2JylcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZVxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKVxuICAgIFxuICAgIHJldHVybiBoZWFkZXJEaXZcbiAgfVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKGJ1dHRvbk9uZSwgYnV0dG9uVHdvKSB7XG4gICAgY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYXZEaXYuY2xhc3NMaXN0LmFkZCgnbmF2QmFyRGl2JylcbiAgICBjb25zdCBmaXJzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZmlyc3RCdXR0b24udGV4dENvbnRlbnQgPSBidXR0b25PbmVcbiAgICBmaXJzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZUJ1dHRvbicpXG5cbiAgICBjb25zdCBzZWNvbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHNlY29uZEJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblR3b1xuICAgIHNlY29uZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudUJ1dHRvbicpXG5cbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQoZmlyc3RCdXR0b24pXG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKHNlY29uZEJ1dHRvbilcblxuICAgIHJldHVybiBuYXZEaXZcbiAgfVxuXG4gZnVuY3Rpb24gY3JlYXRlTWFpbkRpdiAoKSB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluRGl2JylcbiAgICByZXR1cm4gbWFpbkRpdlxuIH1cblxuICBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc3QgY29udGVudERpdlNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoXCJTYWt1cmEgU3VzaGlcIilcblxuICBjb250ZW50RGl2U2VsZWN0b3IuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gIGNvbnN0IG5hdmlnYXRpb25CYXIgPSBjcmVhdGVOYXZCYXIoXCJIb21lXCIgLCBcIk91ciBNZW51XCIpXG4gIGNvbnRlbnREaXZTZWxlY3Rvci5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uQmFyKVxuXG4gIGNvbnN0IG1haW5EaXYgPSBjcmVhdGVNYWluRGl2KClcbiAgY29udGVudERpdlNlbGVjdG9yLmFwcGVuZENoaWxkKG1haW5EaXYpXG5cbiAgY29uc3QgbWFpbkRpdkNvbnRlbnRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbkRpdkNvbnRlbnRBcmVhLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRBcmVhJylcbiAgfVxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2VcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
