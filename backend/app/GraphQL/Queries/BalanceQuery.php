<?php

namespace App\GraphQL\Queries;
use App\Exceptions\CustomException;
use function auth;
use function response;

class BalanceQuery
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        if (auth()->check('api'))
            return auth()->user()->balance;

        throw new CustomException('Unauthorized', 401);
    }
}
