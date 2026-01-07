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





// document.addEventListener("DOMContentLoaded", () => {

//     const guests = {
//         khach01: "Bạn Tuyết",
//         khach02: "Anh Minh",
//         khach03: "Chị Lan",
//         khach04: "Gia đình Anh Hùng"
//     };

//     const params = new URLSearchParams(window.location.search);
//     const guestId = params.get("id");

//     const guestElement = document.querySelector(".guest-name#guestName");

// if (guestElement) {
//     guestElement.textContent = guests[guestId] || "Quý khách";
// }

//     document.querySelectorAll("a[href]").forEach(link => {
//         if (!guestId) return;

//         const url = new URL(link.href, window.location.origin);
//         if (!url.searchParams.has("id")) {
//             url.searchParams.set("id", guestId);
//             link.href = url.toString();
//         }
//     });

// });


// document.addEventListener("DOMContentLoaded", async () => {

//     const params = new URLSearchParams(window.location.search);
//     const guestId = params.get("id");

//     const guestElement = document.querySelector(".guest-name#guestName");
//     if (!guestElement) return;

//     if (!guestId) {
//         guestElement.textContent = "Quý khách";
//         return;
//     }

//     try {
//         const res = await fetch("guests.csv");
//         const text = await res.text();

//         const rows = text.split("\n").slice(1); // bỏ header
//         const guests = {};

//         rows.forEach(row => {
//             const [id, name] = row.split(",");
//             if (id && name) {
//                 guests[id.trim()] = name.trim();
//             }
//         });

//         guestElement.textContent = guests[guestId] || "Quý khách";

//     } catch (err) {
//         console.error("Không đọc được file CSV", err);
//         guestElement.textContent = "Quý khách";
//     }

// });

document.addEventListener("DOMContentLoaded", async () => {

    const SHEET_URL =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhRLZM2wEhW7Y9JzwOziryys47O1-B57W0jV9FuyucLaQTcvu-SRzIFjh3oTI7IOY_Afw90mvS270B/pub?output=csv";

    const params = new URLSearchParams(window.location.search);
    const guestId = params.get("id");

    const guestElement = document.querySelector(".guest-name#guestName");
    if (!guestElement) return;

    try {
        const res = await fetch(SHEET_URL);
        const text = await res.text();

        const rows = text.trim().split("\n").slice(1);
        const guests = {};

        rows.forEach(row => {
            const [id, name] = row.split(",");
            if (id && name) guests[id.trim()] = name.trim();
        });

        guestElement.textContent = guests[guestId] || "Quý khách";

    } catch {
        guestElement.textContent = "Quý khách";
    }

    // ✅ GIỮ ID KHI BẤM MENU
    if (guestId) {
        document.querySelectorAll("a[href]").forEach(link => {
            const url = new URL(link.href, window.location.origin);
            if (!url.searchParams.has("id")) {
                url.searchParams.set("id", guestId);
                link.href = url.toString();
            }
        });
    }
});

