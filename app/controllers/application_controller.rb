 class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery 

  after_filter :set_csrf_cookie_for_ng

  def angular
  # byebug
    # if current_user
      # byebug
      render "layouts/angular"
    # else
    #   redirect_to signin_path, layout: 'sessions'
    # end
  end

  def after_sign_in_path_for(resource)
      root_path
  end

  def after_sign_out_path_for(resource)
      root_path
  end

  private
    def set_user
      @user||= current_user
    end

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected
    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end
end
