<?php

namespace App\Http\Controllers;

use App\Models\User;
use Validator;
use Illuminate\Http\Request;

class AuthController extends BaseController
{
    //
    function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name'=> 'required',
            'email'=>'required',
            'password'=>'required'
        ]);
        if($validator->fails()){
            return $this->sendErrorResponse('validator Error',$validator->errors());
        }
        $input = $request->all();
        $input['password'] =bcrypt($input['password']);
        $user = User::create($input);
        $success['user']= $user;
        return $this->sendResponse($success,'User registed successfully');
    }
    function login(Request $request){
        $credentials = request(['email','password']);
        if(!$token = auth()->attempt($credentials)){
            return $this->sendErrorResponse('Unauthorized',['error'=>'Unauthorized']);
        }
        $success = $this->respondWithToken($token);
        return $this->sendResponse($success,"User login successfully");

    }


    function logout(){
        $success = auth()->logout();
        return $this->sendResponse($success,"Logout successfully");
    }

    function refresh(){
        $success = $this->respondWithToken(auth()->refresh());
        return $this->sendResponse($success,"Token refresh successfully");
    }

    function profile(){
        $success = auth()->user();
        return $this->sendResponse($success,"Profile fetch successfully");   
    }

    protected function respondWithToken($token){
        return  [
            'access_token' =>$token,
            'token_type'=>'bearer ',
            'expires_in'=> auth()->factory()->getTTL() * 60
        ];
    }

    function showLoginForm(){
        return view('login');
    }
}
