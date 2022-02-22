package com.mbafour.mba.exception;

public class NoExistWishIdException extends RuntimeException{
    private static final String MESSAGE = "Wish doesn't exist";
    public NoExistWishIdException() { super((MESSAGE)); }
}
