// Click event for the start button
$(document).ready(function() {
    $(".start").click(function () {
        $(".stage1").fadeOut();
    fire_modal(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png",
        "Chúc bạn có một sinh nhật tuyệt vời!",
        "Vì hôm nay là ngày đặc biệt nên thật phù hợp khi có thể tự làm chiếc bánh sinh nhật kỹ thuật số :>.Sinh nhật vui vẻ! Chúc chị tràn đầy năng lượng và sự tự tin để đạt được mọi mục tiêu trong công việc."
    );
})});

// Initialize progress variable
let progress = 1;

// Click event for modal button
$(".modal_content button").click(function () {
    progress++;
    close_modal(progress);
});

// Function to close modal and show the next stage
function close_modal(stage) {
    const modal = $(".birthday_inner__modal");
    modal.css("transform", "translateY(-50%) scale(0)");
    setTimeout(function () {
        $(".stage" + stage).fadeIn();
    }, 600);
}

// Function to show the modal
function fire_modal(imgurl, title, content) {
    const modal = $(".birthday_inner__modal");
    modal.find("h1").html(title);
    modal.find("img").attr("src", imgurl);
    modal.find("p").html(content);
    setTimeout(function () {
        modal.css("transform", "translateY(-50%) scale(1)");
    }, 1000);
}

// Initialize mixing and mixtimes variables
let mixing = false;
let mixtimes = 0;

// Click event for mixer
$(".mixer").click(function () {
    if (!mixing) {
        mixing = true;
        mixtimes++;
        $(".mix_spoon").addClass("move");
        setTimeout(function () {
            $(".mix_spoon").removeClass("move");
            mixing = false;
        }, 1000);
    }
    if (mixtimes === 5) {
        $(".stage2").fadeOut();
        fire_modal(
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png",
            "Trộn thành công!",
            "Xin chúc mừng, sự kết hợp thật hoàn hảo! Sau khi đổ hỗn hợp vào khuôn nướng bánh, giờ là lúc cho hỗn hợp vào lò nướng kỹ thuật số trong khoảng 3 giây. Khoảng thời gian đó là đủ để có lớp nền xốp đẹp."
        );
    }
});

// Make the tin draggable and the oven droppable
$(document).ready(function() {
$(".tin").draggable({
    revert: true
})});

$(document).ready(function() {
$(".oven").droppable({
    drop: function () {
        $(".stage3").fadeOut();
        fire_modal(
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png",
            "Nướng vừa đủ chín nha :>!",
            "Đúng! Bạn là một đầu bếp bậc thầy. Phần đế đã được nướng chín và trông siêu ngon. Bây giờ là lúc kết hợp lớp nền này với nhiều nguyên liệu khác như mứt, sô cô la, v.v.."
        );
    }
})});

// Initialize bases and fillings counters
let bases = 0;
let fillings = 0;

// Click event for sponges
$(".sponges .item_inner").click(function () {
    $(".sponges").addClass("inactive");
    $(".fillings").removeClass("inactive");
    const t = $(this).attr("class").split(" ").pop();
    bases++;
    if (bases <= 6) {
        add_sponge(t);
    }
});

// Click event for fillings
$(".fillings .item_inner").click(function () {
    $(".fillings").addClass("inactive");
    $(".sponges").removeClass("inactive");
    const f = $(this).attr("class").split(" ").pop();
    fillings++;
    if (fillings <= 7) {
        add_filling(f);
    }
});

// Function to add a sponge
function add_sponge(type) {
    $(".cakemake").prepend(
        `<div style="width:${200 - bases * 20}px" class="sponge sponge-${type}">
            <div></div><div></div><div></div><div></div><div></div>
        </div>`
    );
    $(".sponges h5 span").html(bases);
}

// Function to add a filling
function add_filling(type) {
    $(".cakemake").prepend(
        `<div style="width:${200 - bases * 20}px" class="filling filling-${type}">
            <div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div>
        </div>`
    );
    $(".fillings h5 span").html(fillings);
}

// Click event to restart the game
$(".startagain").click(function () {
    $(".cakemake").html('<div class="base"></div>');
    bases = 0;
    fillings = 0;
    $(".sponges h5 span").html(bases);
    $(".fillings h5 span").html(fillings);
    $(".fillings").removeClass("inactive");
    $(".sponges").addClass("inactive");
});

// Function to finalize the cake creation
function fin() {
    $("h1,h2,.options,.startagain,.add").fadeOut();
    setTimeout(function () {
        $(".cakemake").fadeIn();
        $(".cakemake").animate({ "margin-top": "0px" });
    }, 1000);
    add_candle();
    $("svg").addClass("text");
}

// Function to add a candle
function add_candle() {
    const stages = $(".cakemake > div").length;
    const h = (stages / 2) * 41 + 22 + "px";
    console.log(stages);
    $(".cakemake").prepend(
        '<div class="candle"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/candle.png" /></div>'
    );
    $("svg").show();
    setTimeout(function () {
        $(".sa").fadeIn();
    }, 2200);
}

// Click event to add the cake
$(".add").click(function () {
    fin();
});

// Click event to restart the page
$(".sa").click(function () {
    window.location.reload();
});