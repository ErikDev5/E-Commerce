package com.dontwait.server.enums;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

@Getter
@AllArgsConstructor
@FieldDefaults(level = lombok.AccessLevel.PRIVATE, makeFinal = true)
public enum ErrorCode {
    INVALID_ID_KEY(1001, "Invalid Message key, you should check your key", HttpStatus.BAD_REQUEST),
    UNCATEGORIZED(6789, "Uncategorized Exception", HttpStatus.INTERNAL_SERVER_ERROR),
    UNAUTHENTICATED(1005, "Unauthenticated", HttpStatus.UNAUTHORIZED),
    UNAUTHORIZEED(1006, "You do not have permission to access this resource", HttpStatus.FORBIDDEN);

    int code;
    String message;
    HttpStatus httpStatus; 
}
