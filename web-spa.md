<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>เจาะลึกเรื่อง Web SPA (Single Page Application)</title>
    <style>
        /* --- สไตล์ตกแต่งหน้าเว็บ (CSS) --- */
        :root {
            --primary-color: #4f46e5;
            --bg-color: #f3f4f6;
            --card-color: #ffffff;
            --text-color: #1f2937;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Helvetica Neue', Arial;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: 40px auto;
            padding: 0 20px;
        }
        header {
            text-align: center;
            margin-bottom: 30px;
        }
        header h1 {
            color: var(--primary-color);
            margin-bottom: 5px;
        }
        /* ส่วนของเมนูนำทางสไตล์ SPA */
        nav {
            display: flex;
            justify-content: center;
            gap: 10px;
            background: #ffffff;
            padding: 10px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
        }
        nav button {
            background: none;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            color: #6b7280;
        }
        nav button:hover {
            background-color: #f3f4f6;
            color: var(--primary-color);
        }
        nav button.active {
            background-color: var(--primary-color);
            color: white;
        }
        /* ส่วนแสดงเนื้อหา (Content Panel) */
        .content-panel {
            background: var(--card-color);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
            min-height: 300px;
        }
        /* โครงสร้างสำหรับการซ่อน/แสดงหน้าเว็บใน SPA */
        .page-content {
            display: none;
        }
        .page-content.active {
            display: block;
            animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        /* สไตล์ตาราง ข้อดี-ข้อเสีย */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #e5e7eb;
            padding: 14px;
            text-align: left;
            vertical-align: top;
        }
        th {
            background-color: #f9fafb;
            color: var(--primary-color);
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        .highlight-box {
            background-color: #eff6ff;
            border-left: 4px solid var(--primary-color);
            padding: 15px;
            margin-top: 15px;
            border-radius: 0 8px 8px 0;
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <h1>Web SPA คืออะไร?</h1>
            <p>หน้าเว็บนี้กำลังจำลองการทำงานเป็น Web SPA ให้คุณดูอยู่!</p>
        </header>

        <!-- แถบเมนูเปลี่ยนหน้า โดยไม่ต้องรีโหลด (SPA Routing Simulation) -->
        <nav>
            <button onclick="navigateTo('what-is')" id="nav-what-is" class="active">1. ความหมาย & ประโยชน์</button>
            <button onclick="navigateTo('pros-cons')" id="nav-pros-cons">2. ข้อดี - ข้อเสีย</button>
            <button onclick="navigateTo('examples')" id="nav-examples">3. ตัวอย่างเว็บไซต์</button>
            <button onclick="navigateTo('prototypes')" id="nav-prototypes">4. เว็บต้นแบบที่เลือกพัฒนา</button>
        </nav>

        <!-- ส่วนของเนื้อหาที่จะสลับสับเปลี่ยนไปมาภายในหน้าเดียว -->
        <main class="content-panel">

            <!-- หน้าที่ 1: ความหมาย & ประโยชน์ -->
            <div id="page-what-is" class="page-content active">
                <h2>Web SPA คืออะไร?</h2>
                <p><strong>Web SPA (Single Page Application)</strong> คือ เว็บแอปพลิเคชันที่โหลดหน้าเว็บหลัก (HTML, CSS, JavaScript) มาเพียง <strong>"ครั้งแรกครั้งเดียว"</strong> หลังจากนั้นเมื่อผู้ใช้คลิกเปลี่ยนเมนู JavaScript จะดึงเฉพาะข้อมูลดิบ (JSON) มาอัปเดตหน้าจอส่วนที่ต้องการทันที โดยบราวเซอร์ไม่ต้องดาวน์โหลดใหม่ทั้งหน้า (ไม่มีอาการหน้าจอขาววาบ)</p>
                
                <h3>ประโยชน์ของการใช้ Web SPA</h3>
                <ul>
                    <li><strong>User Experience (UX) ดีเยี่ยม:</strong> หน้าเว็บสลับไว ลื่นไหลเหมือนแอปมือถือ</li>
                    <li><strong>โหลดไวหลังครั้งแรก:</strong> ไม่ต้องโหลดโครงสร้างหลัก (Header/Footer) ซ้ำ ๆ ทุกรอบ</li>
                    <li><strong>ประหยัดฝั่งเซิร์ฟเวอร์:</strong> ส่งแค่ข้อมูลดิบ ไม่ต้องประมวลผลหน้า HTML ใหม่ทั้งหมด</li>
                </ul>

                <h3>Web SPA ใช้ทำอะไรได้บ้าง?</h3>
                <p>เหมาะกับระบบที่มีการตอบสนองสูง เช่น แดชบอร์ดข้อมูล (SaaS), โซเชียลมีเดีย, เว็บดูหนังฟังเพลง, และกระดานเทรดหุ้น/คริปโต แบบ Real-time</p>
            </div>

            <!-- หน้าที่ 2: ข้อดี - ข้อเสีย -->
            <div id="page-pros-cons" class="page-content">
                <h2>ข้อดี และ ข้อเสียของ Web SPA</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ข้อดี (Pros)</th>
                            <th>ข้อเสีย (Cons)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li>ตอบสนองไว ลื่นไหล ไร้รอยต่อระหว่างเปลี่ยนหน้า</li>
                                    <li>แยกฝั่งหน้าบ้าน (Front-end) และหลังบ้าน (Back-end) ทำงานผ่าน API ชัดเจน</li>
                                    <li>สามารถเก็บ Cache ไว้ที่ฝั่งผู้ใช้ได้ดี</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>โหลดเว็บครั้งแรกสุด (Initial Load) อาจจะช้ากว่าปกติ</li>
                                    <li>ทำ SEO (ให้ติดกูเกิล) ได้ยากกว่าเว็บทั่วไป เพราะบอทเก็บข้อมูลยาก (ต้องใช้พวก SSR ช่วยแก้)</li>
                                    <li>กินทรัพยากร/แรม เครื่องผู้ใช้สูง</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- หน้าที่ 3: ตัวอย่างเว็บไซต์ -->
            <div id="page-examples" class="page-content">
                <h2>ตัวอย่างเว็บไซต์ที่ใช้เทคโนโลยี Web SPA</h2>
                <div style="display: flex; gap: 20px;">
                    <div style="flex: 1;">
                        <h3>ในประเทศไทย (Thailand)</h3>
                        <ul>
                            <li><strong>Agoda:</strong> หน้าค้นหาและกรองที่พัก</li>
                            <li><strong>Bitkub:</strong> กระดานเทรดคริปโตที่ตัวเลขวิ่งตลอดเวลา</li>
                            <li><strong>Wongnai:</strong> ระบบค้นหาและรีวิวร้านอาหาร</li>
                            <li><strong>Pantip:</strong> การสลับแท็บกระทู้เวอร์ชันใหม่</li>
                        </ul>
                    </div>
                    <div style="flex: 1;">
                        <h3>ในต่างประเทศ (Global)</h3>
                        <ul>
                            <li><strong>Gmail / Google Maps:</strong> ต้นตำรับยุคแรก ๆ</li>
                            <li><strong>Facebook / Instagram:</strong> หน้าฟีดบนบราวเซอร์</li>
                            <li><strong>Spotify Web Player:</strong> เครื่องเล่นเพลงบนเว็บ</li>
                            <li><strong>Netflix:</strong> ระบบค้นหาซีรีส์ที่ลื่นไหล</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- หน้าที่ 4: เว็บต้นแบบที่เลือกพัฒนา -->
            <div id="page-prototypes" class="page-content">
                <h2>โมเดลต้นแบบที่เลือกพัฒนาเลียนแบบฟังก์ชัน SPA</h2>
                
                <div class="highlight-box">
                    <h3>1. ต้นแบบฝั่งไทย: Agoda (หน้าผลการค้นหาและฟิลเตอร์ที่พัก)</h3>
                    <p><strong>ฟังก์ชันที่จะเลียนแบบ:</strong> ระบบ Dynamic Filtering (ตัวกรองข้อมูลแบบทันที) เช่น เมื่อผู้ใช้คลิกเลือกราคา หรือดาวของโรงแรม ระบบ SPA จะดึงข้อมูลเฉพาะโรงแรมที่ตรงเงื่อนไขมาเปลี่ยนบนหน้าจอทันทีโดยไม่ต้องโหลดหน้าเว็บใหม่ พร้อมทำระบบ Infinite Scroll เลื่อนลงไปเรื่อย ๆ แล้วโหลดข้อมูลเพิ่มได้ลื่น ๆ</p>
                </div>

                <div class="highlight-box" style="margin-top: 20px; border-left-color: #1db954;">
                    <h3>2. ต้นแบบฝั่งต่างประเทศ: Spotify Web Player (หน้าเครื่องเล่นและคลังเพลง)</h3>
                    <p><strong>ฟังก์ชันที่จะเลียนแบบ:</strong> ระบบ Persistent Playback (แถบเครื่องเล่นเพลงที่เล่นต่อเนื่อง) สิ่งที่จะทำคือ หน้าเว็บเปลี่ยนไปดูข้อมูลศิลปินคนอื่น หรือเข้าไปหน้าคลังเพลงได้เรื่อย ๆ แต่ "แถบเพลงด้านล่างจะทำงานต่อเนื่อง เพลงไม่ดับและไม่กระตุก" เพื่อศึกษาการจัดการสถานะข้อมูล (State Management) และระบบ Routing ของ SPA ขั้นสูง</p>
                </div>
            </div>

        </main>
    </div>

    <!-- --- ส่วนควบคุมการทำงาน (JavaScript) --- -->
    <script>
        // ฟังก์ชันหลักในการจำลอง Router ของ Web SPA (เปลี่ยนหน้าโดยไม่ Refresh)
        function navigateTo(pageId) {
            // 1. ซ่อนทุกหน้าเพจก่อน
            const pages = document.querySelectorAll('.page-content');
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // 2. เอาคลาส active ออกจากทุกปุ่มบนเมนู
            const buttons = document.querySelectorAll('nav button');
            buttons.forEach(button => {
                button.classList.remove('active');
            });

            // 3. แสดงเฉพาะหน้าเพจ และเปิดใช้คลาส active บนปุ่มที่เราคลิกเลือก
            document.getElementById('page-' + pageId).classList.add('active');
            document.getElementById('nav-' + pageId).classList.add('active');
            
            // ปล. สังเกตดูที่แถบ URL ของบราวเซอร์ จะไม่มีการรีเฟรชหรือโหลดหน้าใหม่เลยแม้แต่น้อย!
            console.log(`SPA Switched to page: ${pageId} successfully!`);
        }
    </script>
</body>
</html>