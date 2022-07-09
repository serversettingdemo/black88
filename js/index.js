let div = document.createElement('div');
div.className = 'container w-50 py-5';
let div2 = document.createElement('div');
div2.className = 'row justify-content-center text-center fixed-top bg-header';

let col = document.createElement('div');
col.className = 'col-md-11';
col.innerHTML = '<img src="asset/img/logo.webp" alt="Logo" width="120px" class="img-fluid border-bottom m-2">';

div.append(div2);
div2.append(col);

document.querySelector('#app').append(div);

// ==================================================
let container = document.createElement('div');
container.className = 'container';
let row = document.createElement('div');
row.className = 'row justify-content-center px-2';

let button = document.createElement('div');
button.className = 'd-flex col-md-8 col-lg-9';
button.innerHTML = `<a href="#" target="_blank" class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Login</a>
<a href="#" class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Register</a>`;

let colRef = document.createElement('div');
colRef.className = 'col-sm-11 col-md-8 col-lg-9';
colRef.innerHTML = `<a href="https://13.213.113.183/mobile/register" rel="nofollow noreferrer" target="_blank"><button type="login" class="button w-100 text-black fs-5 my-3">
Black88 Daftar Situs Judi 138 Slot Online Terpercaya Dan Terbaik</button></a>`;

let rowbank = document.createElement('div');
rowbank.className = 'row justify-content-center text-center mb-4';
// let colBom = document.createElement('div');
// colBom.className = 'col-md-8 col-lg-9';
// colBom.innerHTML = '<img src="asset/img/bom.png" alt="Logo" width="150px" class="img-fluid m-2">';

let colBank = document.createElement('div');
colBank.className = 'col-sm-11 col-md-7 col-lg-8';
let borderBank = document.createElement('div');
borderBank.className = 'border-bank p-3';
borderBank.innerHTML = ' <img src="asset/img/bank.webp" alt="Bank Lokal" class="img-fluid" width="792px" height="auto" />';

container.append(row, rowbank);
row.append(button, colRef);

rowbank.append(colBank);
colBank.append(borderBank);

// ==================================================

document.querySelector('#app').append(container);

let containerTable = document.createElement('div');
containerTable.className = 'container';
let rowTable = document.createElement('div');
rowTable.className = 'row justify-content-center text-white px-3';
let divColTable = document.createElement('div');
divColTable.className = 'col-md-8 col-lg-9';
let divTable = document.createElement('div');
divTable.className = 'table';
divTable.id = 'table';


let table = document.createElement('table');
table.className = 'list_table';
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

containerTable.append(rowTable);
rowTable.append(divColTable);
divColTable.append(divTable);
divTable.append(table);
table.append(thead, tbody);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Tentang Situs Slot Online Black88";
heading_1.setAttribute("colspan", "3");

row_1.appendChild(heading_1);
thead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.setAttribute("class", "p-2");
row_2_data_1.innerHTML = "Nama Situs";
let row_2_data_2 = document.createElement('td');
row_2_data_2.setAttribute("class", "p-2");
row_2_data_2.innerHTML = '<a href="https://13.213.113.183/" title="BomSlot" rel="noopener"target="_blank">BomSlot</a>';

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
tbody.appendChild(row_2);

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.setAttribute("class", "p-2");
row_3_data_1.innerHTML = "Jenis Permainan";
let row_3_data_2 = document.createElement('td');
row_3_data_2.setAttribute("class", "p-2");
row_3_data_2.innerHTML = '<a href="#" title="Slot Online">Slot Online</a></td>';

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
tbody.appendChild(row_3);

// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.setAttribute("class", "p-2");
row_4_data_1.innerHTML = "Minimal Deposit";
let row_4_data_2 = document.createElement('td');
row_4_data_2.setAttribute("class", "p-2");
row_4_data_2.innerHTML = 'Rp20.000';

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
tbody.appendChild(row_4);

