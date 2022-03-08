class HomeController < ApplicationController
  include Rails.application.routes.url_helpers
  skip_before_action :verify_authenticity_token
  def index
  end

  def save_attachment 
    attachment = Attachment.new(file: params[:file])
    attachment.user_id = current_user.id
    if attachment.save 
      render json: {url: rails_blob_url(attachment.file), id: attachment.id, success: true}
    else
      render json: {success: false} 
    end
  end
end
