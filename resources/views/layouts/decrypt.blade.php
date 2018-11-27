@extends('layouts.app')
@section('content')
<form method="post" id="textUpload" class="form" action="{{ action('DecryptController@upload') }}" enctype="multipart/form-data">
    @csrf
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif
    <div class="modal-body row">
        <div class="col-md-6 text-center">
            @yield('fileOrText')
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary active">
                    <input type="radio" name="encChoiceAES" id="AESdec" value='true' autocomplete="off" checked> AES
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="encChoiceRSA" id="RSAdec" value='false' autocomplete="off"> RSA
                </label>
            </div>
        </div>
        <div class="col-md-1 text-center">
        </div>
        <div class="col-md-5 text-center">
            <div class="card" id="decInputFile">
                <div class="card-header">Encryption Key</div>
                <div class="card-body">
                    @if ($message = Session::get('success'))
                    <div class="alert alert-success alert-block">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        <strong>{{ $message }}</strong>
                    </div>
                    @endif
                    <div class="form-group">
                        <input type="file" class="form-control-file" name="userDecryptionKeyFile" id="userDecryptionKeyFile" aria-describedby="fileHelp">
                        <small id="fileHelp" class="form-text text-muted">Please upload a file. Size should not be more than 2MB.</small>
                    </div>
                </div>
            </div>
            <div class="card" id="decInputText" style="display: none;">
                <div class="card-header">Encryption Key</div>
                <div class="card-body">
                    <textarea name="userDecryptionKeyText" id="userDecryptionKeyText" class="form-control" rows="5" cols="25"></textarea>
                </div>
            </div>
            <div class="btn-group btn-group-toggle" data-toggle="buttons" id="encOptions">
                <label class="btn btn-secondary active">
                    <input type="radio" name="encOptions" value="manualFile" id="decFile" autocomplete="off" checked>File
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="encOptions" value="manualText" id="decText" autocomplete="off">Text
                </label>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <button class="btn text-center" type="submit">Upload</button>
            </div>
        </div>
    </div>
</form>

<script type="text/javascript" src="{{ URL::asset('js/all.js') }}"></script>

@endsection
