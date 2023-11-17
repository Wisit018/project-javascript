// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');
//     const message = document.querySelector('#message');

//     if ((height === '') || (height < 0) || (isNaN(height))) {
//         //NaN !== NaN
//         results.innerHTML = "&#128520;!! กรุณาระบุส่วนสูง !! &#128520;";

//     } else if (weight === '' || weight < 0 || isNaN(weight)) {
//         results.innerHTML = "&#128520;!! กรุณาระบุน้ำหนัก !! &#128520;";
//     } else {
//         // คำนวณ BMI
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         // แสดงผล
//         results.innerHTML = `<span>${bmi}</span>`

//         // แสดงผล ข้อความ
//         if (bmi < 18.6) {
//             message.innerHTML = "คุณมีน้ำหนักต่ำกว่าเกณฑ์ แนะนำให้รับประทานอาหารให้ครบ 5 หมู่ และออกกำลังกายอย่างสม่ำเสมอ &#128517;";
//         } else if (bmi > 18.6 && bmi < 24.9) {
//             message.innerHTML = "ปกติ &#128528;"
//         } else if (bmi > 24.9) {
//             message.innerHTML = "คุณมีน้ำหนักเกินเกณฑ์ แนะนำให้ควบคุมอาหารและออกกำลังกายอย่างสม่ำเสมอ &#128523; "
//         }
//     }
// });

// อธิบายการทำงานของโค้ด
// คำนวณค่าดัชนีมวลกาย (BMI) จากส่วนสูงและน้ำหนักของผู้ใช้

// ประกาศตัวแปร
const form = document.querySelector('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultsDiv = document.querySelector('#results');
const messageDiv = document.querySelector('#message');

// ฟังก์ชันคำนวณ BMI
function calculateBMI(height, weight) {
  // ตรวจสอบความถูกต้องของข้อมูล
  if (height === '' || height < 0 || isNaN(height)) {
    return NaN;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    return NaN;
  }

  // คำนวณ BMI
  const bmi = weight / ((height * height) / 10000);
  return bmi;
}

// ฟังก์ชันแสดงผลลัพธ์
function showResults(bmi) {
  // แสดงผลลัพธ์ค่า BMI
  resultsDiv.innerHTML = `<span>${bmi}</span>`;

  // แสดงผลลัพธ์ข้อความ
  if (bmi < 18.6) {
    messageDiv.innerHTML = "คุณมีน้ำหนักต่ำกว่าเกณฑ์ แนะนำให้รับประทานอาหารให้ครบ 5 หมู่ และออกกำลังกายอย่างสม่ำเสมอ &#128517;";
  } else if (bmi > 18.6 && bmi < 24.9) {
    messageDiv.innerHTML = "ปกติ &#128528;";
  } else if (bmi > 24.9) {
    messageDiv.innerHTML = "คุณมีน้ำหนักเกินเกณฑ์ แนะนำให้ควบคุมอาหารและออกกำลังกายอย่างสม่ำเสมอ &#128523;";
  }
}

// ทำงานเมื่อผู้ใช้กดปุ่มส่ง
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // เรียกใช้ฟังก์ชันคำนวณ BMI
  const bmi = calculateBMI(heightInput.value, weightInput.value);

  // เรียกใช้ฟังก์ชันแสดงผลลัพธ์
  showResults(bmi);
});