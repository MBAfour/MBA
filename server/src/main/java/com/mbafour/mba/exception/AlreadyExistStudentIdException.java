package com.mbafour.mba.exception;

public class AlreadyExistStudentIdException extends RuntimeException {
    private static final String MESSAGE = "Student Id is already taken!";
    public AlreadyExistStudentIdException() {
        super(MESSAGE);
    }
}
