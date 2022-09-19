@extends('adminlte::page')

@section('content_header')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif





                    <div id="app">


                    </div>



                </div>
            </div>
        </div>
    </div>
</div>
@viteReactRefresh
@vite('resources/js/app.jsx')

@endsection
