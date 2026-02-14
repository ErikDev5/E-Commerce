package com.dontwait.server.service;

import com.dontwait.server.dto.request.auth.SendOTPRequest;

public interface SmsSenderService {
    void sendSms(SendOTPRequest request);
}
