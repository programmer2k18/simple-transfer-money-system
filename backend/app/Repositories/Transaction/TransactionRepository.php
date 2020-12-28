<?php
namespace App\Repositories\Transaction;

use App\Exceptions\CustomException;
use App\Transaction;
use App\User;
use Exception;
use function auth;

class TransactionRepository
{
    protected $transaction;

    public function __construct(Transaction $transaction)
    {
        $this->transaction = $transaction;
    }

    public function createTransaction( array $data)
    {
        if ( $this->isTargetAccountExists( $data['to'] ) ){

            return $this->transaction->create([
                'from' => auth()->user()->id,
                'to' => $data['to'],
                'amount' => $data['amount']
            ]);
        }

    }

    public function isTargetAccountExists( int $id ){
        try {
            return User::findOrFail($id);
        }catch (Exception $e){
            throw new CustomException('Targeted Account Not Exists', 404);
        }
    }
}