// Creating and adding data to third row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.setAttribute("class", "p-2");
row_5_data_1.innerHTML = "Metode Deposit";
let row_5_data_2 = document.createElement('td');
row_5_data_2.setAttribute("class", "p-2");
row_5_data_2.innerHTML = 'Transfer Bank, E-Wallet/QRIS, Pulsa';

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
tbody.appendChild(row_5);

// Creating and adding data to third row of the table
let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.setAttribute("class", "p-2");
row_6_data_1.innerHTML = "Mata Uang";
let row_6_data_2 = document.createElement('td');
row_6_data_2.setAttribute("class", "p-2");
row_6_data_2.innerHTML = 'IDR (Indonesian Rupiah)';

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
tbody.appendChild(row_6);

// Creating and adding data to third row of the table
let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.setAttribute("class", "p-2");
row_7_data_1.innerHTML = "Jam Operasional";
let row_7_data_2 = document.createElement('td');
row_7_data_2.setAttribute("class", "p-2");
row_7_data_2.innerHTML = '24 Jam Online';

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
tbody.appendChild(row_7);

// Creating and adding data to third row of the table
let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.setAttribute("class", "p-2");
row_8_data_1.innerHTML = "Daftar Sekarang";
let row_8_data_2 = document.createElement('td');
row_8_data_2.setAttribute("class", "p-2");
row_8_data_2.innerHTML = '<a href="https://13.213.113.183/mobile/register" rel="nofollow noopener"target="_blank" title="Daftar Slot Online BomSlot">Klik Disini</a>';

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
tbody.appendChild(row_8);
// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerTable);


let containerContent = document.createElement('div');
containerContent.setAttribute("class", "container bg-card py-4");

let rowContent = document.createElement('div');
rowContent.setAttribute("class", "row justify-content-center text-white");

let colBanner = document.createElement('div');
colBanner.setAttribute("class", "col-md-8 col-lg-12 text-center");
let titleBanner = document.createElement('p');
titleBanner.setAttribute("class", "fs-4");
titleBanner.innerHTML = 'Situs Slot Online Terpercaya Indonesia';

let imgBanner = document.createElement('div');
imgBanner.setAttribute("class", "text-center");
imgBanner.innerHTML = '<img src="asset/img/bomslot-3.jpg" class="img-fluid border" alt="banner"><hr style="color: #FFFFFF;">';

let colBody = document.createElement('div');
colBody.setAttribute("class", "col-md-8 col-lg-11");

let titleBody = document.createElement('h1');
titleBody.setAttribute("class", "text-warning text-center");
titleBody.innerHTML = 'Black88 : Daftar Situs Agen Judi Slot Online Pragmatic Slot88 Mudah Menang';

let divBody = document.createElement('div');
divBody.setAttribute("class", "text-white justify");

let descBody = document.createElement('p');
descBody.className = 'justify';
descBody.innerHTML = `Selamat datang slotter mania Bocoran Slot Gacor di situs slot online Black88, pada Hari Ini berbagai fasilitas lengkap untuk mencukupi 
keinginan para member Situs Judi Slot Online Sering Kasih Menang yang senantiasa berikan tambahan hadiah bonus jackpot slot online terbesar yang di memberikan 
oleh Situs Slot Gacor Jackpot Terbesar. <br><br>

Kami menyediakan berbagai permainan bocoran slot gacor malam ini yang ringan untuk menang seperti bola online sbobet88, live casino online, website judi 
slot online Black88 di tahun 2022 dengan berbagai permainan di antara lainya adalah, poker online, arcade online yang akan bisa kalian mainkan sepanjang 24 jam non stop. <br> <br>

Bocoran RTP slot hari ini memang dibuat khusus buat kalian yang ingin menang bermain slot online gampang dapat jackpot. Karena di sini situs yang kami rekomendasikan, 
selain memiliki winrate tertinggi namun juga memiliki promo bonus yang menggiurkan.`;

let titleBody_2 = document.createElement('h2');
titleBody_2.setAttribute("class", "text-warning text-center");
titleBody_2.innerHTML = 'Keuntungan Bermain di Situs Slot Online Black88';

let divBody_2 = document.createElement('div');
divBody_2.setAttribute("class", "text-white justify");

