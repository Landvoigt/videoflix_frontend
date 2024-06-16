import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';

/**
 * ErrorService handles HTTP error responses and displays appropriate error messages.
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private alertService: AlertService) { }

  /**
   * Handles HTTP errors based on status code and calls appropriate error handlers.
   * @param error The HttpErrorResponse object containing error details.
   * @param errorHandlers An object mapping HTTP status codes to error handling functions.
   */
  handleHttpError(error: HttpErrorResponse, errorHandlers: { [key: number]: (error: HttpErrorResponse) => void }): void {
    if (error.status === 0) {
      this.showAlert('The server did not respond. Please check your connection.');
    } else {
      const errorHandler = errorHandlers[error.status];
      if (errorHandler) {
        errorHandler(error);
      } else {
        this.showAlert('An unexpected error occurred. Please try again later.');
      }
    }
  }


  /**
   * Handles register specific HTTP errors.
   * @param error The HttpErrorResponse object containing register error details.
   */
  handleRegisterError(error: HttpErrorResponse): void {
    const errorHandlers = {
      400: (error: HttpErrorResponse) => {
        this.showAlert('Email and password are required.');
      },
      409: (error: HttpErrorResponse) => {
        this.showAlert('This user already exists.');
      },
      500: (error: HttpErrorResponse) => {
        this.showAlert('Error creating user. Please try again later.');
      }
    };
    this.handleHttpError(error, errorHandlers);
  }


  /**
   * Handles login specific HTTP errors.
   * @param error The HttpErrorResponse object containing login error details.
   */
  handleLoginError(error: HttpErrorResponse): void {
    const errorHandlers = {
      400: (error: HttpErrorResponse) => {
        if (error.error.error === 'Please provide email or username and password') {
          this.showAlert('Please provide email or username and password.');
        } else if (error.error.error === 'Invalid email') {
          this.showAlert('Invalid email!');
        } else if (error.error.error === 'Invalid username') {
          this.showAlert('Invalid username!');
        } else if (error.error.error === 'Invalid password') {
          this.showAlert('Invalid password!');
        } else {
          this.showAlert('An unexpected error occurred. Please try again later.');
        }
      }
    };
    this.handleHttpError(error, errorHandlers);
  }


  /**
   * Handles send mail specific HTTP errors.
   * @param error The HttpErrorResponse object containing send mail error details.
   */
  handleSendMailError(error: HttpErrorResponse): void {
    const errorHandlers = {
      400: (error: HttpErrorResponse) => {
        this.showAlert('No existing user with the given email.');
      }
    };
    this.handleHttpError(error, errorHandlers);
  }


  /**
   * Handles reset password specific HTTP errors.
   * @param error The HttpErrorResponse object containing reset password error details.
   */
  handleResetPasswordError(error: HttpErrorResponse): void {
    const errorHandlers = {
      400: (error: HttpErrorResponse) => {
        this.showAlert('No existing user with the given email.');
      }
    };
    this.handleHttpError(error, errorHandlers);
  }


  /**
   * Displays an alert message using the AlertService.
   * @param message The message to display in the alert.
   */
  showAlert(message: string) {
    this.alertService.showAlert(message, 'error');
  }
}