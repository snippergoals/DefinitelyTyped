// Type definitions for Google Recaptcha v2
// Project: https://www.google.com/recaptcha
// Definitions by: Kristof Mattei <http://kristofmattei.be>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var grecaptcha: ReCaptchaV2.ReCaptcha;

declare module ReCaptchaV2
{
  class ReCaptcha
  {
    /**
      * Renders the container as a reCAPTCHA widget and returns the ID of the newly created widget.
      * @param container The HTML element to render the reCAPTCHA widget. Specify either the ID of the container (string) or the DOM element itself.
      * @param parameters An object containing parameters as key=value pairs, for example, {"sitekey": "your_site_key", "theme": "light"}. See @see render parameters.
      * @return the ID of the newly created widget.
      **/
    render(container: (string | HTMLElement), parameters?: Parameters): number;    
    /**
      * Resets the reCAPTCHA widget.
      * @param opt_widget_id Optional widget ID, defaults to the first widget created if unspecified.
      **/
    reset(opt_widget_id?: number): void;
    /**
      * Gets the response for the reCAPTCHA widget.
      * @param opt_widget_id Optional widget ID, defaults to the first widget created if unspecified.
      * @return the response of the reCAPTCHA widget.
      **/
    getResponse(opt_widget_id?: number): string;
  }

  interface Parameters
  {
    /**
      * Your sitekey.
      **/
    sitekey: string;
    /**
      * Optional. The color theme of the widget.
      * Accepted values: "light", "dark"
      * @default "light"
      **/
    theme?: string;
    /**
      * Optional. The type of CAPTCHA to serve.
      * Accepted values: "audio ", "image"
      * @default "image"
      **/
    type?: string;
    /**
      * Optional. The tabindex of the widget and challenge. 
      * If other elements in your page use tabindex, it should be set to make user navigation easier.
      **/
    tabindex?: number;
    /**
      * Optional. Your callback function that's executed when the user submits a successful CAPTCHA response.
      * The user's response, g-recaptcha-response, will be the input for your callback function.
      **/
    callback?: (response: string) => void;
    /**
      * Optional. Your callback function that's executed when the recaptcha response expires and the user needs to solve a new CAPTCHA.
      **/
    // Notice to the reader
    // I need to surround this object with quotes, this will however break intellisense in VS 2013. 
    "expired-callback"?: () => void;
  }
}
