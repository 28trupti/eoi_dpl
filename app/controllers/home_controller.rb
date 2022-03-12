class HomeController < ApplicationController
  include Rails.application.routes.url_helpers
  skip_before_action :verify_authenticity_token
  
  def index
      if current_user.eoi_questionaires.last&.completed
        redirect_to root_path, notice: "You have already submit the form"
      else 
        @eoi_questionaire = current_user.eoi_questionaires.last
      end
  end

  def thankyou

  end

  def instruction

  end

  def download_excel
  send_file(
    "#{Rails.root}/public/your_file.xlsx",
    
    type: "application/xlsx"
  )
  end

  def report
    @eoi_questionaire = User.find(params[:user_id]).eoi_questionaires.where(completed: true).last
    respond_to do|format|
            format.xlsx
    end
  end

  def users

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
