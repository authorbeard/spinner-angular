class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController


  def spotify
    byebug
    if current_user
      current_user.add_omniauth(request.env['omniauth.auth'])

    end
    @user = User.from_omniauth(request.env["omniauth.auth"])
    if @user.persisted?
      byebug
      sign_in_and_redirect @user, :event => :authentication 
      set_flash_message(:notice, :success, :kind => "Spotify") if is_navigational_format?
    else
      session["devise.spotify_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to root_path
  end

end