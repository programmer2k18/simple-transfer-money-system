<?php

namespace App\GraphQL\Mutations;

use App\Exceptions\CustomException;
use App\Repositories\User\UserRepository;
use Illuminate\Support\Arr;
use function auth;
use function response;

class SignUpMutator
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository; //dependency Injection
    }

    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        //create user first
        $user = $this->userRepository->createUser($args);

        //authenticate user
        $credentials =  Arr::only($args, ['email', 'password']);
        if (! $token = auth()->attempt($credentials))
            throw new CustomException('Something went wrong, please try again', 404);
        return $this->respondWithToken($token);
    }

    public function respondWithToken( $token):array
    {
        return [
            'user'=>auth()->user(),
            'token'=>$token
        ];
    }
}
