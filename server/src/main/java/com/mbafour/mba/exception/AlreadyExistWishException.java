package com.mbafour.mba.exception;

public class AlreadyExistWishException extends RuntimeException{
    private static final String MESSAGE = "Wish is already exist";
    public AlreadyExistWishException() { super((MESSAGE)); }
}
