<?php
namespace App\Exceptions;

use Exception;
use Nuwave\Lighthouse\Exceptions\RendersErrorsExtensions;
class CustomException extends Exception implements RendersErrorsExtensions
{
    /**
     * @var @string
     */
    protected $code;

    public function __construct(string $message, int $code)
    {
        parent::__construct($message);

        $this->code = $code;
    }

    /**
     * Returns true when exception message is safe to be displayed to a client.
     *
     * @api
     * @return bool
     */
    public function isClientSafe():bool
    {
        return true;
    }

    public function getCategory()
    {
        return 'custom';
    }

    public function extensionsContent(): array
    {
        return [
            'code'=>$this->code
        ];
    }
}
