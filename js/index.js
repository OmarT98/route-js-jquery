// ^ side bar
$(".open-icon").on("click", () => {
  $(".side-bar").css("left", "0px");
  $(".open-icon").css("display", "none");
});

$(".close-icon").on("click", () => {
  $(".side-bar").css("left", "-250px");
  $(".open-icon").css("display", "block");
});

// * accordion
$(".accordion h3").on("click", (e) => {
  $(e.target).next().slideToggle();

  $(".accordion h3").not(e.target).next().slideUp();
});

// & date count
function displayEventDate(
  daysTillEvent,
  hoursTillEvent,
  minutesTillEvent,
  secondsTillEvent
) {
  let eventHtml = `
    <div class="col-md-6 col-lg-3">
        <div class="card p-4 bg-transparent">
            <div class="card-body text-center">
                <h3 class="card-title">${daysTillEvent} days</h3>
            </div>
        </div>
    </div>

    <div class="col-md-6 col-lg-3">
        <div class="card p-4 bg-transparent">
            <div class="card-body text-center">
                <h3 class="card-title">${hoursTillEvent} hrs</h3>
            </div>
        </div>
    </div>

    <div class="col-md-6 col-lg-3">
        <div class="card p-4 bg-transparent">
            <div class="card-body text-center">
                <h3 class="card-title">${minutesTillEvent} mins</h3>
            </div>
        </div>
    </div>
    
    <div class="col-md-6 col-lg-3">
        <div class="card p-4 bg-transparent">
            <div class="card-body text-center">
                <h3 class="card-title">${secondsTillEvent} secs</h3>
            </div>
        </div>
    </div>
    `;

  document.getElementById("eventDateData").innerHTML = eventHtml;
}

let timeInt = setInterval(() => {
  let currDate = new Date().getTime();
  let eventDate = new Date("2025-02-16 19:00:00").getTime();
  let currDuration = eventDate - currDate;

  let daysTillEvent = Math.floor(currDuration / (1000 * 60 * 60 * 24));
  let hoursTillEvent = Math.floor(
    (currDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesTillEvent = Math.floor(
    (currDuration % (1000 * 60 * 60)) / (1000 * 60)
  );
  let secondsTillEvent = Math.floor((currDuration % (1000 * 60)) / 1000);

  displayEventDate(
    daysTillEvent,
    hoursTillEvent,
    minutesTillEvent,
    secondsTillEvent
  );
}, 1000);

// ! join us
$("textarea").on("keyup", (e) => {
  let textAreaLength = $(e.target).val().length;

  $("#chars").text(
    100 - textAreaLength <= 0 ? "Your reached max char." : 100 - textAreaLength
  );
});

$(".side-bar ul li a").click(function () {
  var sectionId = $(this).attr("href");
  var positionOfSection = $(sectionId).offset().top;

  $("html , body").animate({ scrollTop: positionOfSection }, 2000);
});
