<?php

class Comment extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		'author' => 'required',
		'title' => 'required',
	];

	// Don't forget to fill this array
	protected $fillable = ['text', 'author'];

}
