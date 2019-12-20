<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class RequiredIfIn implements Rule
{
    protected $input = [];
    protected $field = '';
    protected $list = [];
    protected $attribute = '';

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(array $input, string $field, array $list)
    {
        $this->input = $input;
        $this->field = $field;
        $this->list = $list;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $this->attribute = $attribute;
        $field = isset($this->input[$this->field]) ? $this->input[$this->field] : false;
        if($field)
        {
            if(in_array($field, $this->list))
            {
                return $value && $value !== "";
            }
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The ' . $this->attribute . ' field is required.';
    }
}
