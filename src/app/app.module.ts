import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web/web.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './web/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GioithieuComponent } from './web/gioithieu/gioithieu.component';
import { SanphamComponent } from './web/sanpham/sanpham.component';
import { TintucComponent } from './web/tintuc/tintuc.component';
import { LienheComponent } from './web/lienhe/lienhe.component';
import { SlideComponent } from './web/slide/slide.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DanhsachsanphamComponent } from './admin/danhsachsanpham/danhsachsanpham.component';
import { ThemsanphamComponent } from './admin/themsanpham/themsanpham.component';
import { SuasanphamComponent } from './admin/suasanpham/suasanpham.component';
import { LichsubanComponent } from './admin/lichsuban/lichsuban.component';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    GioithieuComponent,
    SanphamComponent,
    TintucComponent,
    LienheComponent,
    SlideComponent,
    GiohangComponent,
    ChitietspComponent,
    DangnhapComponent,
    DangkyComponent,
    ThanhtoanComponent,
    HoadonComponent,
    DanhsachthanhvienComponent,
    TaikhoancuatoiComponent,
    DiachikhachhangComponent,
    ChitethoadonComponent,
    ThemthanhvienComponent,
    SuathanhvienComponent,
    DanhsachsanphamComponent,
    ThemsanphamComponent,
    SuasanphamComponent,
    LichsubanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