let descBody_2 = document.createElement('p');
descBody_2.className = 'justify';
descBody_2.innerHTML = `Keuntungan yang paling utama ketika bergabung di situs slot online Black88 ialah akan dilayani dengan baik. Pelayanan yang diberikan oleh 
situs ini berupa tersedianya customer service yang bisa sehat para pemain bila mendapatkan permasalahan atau keluhan yang terkait dengan situs itu. Dalam permainan 
slot online yang dimana Anda sebagai pemain mempunyai kesempatan untuk mendapatkan sebuah hadiah yang sangat. Untuk mendapatkan hadiah yang sangat besar berupa jackpot 
yang akan menanti Anda di ujung permainan. <br><br>
Permainan slot online memang sangat beranekaragam. Mulai dari slot online klasik, slot progresif, slot non-progresif, dan masih banyak lagi permainan seru dan memukau lainnya. 
Nah Anda berhasil bergabung di situs slot online yang terpercaya maka hendak mendapatkan keuntungan yang mana Anda bisa memainkan seluruh permainan itu hanya dengan 1 akun 
taruhan aja atau 1 user ID. Yang dimana dengan 1 akun tersebut Anda bisa memulai berbagai macam permainan yang sangat seru dan menyenangkan. `;


let titleBody_3 = document.createElement('h2');
titleBody_3.setAttribute("class", "text-warning text-center justify-content-between");
titleBody_3.innerHTML = 'Metode Pembayaran di Situs Slot Black88 Slot';

let divBody_3 = document.createElement('div');
divBody_3.setAttribute("class", "text-white justify");

let descBody_3 = document.createElement('p');
descBody_3.innerHTML = `Jika kamu tampil pada slot formal dan terpercaya dalam Indonesia, di setiap situs jelas mempunyai metode deposit ataupun pembayaran secara bermacam rupa. 
Selain itu, kami juga menawarkan metode pembayaran menggunakan e-money berupa OVO, Dana dan GO-Pay. Akan tetapi saat Anda ingin membayar dengan metode pembayaran menggunakan Bank 
atau transfer melalui rekening juga bisa. Yang dimana kami menyediakan berbagai macam Bank untuk memudahkan Anda dalam transaksi dan melakukan Deposit di situs Black88.<br><br>
<ul>
<li><b>Deposit Menggunakan Transfer Antar Bank</b><br>
Jika ingin mentransfer dengan menggunakan antar lain Bank bisa digunakan yang dimana ada lima bank berbeda untuk memudahkan Anda memilih Bank yang Anda inginkan. Anatara lain Bank 
tersebut adalah BCA, Bank Mandiri, Bank CIMB Niaga, BNI dan BRI yang dimana Anda bisa memilih diantara kelima Bank tersebut untuk melakukan metode transaksi Deposit dan Penarikan 
saldo atau Withdraw. <br><br>
Saat Anda melakukan untuk metode Deposit saat diawal dan ingin melakukan penarikan saldo tersebut. Anda juga harus memikirkan biaya Deposit di awal saat Anda pertama kali mendaftar 
di situs Black88. Yang dimana Anda harus deposit sebesar 20 ribu rupiah, yang dimana Anda tidak perlu untuk mengirim bukti kepada Customer Service atau live chat. Karena sistem kami 
sudah mengetahui dari pihak siapa untuk melakukan transaksi Deposit tersebut. <br><br>
Untuk saat Anda ingin melakukan metode penarikan saldo, yang dimana Anda ingin menarik saldo dari akun Anda. Hendaknya Anda sudah memiliki persyaratan yang berlaku, karena persyaratan 
berlaku akan memudahkan Anda untuk di proses penarikan saldo Anda. Hendaknya akun Anda sudah mencukupi yang dimana saldo Akun Anda, sudah memiliki saldo sebesar 50 ribu rupiah. </li><br>
<li><b>Deposit Menggunakan Pulsa</b><br>
Saat Anda ingin menggunakan pemotongan Pulsa atau transfer pulsa saat ingin melakukan Deposit maka. Anda juga bisa menggunakan layanan Telkomsel dan XL untuk Deposit menggunakan pulsa 
karena tidak akan pemotongan saldo saat Anda mentransfer pulsa Anda untuk melakukan Deposit.</li><br>
<li><b>Cara Melakukan Withdraw</b><br>
Saat Anda ingin melakukan Withdraw atau penarikan saldo untuk menguangkan hasil dari kemenangan Anda saat bermain slot online Black88. Anda juga bisa karena saat ingin transfer ke dalam 
rekening Anda. Jika Anda Deposit di awal menggunakan transfer pulsa maka yang Anda harus melakukan pencocokan data dan privasi yang sudah anda pegang.</li>
</ul>
Saat melakukan Withdraw Anda harus mengirim pesan kepada Customer service, yang dimana Anda ingin melakukan penarikan saldo ke rekening Anda. Yang pertama Anda melakukan pencocokan data, 
yang dimana Anda mengirim bukti berupa buku rekening Bank Anda. `;

