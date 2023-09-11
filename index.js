//Bài 1:Tính tiền lương nhân viên
var soNgayEl = document.getElementById("soNgay");

var luong1Ngay = 100000;

 function tinhLuong(){
     document.getElementById("result").innerHTML = `Tiền lương của nhân viên là: ${soNgayEl.value * luong1Ngay} vnd`;

 }

//  Bài 2: Tính giá trị trung bình

var soThucEl = document.getElementById("soThuc");

var so1, so2, so3, so4, so5, sumSothuc;

function tinhSothuc(){
    so1 = Math.floor(soThucEl.value / 10000);
    console.log(so1);
    so2 = Math.floor(soThucEl.value % 10000 / 1000 );
    console.log(so2);
    so3 = Math.floor(soThucEl.value % 10000 % 1000 / 100);
    console.log(so3);
    so4 = Math.floor(soThucEl.value % 10000 % 1000 % 100 /10);
    console.log(so4);
    so5 = Math.floor(soThucEl.value % 10); 
    console.log(so5);
    sumSothuc = so1 + so2 + so3 + so4 + so5;
    console.log(sumSothuc);
    document.getElementById("trungBinh").innerHTML = `Gía trị trung bình của 5 số là: ${sumSothuc / 5}`;
}

//Bài 3: Quy đổi tiền

var soTienEl = document.getElementById("soTien");

function quyDoi(){
    document.getElementById("thanhTien").innerHTML = ` Số tiền sau quy đổi là: ${soTienEl.value * 23500} (VND)`;
}

//Bài 4: Tính diện tích và chu vi hình chữ nhật
var chieuDaiEl = document.getElementById("chieuDai");
var chieuRongEl = document.getElementById("chieuRong");


function tinhDienChu(){
    var dienTich, chuVi;
    dienTich = chieuDaiEl.value * chieuRongEl.value;
    console.log(dienTich);
   
    chuVi = 2 * (chieuDaiEl.value*1 + chieuRongEl.value*1);
    console.log(chuVi);

    document.getElementById("hcn").innerHTML = `
    Diện tích hình chữ nhật là: ${dienTich} <br/>
    Chu vi hình chữ nhật là: ${chuVi}`;
}

//Bài 5: Tính tổng 2 ký số

var kiSoEl = document.getElementById("kiSo");
var ki1, ki2, sumKiso;

function tinhTong(){
    
    ki1 = Math.floor(kiSoEl.value / 10);
    console.log(ki1);
    ki2 = Math.floor(kiSoEl.value % 10);
    console.log(ki2);
    sumKiso = ki1 + ki2;
    console.log(sumKiso);
    document.getElementById("calc").innerHTML = `Tổng 2 kí số là: ${sumKiso}`;
}