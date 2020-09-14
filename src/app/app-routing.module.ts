import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web/web.component';
import { HomeComponent } from './web/home/home.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GioithieuComponent } from './web/gioithieu/gioithieu.component';
import { SanphamComponent } from './web/sanpham/sanpham.component';
import { TintucComponent } from './web/tintuc/tintuc.component';
import { LienheComponent } from './web/lienhe/lienhe.component';
import { GiohangComponent } from './web/giohang/giohang.component';
import { ChitietspComponent } from './web/chitietsp/chitietsp.component';
import { DangnhapComponent } from './web/dangnhap/dangnhap.component';
import { DangkyComponent } from './web/dangky/dangky.component';
import { ThanhtoanComponent } from './web/thanhtoan/thanhtoan.component';
import { HoadonComponent } from './web/hoadon/hoadon.component';
import { DanhsachthanhvienComponent } from './admin/danhsachthanhvien/danhsachthanhvien.component';
import { TaikhoancuatoiComponent } from './web/taikhoancuatoi/taikhoancuatoi.component';
import { DiachikhachhangComponent } from './web/diachikhachhang/diachikhachhang.component';
import { ChitethoadonComponent } from './web/chitethoadon/chitethoadon.component';
import { ThemthanhvienComponent } from './admin/themthanhvien/themthanhvien.component';
import { SuathanhvienComponent } from './admin/suathanhvien/suathanhvien.component';
import { ThemsanphamComponent } from './admin/themsanpham/themsanpham.component';
import { SuasanphamComponent } from './admin/suasanpham/suasanpham.component';
import { DanhsachsanphamComponent } from './admin/danhsachsanpham/danhsachsanpham.component';
import { LichsubanComponent } from './admin/lichsuban/lichsuban.component';



const routes: Routes = [
{path: '', redirectTo: 'web', pathMatch: 'full'},
{
  path: 'web', component: WebComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'gioithieu', component: GioithieuComponent },
    { path: 'sanpham', component: SanphamComponent },
    { path: 'tintuc', component: TintucComponent },
    { path: 'lienhe', component: LienheComponent },
    { path: 'giohang', component: GiohangComponent },
    { path: 'chitietsp', component: ChitietspComponent },
    { path: 'dangnhap', component: DangnhapComponent },
    { path: 'dangky', component: DangkyComponent },
    { path: 'taikhoan' , component: TaikhoancuatoiComponent},
    { path: 'diachi' , component: DiachikhachhangComponent},
    { path: 'hoadon' , component: ChitethoadonComponent}

  ]
},
  { path: 'thanhtoan', component: ThanhtoanComponent },
  { path: 'hoadon', component: HoadonComponent },
{
  path: 'admin', component: AdminComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'danhsachthanhvien', component: DanhsachthanhvienComponent },
    { path: 'themthanhvien', component: ThemthanhvienComponent },
    { path: 'suathanhvien', component: SuathanhvienComponent },
    { path: 'danhsachsanpham', component: DanhsachsanphamComponent },
    { path: 'themsanpham', component: ThemsanphamComponent },
    { path: 'suasanpham', component: SuasanphamComponent },
    { path: 'lichsuban', component: LichsubanComponent },
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
