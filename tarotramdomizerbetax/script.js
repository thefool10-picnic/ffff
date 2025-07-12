const cards = [
    {
        name: "The Fool",
        image: "/tarotimg/The Fool.jpg",
        description: "การเริ่มต้นใหม่ การเดินทาง ความกล้า ความไร้เดียงสา"
    },
    {
        name: " The Magician",
        image: "/tarotimg/The Magician.jpg",
        description: "พลังงาน, ความสามารถ, การแสดงออก" // Added description for demonstration
    },
    {
        name: "The High Priestess",
        image: "/tarotimg/TheHigh Priestess.jpg",
        description: "ความลึกลับ, ญาณหยั่งรู้, ความรู้ที่ซ่อนเร้น" // Added description for demonstration
    },
    {
        name: "The Empress",
        image: "/tarotimg/The Empress.jpg",
        description: "ความอุดมสมบูรณ์, ธรรมชาติ, การบำรุงเลี้ยง" // Added description for demonstration
    },
    {
        name: "The Emperor",
        image: "/tarotimg/The Emperor.jpg",
        description: "อำนาจ, การควบคุม, โครงสร้าง" // Added description for demonstration
    },
    {
        name: "The Hierophant",
        image: "/tarotimg/The Hierophant.jpg",
        description: "ประเพณี, ความเชื่อ, การเรียนรู้" // Added description for demonstration
    },
    {
        name: " The Lovers",
        image: "/tarotimg/The Lovers.jpg",
        description: "ความรัก, ความสัมพันธ์, ทางเลือก" // Added description for demonstration
    },
    {
        name: "The Chariot",
        image: "/tarotimg/The Chariot.jpg",
        description: "ชัยชนะ, การควบคุม, ความมุ่งมั่น" // Added description for demonstration
    },
    {
        name: "Strength",
        image: "/tarotimg/Strength.jpg",
        description: "ความแข็งแกร่ง, ความอดทน, ความกล้าหาญ" // Added description for demonstration
    },
    {
        name: "The Hermit",
        image: "/tarotimg/The Hermit.jpg",
        description: "การไตร่ตรอง, การแสวงหาความรู้, ความสันโดษ" // Added description for demonstration
    },
    {
        name: "Wheel of Fortune",
        image: "/tarotimg/Wheel of Fortune.jpg",
        description: "โชคชะตา, การเปลี่ยนแปลง, โอกาส" // Added description for demonstration
    },
    {
        name: "Justice",
        image: "/tarotimg/Justice.jpg",
        description: "ความยุติธรรม, ความสมดุล, กฎหมาย" // Added description for demonstration
    },
    {
        name: "The Hanged Man",
        image: "/tarotimg/The Hanged Man.jpg",
        description: "การเสียสละ, การหยุดนิ่ง, มุมมองใหม่" // Added description for demonstration
    },
    {
        name: "Death",
        image: "/tarotimg/Death.jpg",
        description: "การเปลี่ยนแปลง, การสิ้นสุด, การเริ่มต้นใหม่" // Added description for demonstration
    },
    {
        name: "Temperance",
        image: "/tarotimg/Temperance.jpg",
        description: "ความพอดี, ความสมดุล, การประสาน" // Added description for demonstration
    },
    {
        name: " The Devil",
        image: "/tarotimg/The Devil.jpg",
        description: "พันธนาการ, ความหลงผิด, การเสพติด" // Added description for demonstration
    },
    {
        name: "The Tower",
        image: "/tarotimg/The Tower.jpg",
        description: "การเปลี่ยนแปลงอย่างฉับพลัน, การทำลาย, การเปิดเผย" // Added description for demonstration
    },
    {
        name: " The Star",
        image: "/tarotimg/The Star.jpg",
        description: "ความหวัง, แรงบันดาลใจ, การเยียวยา" // Added description for demonstration
    },
    {
        name: "The Moon",
        image: "/tarotimg/The Moon.jpg",
        description: "ความไม่แน่นอน, สัญชาตญาณ, ความฝัน" // Added description for demonstration
    },
    {
        name: " The Sun",
        image: "/tarotimg/The Sun.jpg",
        description: "ความสุข, ความสำเร็จ, การมองโลกในแง่ดี" // Added description for demonstration
    },
    {
        name: " Judgement",
        image: "/tarotimg/Judgement.jpg",
        description: "การตัดสิน, การตื่นรู้, การเรียกคืน" // Added description for demonstration
    },
    {
        name: " The World",
        image: "/tarotimg/The world.png",
        description: "ความสำเร็จ, การเติมเต็ม, การเดินทาง" // Added description for demonstration
    },
];

function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length)
    const card = cards[randomIndex]

    const cardDiv = document.getElementById("card")
    cardDiv.innerHTML = `
    <img src= "${card.image}" alt= "${card.name}" />
    <h2>${card.name}</h2>
    ${card.description ? ` <p> ${card.description} </p>` : ''} `
}