let titleBody_4 = document.createElement('h2');
titleBody_4.setAttribute("class", "text-warning text-center");
titleBody_4.innerHTML = 'Keuntungan Bermain Black 88 Slot Pragmatic Play';

let divBody_4 = document.createElement('div');
divBody_4.setAttribute("class", "text-white justify");

let descBody_4 = document.createElement('p');
descBody_4.innerHTML = `Terkenal dengan slot online slot pragmatic, live casino, dan bingonya yang sangat berkualitas yang merupakan iGaming provider terpercaya, Pragmatic Play juga 
mempunyai banyak kelebihan menguntungkan yang lain dalam berbagai bidang, yaitu:<br>
Rincian Permainan Pragmatic Play Slot Online di situs slot online Black88 yang Lengkap
Provider tersebut memunculkan berbagai jenis permainannya dengan lengkap beserta keterangannya dan semua keseruannya, baik itu permainan slot, bingo, maupun kasino. Jadi, Anda tidak 
perlu khawatir akan kekhawatiran ketika mulai bermain di slot pragmatic. <br> <br>
<ul>
<li><b>Informasi Lengkap Tentang Hal Yang lain</b><br>
Tidak hanya menampilkan informasi tentang game, provider ini juga menampilkan informasi nyata tentang fitur, layanan, mata uang, keamanan, beserta beberapa informasi berharga terkait 
dengannya. Yang dimana website situs slot online Black88 merupakan situs slot online terbaik yang pernah ada.</li><br>
<li><b>Berbagai Bahasa dan Mata Uang</b><br>
Permainan slot tersedia di dalam berbagai bahasa. Tidak kurang dari 31 bahasa tersedia untuk memberikan pengalaman seru bermain slot secara online bagi seluruh dunia. Selain itu, 
permainan slot pada slot pragmatic juga tersedia di dalam semua mata uang sehingga memudahkan proses deposit dan withdraw. Mata uang yang digunakan di dalam website situs slot online 
Black88 bisa menggunakan BTC, KYC dan rupiah. <br><br>
Gaming provider terpercaya ini juga terbuka untuk bervariasi saran. Jadi, untuk permainan terdiri dari slot online, bingo, dan live casino. Jika pemain merasakan perlu menambahkan 
bahasa atau mata uang, pemain bisa meminta penambahan bahasa dan mata uang apapun cuma di dalam beberapa minggu.</li><br>
<li><b>Permainan</b><br>
Jika Anda ingin mencoba permainan selain slot, cobalah memainkan berbagai permainan yang lain seperti live casino, bingo, olahraga virtual, juga berbagai permainan lainnya. 
Permainan-permainan tersebut dirancang untuk memberikan kemahiran immersive untuk para pemain. Karena daftar permainan di dalam website situs slot online Black88 berbagai permainan 
yang sangat menyenangkan dan memukau karena grafis dari permainan slot online. </li><br>
<li><b>Tata cara</b><br>
Dengan bertambah penggunaan smartphone, semua game-nya sudah didesain untuk dapat dimainkan dalam semua saluran baik web, iOS, maupun Android. Pihaknya mengerti masalah jaringan yang 
kerap kali menghambat kelancaran game. Jadi, setiap game-nya pun bisa di-download untuk dimainkan dengan koneksi internet yang lambat di desktop. <br><br>
Karena jika Anda menggunakan koneksi yang lambat saat menggunakan laptop atau komputer Anda bisa memainkannya melalui Android dan iOS. Yang dimana Anda bisa bermain melalui website 
situs slot online Black88 atau mendownload aplikasinya yang sudah tersedia di Playstore. Anda hanya perlu mencarinya di Playstore dengan format Black88.</li><br>
<li><b>Laporan</b><br>
Dengan tampilan yang user-friendly, provider ini juga menyediakan berbagai macam fitur seperti aneka game, konfigurasi promosi, serta hadiah gratis. Menu perincian untuk riwayat game 
yang dimainkan, sesi, taruhan, beserta hasil taruhan pun disediakan secara komprehensif. Pemain mampu mengatur laporan berdasarkan mata uang, lokasi, waktu, game, dll dengan mudah.</li><br>
<li><b>Audit dan Kontrol</b><br>
Semua produknya ditinjau secara berkala oleh badan independen yang telah resmi terakreditasi untuk memastikan keacakan dan keseimbangan. Oleh karena itu, setiap produknya telah diuji 
menggunakan Random Number Generator serta disertifikasi Gaming Laboratories International, Quinzel, dan Gaming Associates, yang ialah syarat untuk semua pasar tempatnya berjalan.</li><br>
<li><b>Lisensi</b><br>
Provider ini juga telah memiliki segenap lisensi dari berbagai game controller diantaranya MGA, Gambling Commision, ONJN Romania, dan BMM Testlabs. Selain itu, iGaming provider juga telah 
disertifikasi oleh Gaming Labs. Sebagai bagian dari peraturan lisensi, setiap produknya telah terintegrasi dengan perangkat lunak perlindungan pemain. Setiap game juga sudah menjalani 
pengujian internal secara berkala demi terjaminnya bobot serta telah diverifikasi pula oleh pihak ketiga yang independen.</li><br>
<li><b>Penghargaan</b><br>
Provider ini pula telah memperoleh banyak penghargaan seperti 2017 EGR Nordic Awards, 2019 Malta Gaming Awards for Best Game Vendor, 2020 Which Bingo Awards for Best Bingo Software 
and Best Slot Provider, dan masih banyak lagi. Dengan banyaknya penghargaan, iGaming provider satu ini tentu aman untuk dijadikan tempat bermain.</li><br>
</ul>`;

