@extends('layouts.app')
@section('content')
<form method="post" id="textUpload" class="form" action="{{ action('EncryptController@upload') }}" enctype="multipart/form-data">
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
            <div id="myGroup">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active" id="AESpop" data-toggle="collapse" href="#collapseExample">
                        <input type="radio" name="encChoice" id="AES" value='AES' autocomplete="off" checked> AES
                    </label>
                    <label class="btn btn-secondary" id="RSApop" data-toggle="collapse" href="#collapseExample2">
                        <input type="radio" name="encChoice" id="RSA" value='RSA' autocomplete="off"> RSA
                    </label>
                    <label class="btn btn-secondary" id="SHApop" data-toggle="collapse" href="#collapseExample3">
                        <input type="radio" name="encChoice" id="SHA" value='SHA' autocomplete="off"> SHA
                    </label>
                </div>
                <div class="accordion-group">
                    <div class="panel-collapse collapse show" id="collapseExample" style="text-align: center;">
                        <div class="card card-body" style="margin:auto; width: 70%; background-color: #d2cfcf;">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                    <div class="panel-collapse collapse" id="collapseExample2" style="text-align: center;">
                        <div class="card card-body" style="margin:auto; width: 70%; background-color: #d2cfcf;">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                    <div class="panel-collapse collapse" id="collapseExample3" style="text-align: center;">
                        <div class="card card-body" style="margin:auto; width: 70%; background-color: #d2cfcf;">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 text-center">

            {{-- File Input --}}
            <div class="card" id="encInputFile" style="pointer-events: none; opacity: 0.4;">
                <div class="card-header">Encryption Key</div>
                <div class="card-body">
                    @if ($message = Session::get('success'))
                    <div class="alert alert-success alert-block">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        <strong>{{ $message }}</strong>
                    </div>
                    @endif
                    <div class="form-group">
                        <input type="file" class="form-control-file" name="userEncryptionKeyFile" id="userEncryptionKeyFile" aria-describedby="fileHelp">
                        <small id="fileHelp" class="form-text text-muted">Please upload a file. Size should not be more than 2MB.</small>
                    </div>
                </div>
            </div>

            {{-- Text Input --}}
            <div class="card" id="encInputText" style="display: none; pointer-events: none; opacity: 0.4;">
                <div class="card-header">Encryption Key (Max 128 characters)</div>
                <div class="form-group">
                    <textarea name="userEncryptionKeyText" id="userEncryptionKeyText" class="form-control" rows="3"></textarea>
                </div>
            </div>

            {{-- Choose Input Source --}}
            <div id="myGroup2">
                <div class="btn-group btn-group-toggle" data-toggle="buttons" id="options">
                    <label class="btn btn-secondary active" data-toggle="collapse" href="#collapseEncAuto">
                        <input type="radio" id="auto" name="options" value='auto' autocomplete="off" checked> Auto-Key
                    </label>
                    <label class="btn btn-secondary" data-toggle="collapse" href="#collapseEncFile">
                        <input type="radio" name="options" value='manualFile' id="manualFile" autocomplete="off"> File-Key
                    </label>
                    <label class="btn btn-secondary" data-toggle="collapse" href="#collapseEncText">
                        <input type="radio" name="options" value='manualText' id="manualText" autocomplete="off"> Text-Key
                    </label>
                </div>
                <div class="accordion-group">
                    <div class="panel-collapse collapse show" id="collapseEncAuto" style="text-align: center;">
                        <div class="card card-body" style="margin:auto; width: 70%; background-color: #d2cfcf;">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                    <div class="panel-collapse collapse" id="collapseEncFile" style="text-align: center;">
                        <div class="card card-body" style="margin:auto; width: 70%;  background-color: #d2cfcf;">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                    <div class="panel-collapse collapse" id="collapseEncText" style="text-align: center;">
                        <div class="card card-body" style="margin:auto; width: 70%; background-color: #d2cfcf;">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Submit Button --}}
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <button class="btn text-center" style="color: #FFF; background-color: rgb(192,0,0); border-radius: 20px;" type="submit">Submit</button>
            </div>
        </div>
    </div>
</form>

<script type="text/javascript" src="{{ URL::asset('js/all.js') }}"></script>

@endsection
