// ⬇️ NGÀY SỰ KIỆN ⬇️  
const weddingDate = new Date("February 6, 2026 00:00:00").getTime();

setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h.toString().padStart(2, "0");
    document.getElementById("minutes").innerHTML = m.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = s.toString().padStart(2, "0");

}, 1000);


// ===== ĐỔI TÊN KHÁCH MỜI QUA URL =====
// document.addEventListener("DOMContentLoaded", function () {
//     const params = new URLSearchParams(window.location.search);
//     const guest = params.get("name");

//     if (guest) {
//         document.getElementById("guestName").innerText =
//             decodeURIComponent(guest);
//     }
// });
// ==========================
// LẤY TÊN KHÁCH TỪ LINK
// ==========================
// const params = new URLSearchParams(window.location.search);
// const guestName = params.get("name");

// if (guestName) {
//     document.getElementById("guestName").innerText = decodeURIComponent(guestName);
// }

// in hoa chữ cái đầu
// document.addEventListener("DOMContentLoaded", function () {
//     const params = new URLSearchParams(window.location.search);
//     let guest = params.get("name");

//     if (guest) {
//         guest = decodeURIComponent(guest)
//             .toLowerCase()
//             .replace(/\b\w/g, c => c.toUpperCase());

//         document.getElementById("guestName").innerText = guest;
//     }
// });


// hiệu ứng tim
function createFallingHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart falling-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createFallingHeart, 400);


// 💖 TIM BAY
function createFallingHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart falling-heart";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createFallingHeart, 400);






// ===============================
// DANH SÁCH KHÁCH MỜI (ID → TÊN)
// ===============================
const guests = {
    khach01: "Bạn Tuyết",
    khach02: "Anh Minh",
    khach03: "Chị Lan",
    khach04: "Gia đình Anh Hùng"
};

// ===============================
// LẤY ID TỪ URL
// Ví dụ: index.html?id=khach01
// ===============================
const params = new URLSearchParams(window.location.search);
const guestId = params.get("id");

// ===============================
// GÁN TÊN VÀO HTML
// ===============================
const guestElement =
    document.getElementById("guestName") ||
    document.querySelector(".guest-name");

if (guestElement) {
    guestElement.textContent = guests[guestId] || "Quý khách";
}