<?php

namespace App\GraphQL\Mutations;

use App\Exceptions\CustomException;
use App\Repositories\Transaction\TransactionRepository;
use function auth;

class TransferMoneyMutator
{
    protected $transactionRepo;

    public function __construct(TransactionRepository $transactionRepo)
    {
        $this->transactionRepo = $transactionRepo;
    }

    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {

        $remainingBalance = auth()->user()->balance - $args['amount'];
        if ( $remainingBalance > 0)
            return $this->transactionRepo->createTransaction($args);
        throw new CustomException('No available money to transfer', 404);
    }

}
