class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  def login!(artist)
    session[:session_token] = artist.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
  
  def current_user
    @current_user ||= Artist.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end
end
