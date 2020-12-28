<?php

namespace App\Repositories\User;
use App\User;

class UserRepository
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function createUser(array $data){

        return $this->user->create($data);
    }

}