let titleBody_5 = document.createElement('h2');
titleBody_5.setAttribute("class", "text-warning text-center");
titleBody_5.innerHTML = 'Keuntungan Berrmain di Slot Top Trend Gaming';

let divBody_5 = document.createElement('div');
divBody_5.setAttribute("class", "text-white justify");

let descBody_5 = document.createElement('p');
descBody_5.innerHTML = `Terdapat 3 provider slot yang paling berpengalaman dan telah berdiri semenjak pertama kali mesin slot online dengan mengaplikasikan uang autentik ada. 3 provider 
itu yakni Spade Gaming, Pragmatic Play, dan Top Terhangat Gaming. <br><br>
Ketiga provider tersebut telah sama-sama terjamin sanggup menghadirkan mesin slot online berkualitas, dari segi profit, ketiga provider juga mempunyai keunggulan masing-masing. 
Pada artikel ini, admin akan menguraikan keuntungan jikalau bermain di provider slot Top Isu Gaming. Berikut ini adalah uraiannya silahkan simak dengan baik.<br><br>
<ul>
<li><b>Banyak Alternatif Mesin Slot Online</b><br>
Pantas dengan namanya, Top Isu Gaming senantiasa mengeluarkan mesin slot baru tiap beberapa pekan satu kali. Top Terhangat Gaming sangat populer yang dimana para pemain bisa mendapatkan 
pengalaman yang sangat luar biasa. Karena Anda bisa bermain di website situs slot online Black88 untuk melihat grafis yang sangat luar biasa. Sebagai contoh Top Trend dengan menghadirkan 
tema-tema slot yang pantas dengan apa yang sedang booming di Indonesia. <br><br>
Hadirnya game baru ini bukan hanya sebagai pembunuh bosan bagi para pemain. Tetapi Toptrend Gaming selalu memberikan bonus-bonus baru juga untuk para pemain sehingga main di mesin slot 
baru TTG akan mendatangkan banyak kemenangan.</li><br>
<li><b>Mesin Slot Online Terbaik yang Bermutu</b><br>
Semua mesin slot yang ada di Top Terkini Gaming yaitu mesin slot terbaik yang kualitasnya telah betul-betul terjamin. Ini ternyata dari tak pernah adanya keluhan dari para pemain soal mesin 
slot mengalami error atau lag bagi setiap pemain yang daftar slot online dan bermain di TTG. Bermain di mesin slot TTG akan memberikan kenyaman lebih sehingga akan lebih dapat berfokus dalam 
meraih kemenangan dan memasang taruhan dengan nominal bet yang ideal</li><br>
<li><b>Pola Payline Kali Muncul di Mesin Slot Top Isu Gaming</b><br>
Mesin-mesin slot online TTG terkenal dengan pola paylinenya yang mudah didapatkan dan acap kali timbul. Ini membikin para pemain hampir selalu mendapatkan upah pada spin yang dijalankan di 
mesin slot TTG. Memang upah dari macam payline atau payout ini bukan termasuk bayaran tinggi dalam game mesin slot. Malahan jenis bayaran ini tergolong yang paling rendah, tapi yang penting 
untuk diperhatikan ialah, sekiranya anda kapabel menerima bayaran ini pada tiap spin maka macam bayaran ini akan menjadi sebuah keuntungan yang besar pula.<br><br>
Maka ini sudah mulai disadari oleh banyak pemain lama, sehingga mereka tidak melulu mencari bonus atau jackpot besa, melainkan juga mesin dengan pola payline yang sering timbul. Dan hasil 
dari kesadaran hal yang demikian, para pemain lama kapabel menang cukup banyak pada setiak kali momen dia bertaruh. Karenanya dari itu admin juga memberi masukan anda untuk bertaruh di 
provider TTG karena dia menawarkan bayaran payline menguntungkan.</li><br>
<li><b>Banyak Bonus dan Promo dari Isu Slot Untuk Pemain Top Terhangat Gaming</b><br>
Keunggulan terakhirnya adalah Top Trend Gaming yakni provider yang paling banyak berkerja sama dengan website judi slot untuk memberikan bonus-bonus tertentu ke para pemain. Bonus ini 
contohnya yaitu bonus TO 5% untuk pemain Top Isu Gaming. Karenanya pemain yang bermain di TTG akan mendapatkan 5% dari total taruhan yang mereka pasang selama bermain.</li><br>
</ul>`;

