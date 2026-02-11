
  // เรียกใช้ Fetch API เพื่อดึงเนื้อหาจาก menu.html
  fetch('menu.html')
      .then(response => response.text())  // อ่านเนื้อหาเป็น text
      .then(data => {
          document.getElementById('menu-container').innerHTML = data;  // แทรกเนื้อหาใน #menu-container
      })
      .catch(error => {
          console.error('Error loading menu:', error);  // แสดง error หากโหลดไม่สำเร็จ
      });