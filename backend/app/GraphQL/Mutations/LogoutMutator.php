<?php

namespace App\GraphQL\Mutations;

class LogoutMutator
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        auth('api')->logout();
        return 'Successfully logged out';
    }
}