let titleBody_6 = document.createElement('h2');
titleBody_6.setAttribute("class", "text-warning text-center");
titleBody_6.innerHTML = 'Promo Menarik di Website Situs Slot Online Black88';

let divBody_6 = document.createElement('div');
divBody_6.setAttribute("class", "text-white justify");

let descBody_6 = document.createElement('p');
descBody_6.innerHTML = `
<ol>
<li>Minimal Deposit Untuk Mendapatkan Welcome Bonus 50% adalah Rp 50.000, dan ditambah 10K saat pertama kali melakukan Deposit dengan akun baru yang terdaftar di Black88.</li>
<li>Maksimal Bonus yang diberikan adalah sebesar Rp 500.000,- Promo Welcome Bonus akan diberikan di awal.</li>
<li>Syarat Withdraw adalah Saldo x 7 (Jika Belum Mencapai Target Tidak bisa Withdraw) Contoh : Player A Deposit Rp 100,000 bonus Rp 50,000 Total Rp. 150,000.- maka Saldo x 7 target Saldo untuk withdraw = Rp 1,050,000.-</li>
<li>Minimal Deposit untuk mendapatkan Bonus Deposit adalah Rp 20.000,- Bonus Maksimal yang diberikan adalah sebesar Rp 10.000,000,-</li>
<li>Syarat Withdraw untuk 10% TO dikali 5</li>
<li>Bonus Deposit Harian tidak dapat digabung dengan Welcome Bonus di hari yang sama</li>
<li>Promo Bonus Deposit Harian hanya berlaku 1 hari sekali terhitung reset 00.00 WIB - 00.00 WIB</li>
<li>Bonus Deposit harian wajib diklaim via LiveChat atau Whatsapp dan dianggap setuju dengan ketentuan syarat Withdraw</li>
<li>Jika ingin melakukan Withdraw belum capai target TO maka belum boleh Withdraw sampai TO tercapai Jika terjadi kecurangan Kesamaan IP, Nomor Rekening , Dan Lain-Lain Yang Disengaja Akan Dikenakan Sanksi Oleh Pihak 
Black88 Dengan Penutupan Account.</li>
<li>Dapatkan Zippo Limited Edition dengan Minimal Depo 200.00</li>
<li>TO yang harus dicapai adalah 1x (Deposit 200.000 harus dimainkan sampai menyentuh TO)</li>
<li>1 User ID hanya dapat klaim 1x bonus Zippo Eksklusif</li>
<li>Berlaku untuk semua permainan yang ada di Black88</li>
<li>Wajib Screenshot hasil klaim lalu di posting di group facebook Black88</li>
</ol> <br><br>`;

