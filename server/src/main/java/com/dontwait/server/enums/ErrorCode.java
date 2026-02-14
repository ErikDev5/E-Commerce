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
    UNAUTHORIZEED(1006, "You do not have permission to access this resource", HttpStatus.FORBIDDEN),
    INVALID_PHONE_NUMBER(1007, "Invalid phone number format", HttpStatus.BAD_REQUEST),
    PHONE_NUMBER_REQUIRED(1008, "Phone number is required", HttpStatus.BAD_REQUEST),
    COUNTRY_CODE_REQUIRED(1009, "Country code is required", HttpStatus.BAD_REQUEST),
    INVALID_COUNTRY_CODE(1010, "Invalid country code format", HttpStatus.BAD_REQUEST), 
    OTP_VERIFY_LIMIT_EXCEEDED(1011, "OTP verification limit exceeded", HttpStatus.TOO_MANY_REQUESTS), 
    OTP_EXPIRED(1012, "OTP has expired", HttpStatus.BAD_REQUEST),
    OTP_RATE_LIMIT_EXCEEDED(1013, "OTP rate limit exceeded", HttpStatus.TOO_MANY_REQUESTS),
    SMS_SEND_FAILED(1014, "Failed to send SMS", HttpStatus.INTERNAL_SERVER_ERROR);
    int code;
    String message;
    HttpStatus httpStatus; 
}
