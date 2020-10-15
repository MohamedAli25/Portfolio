<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home_page');
});


Route::get('/portfolio-website/home', function () {
    return view('portfolio_website/index');
});
Route::get('/portfolio-website/about', function () {
    return view('portfolio_website/about');
});
Route::get('/portfolio-website/work', function () {
    return view('portfolio_website/work');
});
Route::get('/portfolio-website/contact', function () {
    return view('portfolio_website/contact');
});