containerContent.append(rowContent);
rowContent.append(colBanner, colBody);
colBanner.append(titleBanner, imgBanner);
colBody.append(titleBody, divBody, titleBody_2, divBody_2, titleBody_3, divBody_3, titleBody_4, divBody_4, titleBody_5, divBody_5, titleBody_6, divBody_6);
divBody.append(descBody);
divBody_2.append(descBody_2);
divBody_3.append(descBody_3);
divBody_4.append(descBody_4);
divBody_5.append(descBody_5);
divBody_6.append(descBody_6);

// TABLE DI CONTENT
// let tableContent = document.createElement('table');
// tableContent.className = 'list_table';
// let theadContent = document.createElement('thead');
// let tbodyContent = document.createElement('tbody');

// containerContent.append(rowContent);
// rowContent.append(colBody);
// colBody.append(tableContent);
// tableContent.append(theadContent, tbodyContent);

// // Creating and adding data to first row of the table
// let row_1_content = document.createElement('tr');
// let heading_1_content = document.createElement('th');
// heading_1_content.innerHTML = "Slot Online Bomslot";
// heading_1_content.setAttribute("colspan", "3");

// row_1_content.appendChild(heading_1_content);
// theadContent.appendChild(row_1_content);

// // Creating and adding data to second row of the table
// let row_2_content = document.createElement('tr');
// let row_2_data_1_content = document.createElement('td');
// row_2_data_1_content.setAttribute("class", "tab-title p-2");
// row_2_data_1_content.innerHTML = "Nama Game:";
// let row_2_data_2_content = document.createElement('td');
// row_2_data_2_content.setAttribute("class", "p-2");
// row_2_data_2_content.innerHTML = 'Slot Online';

// row_2_content.appendChild(row_2_data_1_content);
// row_2_content.appendChild(row_2_data_2_content);
// tbodyContent.appendChild(row_2_content);

// // Creating and adding data to third row of the table
// let row_3_content = document.createElement('tr');
// let row_3_data_1_content = document.createElement('td');
// row_3_data_1_content.setAttribute("class", "p-2");
// row_3_data_1_content.innerHTML = "Platform:";
// let row_3_data_2_content = document.createElement('td');
// row_3_data_2_content.setAttribute("class", "p-2");
// row_3_data_2_content.innerHTML = 'ANDROID, IOS, WINDOWS, OSX, dan WEB';

// row_3_content.appendChild(row_3_data_1_content);
// row_3_content.appendChild(row_3_data_2_content);
// tbodyContent.appendChild(row_3_content);

