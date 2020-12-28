<?php

namespace App\GraphQL\Queries;

use App\Exceptions\CustomException;
use function auth;

class TransactionQuery
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        if(auth()->check('api'))
            return auth()->user()->transactions;
        throw new CustomException('Unauthorized', 401);
    }
}
