@extends('layouts.decrypt')
@section('fileOrText')

<div class="card">
    <div class="card-header">Text (Max 750 characters)</div>
    <div class="form-group">
        <textarea class='form-control' name="textToUpload" rows="3"></textarea>
    </div>
</div>

@endsection

@section('fileOrText2')
   some text
@endsection

@section('fileOrText3')
   text
@endsection
