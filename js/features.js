//for file path change -->

document.getElementById("home-btn").addEventListener("click", function () {
  window.history.back();
});





// font-family lexend ;
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
};