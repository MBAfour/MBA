package com.mbafour.mba.exception;

public class LowBidPriceException extends RuntimeException {
    private static final String MESSAGE = "bid is low!";
    public LowBidPriceException() {
        super(MESSAGE);
    }
}
