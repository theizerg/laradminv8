@extends('layouts.adminfront')


@section('title', 'Login')

@section('content')
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8"><br>
            <div class="card-group mt-5">
                <div class="card p-4 mt-5 card-primary">
                    <div class="card-body">
                        <h1>Iniciar Sesión</h1>
                        <p class="text-muted">Ingresa tu cuenta</p>
                         <form id="main-form" autocomplete="off"><br>
                          <input type="hidden" id="_url" value="{{ url('login') }}">
                          <input type="hidden" id="_redirect" value="{{ url('/') }}">
                          <input type="hidden" id="_token" value="{{ csrf_token() }}">  
                            <div class="form-group mb-3">
                              <div class="input-group input-group-alternative">
                                <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="fas fa-user-tie"></i></span>
                                </div>
                                <input id="username" type="text" class="form-control" name="username" autocomplete="off" autofocus placeholder="Usuario">

                                  @error('username')
                                      <span class="invalid-feedback text-center" role="alert">
                                          <strong>{{ $message }}</strong>
                                      </span>
                                  @enderror
                              </div>
                               <span class="missing_alert text-danger text-center" id="username_alert"></span>
                            </div>
                             <div class="form-group">
                              <div class="input-group input-group-alternative">
                                <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="fas fa-lock"></i></span>
                                </div>
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password"  placeholder="Contraseña">
                                @error('password')
                                    <span class="invalid-feedback text-center" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                              </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <button type="submit" class="btn blue darken-4 form-control" id="boton">
                                        <i class="fas fa-sign-in-alt text-white" id="ajax-icon"></i> <span class="text-white ml-3">{{ __('Iniciar Sesión') }}</span>
                                    </button>                           
                                </div>   
                               
                            </div>
                        </form>
                    </div>
                </div><br>
                <div class="card text-white blue darken-4 py-5 mt-5 d-md-down-none" style="width:44%">
                    <div class="card-body text-center ">
                        <h2 class="text-white">LARADMIN</h2>
                        <small class="text-center font-italic ">
                           Sistema para iniciar proyectos a desarrollar en Laravel 
                        </small>
                        <br>
                        <i class="mdi mdi-handshake fa-5x mt-5"></i>
                        <div>
                            
      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@push('scripts')

    <script src="{{ asset('js/admin/auth/login.js') }}"></script>
@endpush