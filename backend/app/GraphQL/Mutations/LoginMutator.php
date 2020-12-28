<?php

namespace App\GraphQL\Mutations;

use App\Exceptions\CustomException;
use Illuminate\Support\Arr;
use function auth;

class LoginMutator
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $credentials =  Arr::only($args, ['email', 'password']);
        if (! $token = auth()->attempt($credentials))
            throw new CustomException('Unauthorized', 401);
        return $this->respondWithToken($token);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return array
     */
    protected function respondWithToken($token):array
    {
        return [
            'user'=>auth()->user(),
            'token'=>$token
        ];
    }
}
