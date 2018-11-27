<?php

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

use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/encrypt_text', 'EncryptController@encrypt_text_view');
Route::post('/encrypt_text', 'EncryptController@upload');

Route::get('/encrypt_file', 'EncryptController@encrypt_file_view');
Route::post('/encrypt_file', 'EncryptController@upload');

Route::get('/decrypt_text', 'DecryptController@decrypt_text_view');
Route::post('/decrypt_text', 'DecryptController@upload');

Route::get('/decrypt_file', 'DecryptController@decrypt_file_view');
Route::post('/decrypt_file', 'DecryptController@upload');