// // Creating and adding data to third row of the table
// let row_4_content = document.createElement('tr');
// let row_4_data_1_content = document.createElement('td');
// row_4_data_1_content.setAttribute("class", "p-2");
// row_4_data_1_content.innerHTML = "Kategori:";
// let row_4_data_2_content = document.createElement('td');
// row_4_data_2_content.setAttribute("class", "p-2");
// row_4_data_2_content.innerHTML = 'Game';

// row_4_content.appendChild(row_4_data_1_content);
// row_4_content.appendChild(row_4_data_2_content);
// tbodyContent.appendChild(row_4_content);

// // Creating and adding data to third row of the table
// let row_5_content = document.createElement('tr');
// let row_5_data_1_content = document.createElement('td');
// row_5_data_1_content.setAttribute("class", "p-2");
// row_5_data_1_content.innerHTML = "Rating:";
// let row_5_data_2_content = document.createElement('td');
// row_5_data_2_content.setAttribute("class", "p-2");
// row_5_data_2_content.innerHTML = '5 (7785188 suara )';

// row_5_content.appendChild(row_5_data_1_content);
// row_5_content.appendChild(row_5_data_2_content);
// tbodyContent.appendChild(row_5_content);

// // Creating and adding data to third row of the table
// let row_6_content = document.createElement('tr');
// let row_6_data_1_content = document.createElement('td');
// row_6_data_1_content.setAttribute("class", "p-2");
// row_6_data_1_content.innerHTML = "Minimal Deposit:";
// let row_6_data_2_content = document.createElement('td');
// row_6_data_2_content.setAttribute("class", "p-2");
// row_6_data_2_content.innerHTML = 'Rp. 10.000';

// row_6_content.appendChild(row_6_data_1_content);
// row_6_content.appendChild(row_6_data_2_content);
// tbodyContent.appendChild(row_6_content);

// Content After Table 
// let divBody_5 = document.createElement('div');
// divBody_5.setAttribute("class", "text-white mt-4");

// let descBody_5 = document.createElement('p');
// descBody_5.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsum soluta ver. <ul> <li>Sweet Bonanza</li><li>Gate of Olympus (Slot Zeus)</li><li>Aztec Gems</li><li>Jokers Jewels </li ><li>Starlight Princess </li><li>Wild West Gold </li></ul >  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quas exercitationem non. Cum repudiandae reprehenderit, animi debitis esse iste facere, ratione qui ut itaque deleniti';

// colBody.append(divBody_5);
// divBody_5.append(descBody_5);

// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerContent);

// FOOTER
let footer = document.createElement('footer');
footer.setAttribute("class", "text-center");

let conFoo = document.createElement('div');
conFoo.setAttribute("class", "container text-white-50 py-2");

let textFoo = document.createElement('h5');
textFoo.setAttribute("class", "fs-6");
textFoo.innerHTML = 'copyright &copy; 2022 by Mentari138';

footer.append(conFoo);
conFoo.append(textFoo);
document.querySelector('#app').appendChild(footer);

// FOOTER MENU
let fixedFooter = document.createElement('div');
fixedFooter.className = 'fixed-footer d-lg-none';
fixedFooter.innerHTML = '<a href="https://13.213.113.183/mobile/promotion" rel="nofollow noopener" target="_blank"><img max-height="10" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/bonus_nrpcrt.webp" alt="Bonus Promo BomSlot"></img> Bonus</a>';

let link1 = document.createElement('a');
link1.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link1.className = 'tada';
link1.innerHTML = '<img class="center" height="25" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/user_mhgeva.svg" alt="Daftar Slot Online BomSlot"></img> Daftar';

let link2 = document.createElement('a');
link2.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link2.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/whatsapp_kcggke.svg" alt="Whatsapp"></img> Whatsapp';

let link3 = document.createElement('a');
link3.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link3.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/live-chat_qnj9vv.svg" alt="Live Chat"></img> Live Chat';

fixedFooter.append(link1, link2, link3);
document.querySelector('#app').appendChild(fixedFooter);